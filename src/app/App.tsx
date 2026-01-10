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
const LAST_DATE_KEY = "muud_last_date";
const ONBOARDING_KEY = "onboarding_completed";

const getTodayDate = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export default function App() {
  /* Telegram */
  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (!tg) return;
    tg.ready();
    tg.expand();
  }, []);

  /* State */
  const today = getTodayDate();
  const [activeTab, setActiveTab] = useState<"today" | "history" | "settings">("today");
  const [selectedDate, setSelectedDate] = useState(today);
  const [diaryEntries, setDiaryEntries] = useState<Record<string, any>>({});
  const [showAddNote, setShowAddNote] = useState(false);
  const [editingDate, setEditingDate] = useState<string | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(
    localStorage.getItem(ONBOARDING_KEY) !== "true"
  );
  const [theme, setTheme] = useState<Theme>("dark");

  /* Init */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const last = localStorage.getItem(LAST_DATE_KEY);
    setDiaryEntries(stored ? JSON.parse(stored) : {});
    setSelectedDate(last ?? today);
  }, [today]);

  /* Persist */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(diaryEntries));
  }, [diaryEntries]);

  useEffect(() => {
    localStorage.setItem(LAST_DATE_KEY, selectedDate);
  }, [selectedDate]);

  /* Theme */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : theme
    );
  }, [theme]);

  /* Guards */
  if (showOnboarding) {
    return <Onboarding onComplete={() => {
      localStorage.setItem(ONBOARDING_KEY, "true");
      setShowOnboarding(false);
    }} />;
  }

  if (showAddNote) {
    return <AddNote onClose={() => setShowAddNote(false)} onSave={() => setShowAddNote(false)} />;
  }

  if (editingDate && diaryEntries[editingDate]) {
    return (
      <EditNote
        entry={diaryEntries[editingDate]}
        date={editingDate}
        onClose={() => setEditingDate(null)}
        onSave={() => setEditingDate(null)}
        onDelete={() => {
          const copy = { ...diaryEntries };
          delete copy[editingDate];
          setDiaryEntries(copy);
          setEditingDate(null);
        }}
      />
    );
  }

  const selectedEntry = diaryEntries[selectedDate];
  const showReturnButton = activeTab === "today" && selectedDate !== today;

  /* UI */
  return (
  <div className="h-screen w-full bg-background flex justify-center overflow-hidden">
    <div className="w-full max-w-[400px] h-full flex flex-col">

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto">

        {activeTab === "today" && (
          <>
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
          </>
        )}

        {activeTab === "history" && (
          <History
            diaryData={diaryEntries}
            onEdit={setEditingDate}
            onDelete={(date) => {
              const copy = { ...diaryEntries };
              delete copy[date];
              setDiaryEntries(copy);
            }}
          />
        )}

        {activeTab === "settings" && (
          <Settings
            onThemeChange={setTheme}
            currentTheme={theme}
          />
        )}
      </div>

      {/* RETURN BUTTON */}
      {activeTab === "today" && selectedDate !== today && (
        <button
          onClick={() => setSelectedDate(today)}
          className="fixed bottom-[92px] left-1/2 -translate-x-1/2
                     h-[40px] w-[160px] rounded-full
                     bg-[#F3EADF] text-black text-[15px] shadow-lg z-50"
          style={{ fontFamily: "var(--font-main)" }}
        >
          Вернуться
        </button>
      )}

      {/* NAVBAR */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  </div>
);
}

