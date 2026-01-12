import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Alert } from "./Alert";

interface DayDetailProps {
  date: string;
  entry: {
    mood: string;
    moodLabel: string;
    moodColor: string;
    moods?: string[];
    moodLabels?: string[];
    sleep: number;
    sleepLabel: string;
    summary: string;
    text: string;
  };
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
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

export function DayDetail({ date, entry, onBack, onEdit, onDelete }: DayDetailProps) {
  const moodIds = (entry.moods && entry.moods.length > 0) ? entry.moods.slice(0, 3) : (entry.mood ? [entry.mood] : []);
  const faces = moodIds.map(getMoodFace);
  const sleepInfo = getSleepInfo(entry.sleep);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleConfirmDelete = () => {
    setShowDeleteAlert(false);
    onDelete();
  };

  const handleDeleteClick = () => {
    setShowDeleteAlert(true);
  };

  return (
    <div className="flex flex-col h-full w-full pt-8 pb-2 px-4">
      {/* Delete Alert */}
      {showDeleteAlert && (
        <Alert
          title="Вы удаляете запись"
          message="Эта запись будет удалена"
          confirmText="Удалить"
          onCancel={() => setShowDeleteAlert(false)}
          onConfirm={handleConfirmDelete}
          isDestructive
        />
      )}

      {/* Header with Back Button and Date */}
      <div className="relative flex items-center mb-6 w-full">
        <button
          onClick={onBack}
          className="shrink-0 w-7 h-7 flex items-center justify-center z-10"
        >
          <ArrowLeft className="w-7 h-7 text-foreground" />
        </button>
        <h1
          className="absolute left-1/2 -translate-x-1/2 text-[34px] leading-[38px]"
          style={{ fontFamily: 'var(--font-main)' }}
        >
          {formatDate(date)}
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="flex flex-col gap-[2px] w-full">
          {/* AI Summary */}
          <div
            className="rounded-3xl p-5 text-[15px] leading-[20px] text-center"
            style={{
              background: "linear-gradient(135deg, #D4C5E8 0%, #C5D8E8 100%)",
              color: "#000",
              fontFamily: 'var(--font-main)',
            }}
          >
            «{entry.summary}»
          </div>

          {/* Sleep Block */}
          <div className="bg-card rounded-[28px] p-5 flex items-center justify-between">
            <div className="text-[17px] leading-[23px]" style={{ fontFamily: 'var(--font-main)' }}>
              Сон:
            </div>
            <div className="flex flex-col items-end gap-[2px]">
              <div className="flex items-center gap-2">
                <span className="text-[17px] leading-[24px]" style={{ fontFamily: 'var(--font-main)' }}>
                  {entry.sleep} часов
                </span>
                <span className="text-[28px] leading-none">{sleepInfo.emoji}</span>
              </div>
              <div
                className="text-[13px] leading-[17px] text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-main)',
                }}
              >
                {sleepInfo.label}
              </div>
            </div>
          </div>

{/* Mood and Diary Card Combined */}
<div className="bg-card rounded-3xl overflow-hidden flex flex-col gap-[2px]">

  {/* Mood Section */}
  <div
    className="
      rounded-3xl
      p-5
      flex flex-col items-center gap-2
      bg-[#F3EADF]
      dark:bg-[#333333]
    "
  >
    {/* Mood Emojis (cluster up to 3) */}
    {faces.length <= 1 ? (
      <span className="text-[120px] leading-none">{faces[0] ?? getMoodFace('neutral')}</span>
    ) : (
      <div className="relative w-[140px] h-[120px]">
        {/* Top large */}
        {faces[0] && (
          <span
            className="absolute text-[80px] leading-none"
            style={{ left: "50%", top: "-6px", transform: "translateX(-50%)", zIndex: 30 }}
          >
            {faces[0]}
          </span>
        )}
        {/* Bottom left */}
        {faces[1] && (
          <span
            className="absolute text-[56px] leading-none"
            style={{ left: "6px", bottom: "2px", zIndex: 20 }}
          >
            {faces[1]}
          </span>
        )}
        {/* Bottom right */}
        {faces[2] && (
          <span
            className="absolute text-[56px] leading-none"
            style={{ right: "0px", bottom: "0px", zIndex: 10 }}
          >
            {faces[2]}
          </span>
        )}
      </div>
    )}

    <div
      className="text-[15px] text-center leading-[20px]"
      style={{ fontFamily: "var(--font-main)" }}
    >
      {entry.moodLabel}
    </div>
  </div>

  {/* ↓ только текст; кнопка будет отдельным блоком ниже */}
  {entry.text?.trim() && (
    <div className="px-5 py-4">
      <p
        className="text-[15px] leading-[20px] text-card-foreground text-center"
        style={{ fontFamily: "var(--font-main)" }}
      >
        {entry.text}
      </p>
    </div>
  )}
</div>

{/* Отдельная кнопка (бенто) — если текста нет */}
{!entry.text?.trim() && (
  <div className="px-5 pt-2 pb-4">
    <button
      onClick={onEdit}
      className="
        w-full
        h-[56px]
        rounded-full
        bg-[#F3EADF]
        dark:bg-[#444]
        text-black
        dark:text-white
        text-[15px]
        font-medium
        flex items-center justify-center
        active:scale-[0.98]
        transition-transform
      "
      style={{ fontFamily: 'var(--font-main)' }}
    >
      Дополнить день
    </button>
  </div>
)}

{/* Footer - Action Buttons */}
<div className="absolute bottom-0 left-0 right-0 w-full max-w-[430px] mx-auto">
  <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-b from-transparent to-background pointer-events-none" />
  <div className="relative px-4 pb-2">
    <div className="flex gap-2 items-center">
      <button
  onClick={handleDeleteClick}
  className="bg-destructive w-[62px] h-[62px] rounded-full flex items-center justify-center shrink-0"
>
  <Trash2 className="w-7 h-7 text-destructive-foreground" />
</button>

      <button
        onClick={onEdit}
        className="flex-1 h-[62px] bg-primary rounded-full flex items-center justify-center"
        style={{ fontFamily: "var(--font-main)" }}
      >
        <span className="text-[#fff] text-[17px] leading-[22px] font-bold">
          Редактировать
        </span>
      </button>
    </div>

    <div className="h-[34px] flex items-end justify-center pb-2">
      <div className="w-[134px] h-[5px] bg-foreground/20 rounded-full" />
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
);
}
