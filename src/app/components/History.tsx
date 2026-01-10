import { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { DayDetail } from "./DayDetail";
import { Alert } from "./Alert";

interface HistoryEntry {
  date: string;
  mood: string;
  moodLabel: string;
  moodColor: string;
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

const getMoodFace = (mood: string) => {
  const emojiMap: Record<string, string> = {
    happy: "😀",
    excited: "😍",
    neutral: "😐",
    calm: "🙂",
    tired: "😒",
    anxious: "😖",
  };
  return emojiMap[mood] || "😐";
};

const getSleepInfo = (hours: number) => {
  if (hours >= 1 && hours <= 4) {
    return { label: "Уставший", emoji: "😒" };
  } else if (hours > 4 && hours < 7) {
    return { label: "Нейтральный", emoji: "😐" };
  } else {
    return { label: "Отдохнувший", emoji: "🙂" };
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
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
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
            const face = getMoodFace(entry.mood);
            const sleepInfo = getSleepInfo(entry.sleep);
            const isRevealed = swipedIndex === index;

            return (
              <div key={entry.date} className="flex flex-col gap-1">
                {/* Date */}
                <p className="text-sm text-muted-foreground text-center mb-1" style={{ fontFamily: 'var(--font-main)' }}>
                  {formatDate(entry.date)}
                </p>

                {/* Swipeable Container */}
                <div 
                  className="relative overflow-hidden rounded-3xl"
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
                    {/* Mood Avatar */}
                    <div className="bg-card rounded-3xl p-5 flex flex-col items-center justify-center flex-shrink-0 gap-2 max-h-[72px]">
                      {/* Mood Emoji */}
                      <span className="text-[40px] leading-none">{face}</span>
                    </div>

                    {/* Info Card */}
                    <div className="flex-1 bg-card rounded-3xl p-5 flex items-center justify-between max-h-[72px]">
                      <div className="text-[13px] font-normal" style={{ fontFamily: 'var(--font-main)' }}>{entry.moodLabel}</div>

                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[15px] font-bold" style={{ fontFamily: 'var(--font-main)' }}>{entry.sleep} часов</span>
                          <span className="text-xl">{sleepInfo.emoji}</span>
                        </div>
                        <div className="text-[11px] text-muted-foreground" style={{ fontFamily: 'var(--font-main)' }}>{sleepInfo.label}</div>
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