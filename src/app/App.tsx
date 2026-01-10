import { useState, useEffect, useRef } from "react";
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

// Mock data for diary entries (used only for initial load if no data in localStorage)
const initialDiaryData = {
  "2026-01-02": {
    mood: "neutral",
    moodLabel: "Нейтральный",
    moodColor: "#C1D9E5",
    sleep: 6,
    sleepLabel: "Нормально",
    summary:
      "Начало недели прошло спокойно. Никаких особых событий.",
    text: "Обычный день, ничего выдающегося не произошло.",
  },
  "2026-01-03": {
    mood: "tired",
    moodLabel: "Уставший",
    moodColor: "#E5C1E5",
    sleep: 4,
    sleepLabel: "Невыспавшийся",
    summary: "Тяжелый день с недосыпом. Нужно больше отдыхать.",
    text: "Мало спал, чувствую усталость. День был непростым.",
  },
  "2026-01-04": {
    mood: "calm",
    moodLabel: "Спокойный",
    moodColor: "#A8D5C3",
    sleep: 7,
    sleepLabel: "Отдохнувший",
    summary:
      "День прошёл в приятной атмосфере. Удалось найти баланс.",
    text: "Сегодня было спокойно и размеренно. Хороший день для размышлений.",
  },
  "2026-01-05": {
    mood: "happy",
    moodLabel: "Радостный",
    moodColor: "#C1D9F0",
    sleep: 8,
    sleepLabel: "Отдохнувший",
    summary:
      "Прекрасный день! Много позитивных моментов и хорошего настроения.",
    text: "День был наполнен радостью. Встретился с друзьями, много смеялись.",
  },
  "2026-01-06": {
    mood: "excited",
    moodLabel: "Воодушевленный",
    moodColor: "#FFB3C1",
    sleep: 7,
    sleepLabel: "Отдохнувший",
    summary:
      "Вдохновение переполняет! Столько идей и планов на будущее.",
    text: "Сегодня появилос много новых идей. Чувствую прилив энергии и ооения!",
  },
  "2026-01-07": {
    mood: "tired",
    moodLabel: "Уставший",
    moodColor: "#E5C1E5",
    sleep: 5,
    sleepLabel: "Невыспавшийся",
    summary:
      "Похоже, сегодня было немного тяжело. Но завтра всё может быть иначе.",
    text: "День был непростой. Много размышлений о прошлом.",
  },
  "2026-01-08": {
    mood: "neutral",
    moodLabel: "Нейтральный",
    moodColor: "#C1D9E5",
    sleep: 7,
    sleepLabel: "Отдохнувший",
    summary:
      "Обычный день. Ничего особенного, но это тоже хорошо.",
    text: "Прошёл день в обычном ритме. Работа, дела, немного отдыха.",
  },
  "2026-01-09": {
    mood: "happy",
    moodLabel: "Радостный",
    moodColor: "#C1D9F0",
    sleep: 9,
    sleepLabel: "Отдохнувший",
    summary:
      "Сегодня мы смогли сохранить гармонию внутри. Это действительно радует!",
    text: "Сегодняшний день был наполнен радостью и спокойствием. Я наслаждался тишиной и размышлениями.",
  },
};

const STORAGE_KEY = "diary_entries";
const ONBOARDING_KEY = "onboarding_completed";

// Load diary data from localStorage
const loadDiaryData = (isFirstTime: boolean) => {
  // If first time, return empty object
  if (isFirstTime) {
    return {};
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error(
      "Error loading diary data from localStorage:",
      error,
    );
  }
  return {};
};

// Save diary data to localStorage
const saveDiaryData = (data: Record<string, any>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error(
      "Error saving diary data to localStorage:",
      error,
    );
  }
};

export default function App() {
    useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (!tg) return;

    tg.ready();
    tg.expand();
  }, []);
  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Check if onboarding has been completed
  const [showOnboarding, setShowOnboarding] = useState(() => {
    try {
      const completed = localStorage.getItem(ONBOARDING_KEY);
      return completed !== "true";
    } catch (error) {
      console.error("Error checking onboarding status:", error);
      return true;
    }
  });

  const [selectedDate, setSelectedDate] =
    useState(getTodayDate());
  const [activeTab, setActiveTab] = useState<
    "today" | "history" | "settings"
  >("today");
  const [diaryEntries, setDiaryEntries] = useState(() =>
    loadDiaryData(showOnboarding),
  );
  const [showAddNote, setShowAddNote] = useState(false);
  const [editingDate, setEditingDate] = useState<string | null>(
    null,
  );
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showingHistoryDetail, setShowingHistoryDetail] =
    useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  const selectedEntry =
    diaryEntries[selectedDate as keyof typeof diaryEntries];

    useEffect(() => {
  const lastDate = localStorage.getItem("muud_last_date");
  const today = getTodayDate();

  setSelectedDate(lastDate || today);
  window.scrollTo({ top: 0, behavior: "auto" });
}, []);

useEffect(() => {
  localStorage.setItem("muud_last_date", selectedDate);
}, [selectedDate]);



  // Save diary entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "muud_entries",
      JSON.stringify(diaryEntries),
    );
  }, [diaryEntries]);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      // Auto theme - detect system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.classList.remove("light", "dark");
      root.classList.add(prefersDark ? "dark" : "light");
    }
  }, [theme]);

  const handleOnboardingComplete = () => {
    try {
      localStorage.setItem(ONBOARDING_KEY, "true");
      setShowOnboarding(false);
    } catch (error) {
      console.error("Error saving onboarding status:", error);
      setShowOnboarding(false);
    }
  };

  // Show onboarding screen if not completed
  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // Calculate the difference in days from today
  const todayDate = getTodayDate();
  const getDaysDifference = (date1: string, date2: string) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(
      diffTime / (1000 * 60 * 60 * 24),
    );
    return diffDays;
  };

  const daysDiff = getDaysDifference(selectedDate, todayDate);
  const showReturnButton =
    activeTab === "today" && daysDiff >= 2;

 window.scrollTo({ top: 0, behavior: "auto" });

  const handleAddNote = (entry: {
    mood: string;
    moodLabel: string;
    sleep: number;
    text: string;
  }) => {
    // Generate AI summary based on mood and sleep
    const summaries: Record<string, string[]> = {
      excited: [
        "Вдохновение переполняет! Столько идей и планов на будущее.",
        "Сегодня был ден полный энергии и новых возможностей!",
      ],
      happy: [
        "Прекрасный день! Много позитивных моментов и хорошего настроения.",
        "День был наполнен радостью и приятными моментами.",
      ],
      calm: [
        "День прошёл в приятной атмосфере. Удалось найти баланс.",
        "Спокойный и гармоничный день. Все было хорошо.",
      ],
      neutral: [
        "Обычный день. Ничего особенного, но это тоже хорошо.",
        "Начало дня прошло спокойно. Никаких особых событий.",
      ],
      tired: [
        "Похоже, сегодня было немного тяжело. Но завтра всё может быть иначе.",
        "Тяжелый день. Нужно больше отдыхать.",
      ],
      anxious: [
        "День был непростым, но ты справился. Завтра будет лучше.",
        "Сегодня было сложно, но это временно.",
      ],
    };

    const moodSummaries =
      summaries[entry.mood] || summaries.neutral;
    const summary =
      moodSummaries[
        Math.floor(Math.random() * moodSummaries.length)
      ];

    setDiaryEntries({
      ...diaryEntries,
      [selectedDate]: {
        ...entry,
        moodColor: "#C1D9E5",
        sleepLabel:
          entry.sleep >= 7
            ? "Отдохнувший"
            : entry.sleep > 4
              ? "Нормально"
              : "Невыспавшийся",
        summary,
      },
    });
    saveDiaryData({
      ...diaryEntries,
      [selectedDate]: {
        ...entry,
        moodColor: "#C1D9E5",
        sleepLabel:
          entry.sleep >= 7
            ? "Отдохнувший"
            : entry.sleep > 4
              ? "Нормально"
              : "Невыспавшийся",
        summary,
      },
    });
    setShowAddNote(false);
  };

  const handleEditNote = (entry: {
    mood: string;
    moodLabel: string;
    sleep: number;
    text: string;
  }) => {
    if (!editingDate) return;

    const summaries: Record<string, string[]> = {
      excited: [
        "Вдохновение переполняет! Столько идей и планов на будущее.",
        "Сегодня был день полный энергии и новых возможностей!",
      ],
      happy: [
        "Прекрасный день! Много позитивных моментов и хорошего настроения.",
        "День был наполнен радостью и приятными моментами.",
      ],
      calm: [
        "День прошёл в прятной тмосфере. Удалось найти баланс.",
        "Спокойный и гармоничный день. Все было хорошо.",
      ],
      neutral: [
        "Обычный день. Ничего особенного, о это тоже хорошо.",
        "Начало дня прошло спокойно. Никаких особых событий.",
      ],
      tired: [
        "Похоже, сегодня было немного тяжело. Но завтра всё может быть иначе.",
        "Тяжелый день. Нужно больше отдыхать.",
      ],
      anxious: [
        "День был непростым, но ты справился. Завтра будет лучше.",
        "Сегодня было сложно, но это временно.",
      ],
    };

    const moodSummaries =
      summaries[entry.mood] || summaries.neutral;
    const summary =
      moodSummaries[
        Math.floor(Math.random() * moodSummaries.length)
      ];

    setDiaryEntries({
      ...diaryEntries,
      [editingDate]: {
        ...entry,
        moodColor: "#C1D9E5",
        sleepLabel:
          entry.sleep >= 7
            ? "Отдохнувший"
            : entry.sleep > 4
              ? "Нормально"
              : "Невыспавшийся",
        summary,
      },
    });
    saveDiaryData({
      ...diaryEntries,
      [editingDate]: {
        ...entry,
        moodColor: "#C1D9E5",
        sleepLabel:
          entry.sleep >= 7
            ? "Отдохнувший"
            : entry.sleep > 4
              ? "Нормально"
              : "Невыспавшийся",
        summary,
      },
    });
    setEditingDate(null);
  };

  const handleDeleteNote = (date: string) => {
    const newEntries = { ...diaryEntries };
    delete newEntries[date];
    setDiaryEntries(newEntries);
    saveDiaryData(newEntries);
    setEditingDate(null);
  };

  // If Add Note screen is shown
  if (showAddNote) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <div className="w-full max-w-[430px] min-w-[320px] mx-auto flex-1">
          <AddNote
            onClose={() => setShowAddNote(false)}
            onSave={handleAddNote}
          />
        </div>
      </div>
    );
  }

  // If Edit Note screen is shown
  if (editingDate && diaryEntries[editingDate]) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <div className="w-full max-w-[430px] min-w-[320px] mx-auto flex-1">
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

  return (
    <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
      <div className="w-full max-w-[430px] min-w-[320px] mx-auto flex-1 flex flex-col">
        {/* Conditional Rendering Based on Active Tab */}
        {activeTab === "today" && (
          <>
            {/* Date Strip with Emoji */}
            <DateStrip
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              diaryData={diaryEntries}
            />

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex-1 flex flex-col">
                {selectedEntry ? (
                  <FilledState
                    entry={selectedEntry}
                    selectedDate={selectedDate}
                    onEdit={() => setEditingDate(selectedDate)}
                  />
                ) : selectedDate === todayDate ? (
                  <EmptyState
                    onAddNote={() => setShowAddNote(true)}
                  />
                ) : (
                  <NoEntryState selectedDate={selectedDate} />
                )}
              </div>
            </div>

            {/* Return to Today Button */}
            {showReturnButton && (
              <button
                className="fixed bottom-[90px] left-1/2 transform -translate-x-1/2 text-[15px] font-normal text-black shadow-lg z-50 pointer-events-auto"
                style={{
                  backgroundColor: "#F3EADF",
                  fontFamily: "var(--font-main)",
                  height: "40px",
                  width: "160px",
                  borderRadius: "20px",
                }}
                onClick={handleReturnToToday}
              >
                Вернуться
              </button>
            )}
          </>
        )}
        {activeTab === "history" && (
          <History
            diaryData={diaryEntries}
            onEdit={(date) => setEditingDate(date)}
            onDelete={(date) => handleDeleteNote(date)}
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

        {/* Bottom Navigation - Hidden when About page or History detail is shown */}
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