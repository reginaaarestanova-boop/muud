import { useState, useEffect } from "react";
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

const STORAGE_KEY = "diary_entries";
const ONBOARDING_KEY = "onboarding_completed";

const getTodayDate = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export default function App() {
  /* Telegram */
  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
    }
  }, []);

  /* State */
  const [showOnboarding, setShowOnboarding] = useState(
    () => localStorage.getItem(ONBOARDING_KEY) !== "true"
  );

  const [activeTab, setActiveTab] = useState<"today" | "history" | "settings">("today");
  const [selectedDate, setSelectedDate] = useState(getTodayDate);
  const [diaryEntries, setDiaryEntries] = useState<Record<string, any>>({});
  const [showAddNote, setShowAddNote] = useState(false);
  const [editingDate, setEditingDate] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("dark");

  /* Init */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setDiaryEntries(JSON.parse(stored));
    setSelectedDate(getTodayDate()); // ⬅️ ВСЕГДА сегодня
  }, []);

  /* Persist */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(diaryEntries));
  }, [diaryEntries]);

  /* Theme */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");

    if (theme === "auto") {
      root.classList.add(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      );
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  /* Onboarding */
  if (showOnboarding) {
    return (
      <Onboarding
        onComplete={() => {
          localStorage.setItem(ONBOARDING_KEY, "true");
          setShowOnboarding(false);
        }}
      />
    );
  }

  /* Save note */
  const handleSaveNote = (entry: any) => {
    const summaryByMood: Record<string, string> = {
      happy: "День был наполнен радостью и тёплыми моментами.",
      calm: "Спокойный и уравновешенный день.",
      tired: "День был непростым — важно дать себе отдых.",
      neutral: "Обычный день, без резких перепадов.",
      excited: "Много энергии и вдохновения!",
      anxious: "День был тревожным, но ты справился.",
    };

    setDiaryEntries(prev => ({
      ...prev,
      [selectedDate]: {
        ...entry,
        summary: summaryByMood[entry.mood] ?? "Этот день был важен для тебя.",
        sleepLabel:
          entry.sleep >= 7 ? "Отдохнувший" : entry.sleep >= 5 ? "Нормально" : "Невыспавшийся",
      },
    }));

    setShowAddNote(false);
  };

  /* Screens */
  if (showAddNote) {
    return (
      <div className="h-screen bg-background overflow-hidden">
        <AddNote onClose={() => setShowAddNote(false)} onSave={handleSaveNote} />
      </div>
    );
  }

  if (editingDate && diaryEntries[editingDate]) {
    return (
      <div className="h-screen bg-background overflow-hidden">
        <EditNote
          entry={diaryEntries[editingDate]}
          date={editingDate}
          onClose={() => setEditingDate(null)}
          onSave={(data) =>
            setDiaryEntries(prev => ({ ...prev, [editingDate]: data }))
          }
          onDelete={() => {
            const copy = { ...diaryEntries };
            delete copy[editingDate];
            setDiaryEntries(copy);
            setEditingDate(null);
          }}
        />
      </div>
    );
  }

  const selectedEntry = diaryEntries[selectedDate];
  const today = getTodayDate();
  const showReturnButton = selectedDate !== today;

  /* UI */
  return (
  <div className="h-screen w-full bg-background flex justify-center overflow-hidden">
    <div className="w-full max-w-[400px] h-full flex flex-col">

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto bg-background">
        <DateStrip
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
          diaryData={diaryEntries}
        />

        <div className="px-4 pb-24 flex-1 flex">
          {selectedEntry ? (
            <FilledState
              entry={selectedEntry}
              selectedDate={selectedDate}
              onEdit={() => setEditingDate(selectedDate)}
            />
          ) : selectedDate === today ? (
            <EmptyState onAddNote={() => setShowAddNote(true)} />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <NoEntryState selectedDate={selectedDate} />
            </div>
          )}
        </div>
      </div>

      {/* Return to today */}
      {showReturnButton && (
        <button
          onClick={handleReturnToToday}
          className="fixed bottom-[92px] left-1/2 -translate-x-1/2 z-50
                     h-[40px] w-[160px] rounded-full
                     bg-[#F3EADF] text-black text-[15px]
                     shadow-lg"
          style={{ fontFamily: "var(--font-main)" }}
        >
          Вернуться
        </button>
      )}

      {/* Bottom navigation */}
      {!showAboutPage && !showingHistoryDetail && (
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

    </div>
  </div>
);
