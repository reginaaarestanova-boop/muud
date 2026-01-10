import { useEffect, useMemo, useState } from "react";
import { DateStrip } from "./components/DateStrip";
import { EmptyState } from "./components/EmptyState";
import { NoEntryState } from "./components/NoEntryState";
import { FilledState } from "./components/FilledState";
import { BottomNavigation } from "./components/BottomNavigation";
import { History } from "./components/History";
import { Settings } from "./components/Settings";
import { AddNote } from "./components/AddNote";
import { EditNote } from "./components/EditNote";
import { Onboarding } from "./components/Onboarding";

type Theme = "dark" | "light" | "auto";
type Tab = "today" | "history" | "settings";

const STORAGE_KEY = "diary_entries";
const ONBOARDING_KEY = "onboarding_completed";
// если хочешь помнить последнюю дату — оставь, но мы НЕ будем стартовать с неё
const LAST_DATE_KEY = "muud_last_date";

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function App() {
  /* ---------- Telegram ---------- */
  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (!tg) return;
    tg.ready();
    tg.expand();
  }, []);

  /* ---------- Onboarding ---------- */
  const [showOnboarding, setShowOnboarding] = useState(() => {
    try {
      return localStorage.getItem(ONBOARDING_KEY) !== "true";
    } catch {
      return true;
    }
  });

  const handleOnboardingComplete = () => {
    try {
      localStorage.setItem(ONBOARDING_KEY, "true");
    } catch {}
    setShowOnboarding(false);
  };

  /* ---------- State ---------- */
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [selectedDate, setSelectedDate] = useState<string>(() => getTodayDate());
  const [diaryEntries, setDiaryEntries] = useState<Record<string, any>>({});
  const [showAddNote, setShowAddNote] = useState(false);
  const [editingDate, setEditingDate] = useState<string | null>(null);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showingHistoryDetail, setShowingHistoryDetail] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  const today = useMemo(() => getTodayDate(), []);
  const showReturnButton = activeTab === "today" && selectedDate !== today;

  /* ---------- Init data (и старт на today) ---------- */
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setDiaryEntries(stored ? JSON.parse(stored) : {});
    } catch {
      setDiaryEntries({});
    }

    // ВСЕГДА стартуем на сегодня
    setSelectedDate(today);
    // Debug: log initial dates to help diagnose start-date issues
    try {
      // eslint-disable-next-line no-console
      console.log(`[muud] App init: today=${today}, lastStored=${localStorage.getItem(LAST_DATE_KEY)}`);
    } catch {}
    // можно всё равно обновлять last_date чтобы календарь “знал” сегодняшнюю
    try {
      localStorage.setItem(LAST_DATE_KEY, today);
    } catch {}
  }, [today]);

  /* ---------- Persist ---------- */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(diaryEntries));
    } catch {}
  }, [diaryEntries]);

  useEffect(() => {
    try {
      localStorage.setItem(LAST_DATE_KEY, selectedDate);
      // Debug: log when selectedDate changes
      try {
        // eslint-disable-next-line no-console
        console.log(`[muud] selectedDate changed -> ${selectedDate}`);
      } catch {}
    } catch {}
  }, [selectedDate]);

  /* ---------- Theme ---------- */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");

    if (theme === "auto") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  /* ---------- CRUD ---------- */
  const handleAddNote = (entry: any) => {
  const summaries: Record<string, string[]> = {
    happy: [
      "День был наполнен радостью и приятными моментами.",
      "Удалось сохранить хорошее настроение на протяжении дня.",
    ],
    calm: [
      "Спокойный и уравновешенный день.",
      "День прошёл размеренно и без спешки.",
    ],
    neutral: [
      "Обычный день без ярких событий.",
      "Спокойный день в привычном ритме.",
    ],
    tired: [
      "День был утомительным, стоит больше отдохнуть.",
      "Чувствуется усталость, но это временно.",
    ],
    excited: [
      "День был полон вдохновения и энергии.",
      "Появилось много идей и мотивации.",
    ],
    anxious: [
      "День был непростым, но ты справился.",
      "Тревожный день, но это уже позади.",
    ],
  };

  const moodSummaries = summaries[entry.mood] || summaries.neutral;
  const summary =
    moodSummaries[Math.floor(Math.random() * moodSummaries.length)];

  const updated = {
    ...diaryEntries,
    [selectedDate]: {
      ...entry,
      summary,
      sleepLabel:
        entry.sleep >= 7
          ? "Отдохнувший"
          : entry.sleep > 4
          ? "Нормально"
          : "Невыспавшийся",
    },
  };

  setDiaryEntries(updated);
  setShowAddNote(false);
};


  const handleEditNote = (entry: any) => {
    if (!editingDate) return;

    const updated = {
      ...diaryEntries,
      [editingDate]: {
        ...diaryEntries[editingDate],
        ...entry,
        sleepLabel:
          entry.sleep >= 7 ? "Отдохнувший" : entry.sleep > 4 ? "Нормально" : "Невыспавшийся",
      },
    };

    setDiaryEntries(updated);
    setEditingDate(null);
  };

  const handleDeleteNote = (date: string) => {
    const copy = { ...diaryEntries };
    delete copy[date];
    setDiaryEntries(copy);
    setEditingDate(null);
  };

  const handleReturnToToday = () => {
    setSelectedDate(today);
  };

  /* ---------- Guards / Screens ---------- */
  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (showAddNote) {
    return (
      <div className="h-[100svh] w-full bg-background overflow-hidden flex justify-center">
        <div className="w-full max-w-[400px] h-full">
          <AddNote onClose={() => setShowAddNote(false)} onSave={handleAddNote} />
        </div>
      </div>
    );
  }

  if (editingDate && diaryEntries[editingDate]) {
    return (
      <div className="h-[100svh] w-full bg-background overflow-hidden flex justify-center">
        <div className="w-full max-w-[400px] h-full">
          <EditNote
            entry={diaryEntries[editingDate]}
            date={editingDate}
            onClose={() => setEditingDate(null)}
            onSave={handleEditNote}
            onDelete={() => handleDeleteNote(editingDate)}
          />
        </div>
      </div>
    );
  }

  const selectedEntry = diaryEntries[selectedDate];

  /* ---------- UI ---------- */
  const isFutureDate = selectedDate > today;
  return (
    <div className="h-[100svh] w-full bg-background text-foreground overflow-hidden flex justify-center">
      <div className="w-full max-w-[400px] h-full flex flex-col relative">
        {/* CONTENT */}
        {activeTab === "today" && (
          <div className="flex-1 overflow-y-auto bg-background">
            <DateStrip
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              diaryData={diaryEntries}
            />

            {/* Кнопка "Вернуться" */}
            {showReturnButton && (
              <button
                onClick={handleReturnToToday}
                className="fixed bottom-[92px] left-1/2 -translate-x-1/2 z-50
                           h-[40px] w-[160px] rounded-full
                           bg-[#F3EADF] text-black text-[15px] shadow-lg"
                style={{ fontFamily: "var(--font-main)" }}
              >
                Вернуться
              </button>
            )}

            {/* Контент */}
            <div className="px-4 pb-24 min-h-[calc(100svh-140px)] flex flex-col">
  {selectedEntry ? (
    <FilledState
      entry={selectedEntry}
      selectedDate={selectedDate}
      onEdit={() => setEditingDate(selectedDate)}
    />
  ) : isFutureDate ? (
    <NoEntryState selectedDate={selectedDate} />
  ) : (
    <>
      {/* 🟡 Заголовок для прошлых дней */}
      {selectedDate < today && (
        <h2
          className="text-[18px] mb-4 text-foreground"
          style={{ fontFamily: "var(--font-main)", fontWeight: 500 }}
        >
          Как прошёл этот день?
        </h2>
      )}

      <EmptyState onAddNote={() => setShowAddNote(true)} />
    </>
  )}
</div>
          </div>
)}

        {activeTab === "history" && (
          <div className="flex-1 overflow-hidden bg-background">
            <History
              diaryData={diaryEntries}
              onEdit={(date) => setEditingDate(date)}
              onDelete={(date) => handleDeleteNote(date)}
              onShowingDetail={setShowingHistoryDetail}
            />
          </div>
        )}

        {activeTab === "settings" && (
          <div className="flex-1 overflow-hidden bg-background">
            <Settings
              onShowAbout={setShowAboutPage}
              onThemeChange={setTheme}
              currentTheme={theme}
            />
          </div>
        )}

        {/* NAV */}
        {!showAboutPage && !showingHistoryDetail && (
          <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        )}
      </div>
    </div>
  );
}