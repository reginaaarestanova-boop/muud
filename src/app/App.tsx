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
const LAST_DATE_KEY = "muud_last_date";

/* ---------- Utils ---------- */
const getTodayDate = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

export default function App() {
  /* ---------- Telegram ---------- */
  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (!tg) return;
    tg.ready();
    tg.expand();
  }, []);

  /* ---------- State ---------- */
  const [activeTab, setActiveTab] = useState<"today" | "history" | "settings">("today");
  const [selectedDate, setSelectedDate] = useState<string>(getTodayDate);
  const [diaryEntries, setDiaryEntries] = useState<Record<string, any>>({});
  const [showAddNote, setShowAddNote] = useState(false);
  const [editingDate, setEditingDate] = useState<string | null>(null);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showingHistoryDetail, setShowingHistoryDetail] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  /* ---------- Onboarding ---------- */
  const [showOnboarding, setShowOnboarding] = useState(
    () => localStorage.getItem(ONBOARDING_KEY) !== "true"
  );

  /* ---------- Init ---------- */
  useEffect(() => {
    const storedEntries = localStorage.getItem(STORAGE_KEY);
    const lastDate = localStorage.getItem(LAST_DATE_KEY);

    if (storedEntries) {
      setDiaryEntries(JSON.parse(storedEntries));
    }

    setSelectedDate(lastDate ?? getTodayDate());
  }, []);

  /* ---------- Persist ---------- */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(diaryEntries));
  }, [diaryEntries]);

  useEffect(() => {
    localStorage.setItem(LAST_DATE_KEY, selectedDate);
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

  /* ---------- Helpers ---------- */
  const today = getTodayDate();
  const selectedEntry = diaryEntries[selectedDate];

  const showReturnButton =
    activeTab === "today" && selectedDate !== today;

  const handleReturnToToday = () => {
    setSelectedDate(today);
  };

  /* ---------- Guards ---------- */
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

  if (showAddNote) {
  return (
    <div className="h-screen bg-background overflow-hidden flex justify-center">
      <div className="w-full max-w-[400px] h-full">
        <AddNote
          onClose={() => setShowAddNote(false)}
          onSave={(entry) => {
            setDiaryEntries((prev) => ({
              ...prev,
              [selectedDate]: entry,
            }));
            setShowAddNote(false);
          }}
        />
      </div>
    </div>
  );
}


  if (editingDate && diaryEntries[editingDate]) {
    return (
      <div className="h-screen bg-background overflow-hidden flex justify-center">
        <div className="w-full max-w-[400px] h-full">
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
        </div>
      </div>
    );
  }

  /* ---------- UI ---------- */
  return (
    <div className="h-screen w-full bg-background overflow-hidden flex justify-center">
      <div className="w-full max-w-[400px] h-full flex flex-col">

        {/* Scroll area */}
        <div className="flex-1 overflow-y-auto bg-background">
          {activeTab === "today" && (
            <>
              <DateStrip
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
                diaryData={diaryEntries}
              />

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

              <div className="px-4 pb-24">
                {selectedEntry ? (
                  <FilledState
                    entry={selectedEntry}
                    selectedDate={selectedDate}
                    onEdit={() => setEditingDate(selectedDate)}
                  />
                ) : selectedDate === today ? (
                  <EmptyState onAddNote={() => setShowAddNote(true)} />
                ) : (
                  <NoEntryState selectedDate={selectedDate} />
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
              onShowingDetail={setShowingHistoryDetail}
            />
          )}

          {activeTab === "settings" && (
            <Settings
              onShowAbout={setShowAboutPage}
              onThemeChange={setTheme}
              currentTheme={theme}
            />
          )}
        </div>

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

