import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { DayDetail } from "./DayDetail";
import { Alert } from "./Alert";

interface HistoryEntry {
  date: string;
  mood: string;
  moodLabel: string;
  moodColor: string;
  moods?: string[];
  moodLabels?: string[];
  sleep: number;
  sleepLabel: string;
  summary: string;
  text: string;
}

interface HistoryProps {
  diaryData: Record<string, any>;
  onEdit: (date: string) => void;
  onDelete: (date: string) => void;
  onShowingDetail?: (isShowing: boolean) => void;
}

const getMoodIcon = (mood: string) => {
  const map: Record<string, string> = {
    happy: "emodjis/happy.svg",
    excited: "emodjis/excited.svg",
    neutral: "emodjis/neutral.svg",
    calm: "emodjis/calm.svg",
    tired: "emodjis/tired.svg",
    anxious: "emodjis/anxious.svg",
  };
  const rel = map[mood] || "emodjis/neutral.svg";
  return `${import.meta.env.BASE_URL}${rel}`;
};

const getSleepInfo = (hours: number) => {
  if (hours >= 1 && hours <= 4) {
    return { label: "Уставший", icon: `${import.meta.env.BASE_URL}sleep-emotion/tired.svg` };
  } else if (hours > 4 && hours < 7) {
    return { label: "Нейтральный", icon: `${import.meta.env.BASE_URL}sleep-emotion/normal.svg` };
  } else {
    return { label: "Отдохнувший", icon: `${import.meta.env.BASE_URL}sleep-emotion/rested.svg` };
  }
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export function History({ diaryData, onEdit, onDelete, onShowingDetail }: HistoryProps) {
  // Convert diaryData to array and sort by date descending
  const entries: HistoryEntry[] = Object.entries(diaryData)
    .map(([date, data]) => ({
      date,
      ...data,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const [swipedIndex, setSwipedIndex] = useState<number | null>(null);
  const [pressTimer, setPressTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [deleteConfirmDate, setDeleteConfirmDate] = useState<string | null>(null);

  // Notify parent when detail view is shown/hidden
  useEffect(() => {
    if (onShowingDetail) {
      onShowingDetail(!!selectedDate);
    }
  }, [selectedDate, onShowingDetail]);

  // If a date is selected, show detail view
  if (selectedDate && diaryData[selectedDate]) {
    return (
      <DayDetail
        date={selectedDate}
        entry={diaryData[selectedDate]}
        onBack={() => setSelectedDate(null)}
        onEdit={() => {
          setSelectedDate(null);
          onEdit(selectedDate);
        }}
        onDelete={() => {
          setSelectedDate(null);
          onDelete(selectedDate);
        }}
      />
    );
  }

  const handleTouchStart = (index: number) => {
    const timer = setTimeout(() => {
      setSwipedIndex(index);
    }, 500); // 500ms long press
    setPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  const handleCardClick = (date: string) => {
    // Only open detail if not in swipe mode
    if (swipedIndex === null) {
      setSelectedDate(date);
    }
  };

  const handleEdit = (date: string) => {
    setSwipedIndex(null);
    onEdit(date);
  };

  const handleDeleteClick = (date: string) => {
    setDeleteConfirmDate(date);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmDate) {
      onDelete(deleteConfirmDate);
      setDeleteConfirmDate(null);
      setSwipedIndex(null);
    }
  };

  const handleBackgroundClick = () => {
    if (swipedIndex !== null) {
      setSwipedIndex(null);
    }
  };

  return (
    <div
      className="flex flex-col pt-8 pb-24 px-4 w-full"
      onClick={handleBackgroundClick}
    >
      {/* Delete Alert */}
      {deleteConfirmDate && (
        <Alert
          title="Вы удаляете запись"
          message="Эта запись будет удалена"
          confirmText="Удалить"
          onCancel={() => {
            setDeleteConfirmDate(null);
            setSwipedIndex(null);
          }}
          onConfirm={handleConfirmDelete}
          isDestructive
        />
      )}

      {/* Title */}
      <h1 className="text-3xl text-center mb-8" style={{ fontFamily: 'var(--font-main)' }}>История</h1>

      {/* Empty State */}
      {entries.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[17px] text-muted-foreground" style={{ fontFamily: 'var(--font-main)' }}>
            Нет записей
          </p>
        </div>
      ) : (
        /* Entries List */
        <div className="flex flex-col gap-6 w-full">
          {entries.map((entry, index) => {
            const moodIds = (entry.moods && entry.moods.length > 0) ? entry.moods.slice(0, 3) : (entry.mood ? [entry.mood] : []);
            const faces = moodIds.map(getMoodIcon);
            const sleepInfo = getSleepInfo(entry.sleep);
            const isRevealed = swipedIndex === index;

            return (
              <div key={entry.date} className="flex flex-col gap-1 bg-transparent">
                {/* Date */}
                <p className="text-sm text-muted-foreground text-center mb-1" style={{ fontFamily: 'var(--font-main)' }}>
                  {formatDate(entry.date)}
                </p>

                {/* Swipeable Container */}
                <div
                  className="relative overflow-hidden rounded-3xl bg-transparent"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Action Buttons (Behind) */}
                  <div className="absolute right-0 top-0 h-full flex items-center gap-2 pr-2">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleEdit(entry.date)}
                      className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center"
                    >
                      <Pencil className="w-6 h-6 text-[#fff]" />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteClick(entry.date)}
                      className="w-16 h-16 bg-destructive rounded-3xl flex items-center justify-center"
                    >
                      <Trash2 className="w-6 h-6 text-destructive-foreground" />
                    </button>
                  </div>

                  {/* Entry Card (Slides) */}
                  <div
                    className="flex items-center gap-2 transition-transform duration-200 ease-out"
                    style={{ transform: isRevealed ? 'translateX(-150px)' : 'translateX(0)' }}
                    onTouchStart={() => handleTouchStart(index)}
                    onTouchEnd={handleTouchEnd}
                    onTouchMove={handleTouchEnd}
                    onMouseDown={() => handleTouchStart(index)}
                    onMouseUp={handleTouchEnd}
                    onMouseLeave={handleTouchEnd}
                    onClick={() => handleCardClick(entry.date)}
                  >
                    {/* Mood Avatar (cluster) */}
                    <div className="bg-card rounded-3xl p-5 flex items-center justify-center flex-shrink-0 h-[72px] overflow-hidden">
                      {faces.length <= 1 ? (
                        <img src={faces[0] ?? getMoodIcon('neutral')} alt="" className="w-10 h-10" />
                      ) : (
                        <div className="relative w-[62px] h-[54px] overflow-hidden">
                          {/* Top large */}
                          {faces[0] && (
                            <img src={faces[0]} alt="" className="absolute" style={{ left: "50%", top: "0px", transform: "translateX(-50%)", zIndex: 30 }} width={34} height={34} />
                          )}
                          {/* Bottom left */}
                          {faces[1] && (
                            <img src={faces[1]} alt="" className="absolute" style={{ left: "12px", bottom: "4px", zIndex: 20 }} width={24} height={24} />
                          )}
                          {/* Bottom right */}
                          {faces[2] && (
                            <img src={faces[2]} alt="" className="absolute" style={{ right: "10px", bottom: "12px", zIndex: 10 }} width={24} height={24} />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Info Card */}
                    <div className="flex-1 bg-card rounded-3xl p-5 flex items-center justify-between h-[72px]">
                      <span className="text-[15px] font-bold" style={{ fontFamily: 'var(--font-main)' }}>{entry.sleep} часов</span>
                      <div className="flex items-center gap-2">
                        <div className="text-[11px] text-muted-foreground" style={{ fontFamily: 'var(--font-main)' }}>{sleepInfo.label}</div>
                        <img src={sleepInfo.icon} alt="" className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}