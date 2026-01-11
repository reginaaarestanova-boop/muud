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
      "День был наполнен радостью и тёплыми моментами.",
      "Сегодня ты чувствовал лёгкость и удовольствие от происходящего.",
    ],
    calm: [
      "День прошёл спокойно и размеренно.",
      "Ты чувствовал внутреннее равновесие и устойчивость.",
    ],
    neutral: [
      "Спокойный день без ярких эмоций, но в привычном ритме.",
      "Обычный день, прошедший ровно и без напряжения.",
    ],
    tired: [
      "День оказался утомительным — тебе нужен отдых.",
      "Чувствовалась усталость, и это нормально.",
    ],
    excited: [
      "В этот день было ощущение вдохновения и внутреннего подъёма.",
      "Сегодня ты чувствовал подъём и внутреннюю энергию — это редкое и ценное состояние.",
    ],
    anxious: [
      "День был непростым, но ты с ним справился.",
      "Сегодня было тревожно, но это состояние временно.",
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

      {activeTab === "today" && (
        <div className="flex-1 overflow-y-auto bg-background">

          <DateStrip
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            diaryData={diaryEntries}
          />

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
              <EmptyState
                onAddNote={() => setShowAddNote(true)}
                title={
                  selectedDate < today
                    ? "Как прошёл этот день?"
                    : "Как прошёл твой день?"
                }
              />
            )}
          </div>
        </div>
      )}


      {/* HISTORY */}
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

      {/* SETTINGS */}
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
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}
    </div>
  </div>
);
}
