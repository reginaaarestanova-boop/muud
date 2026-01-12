import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Alert } from "./Alert";

interface EditNoteProps {
  entry: {
    mood: string;
    moodLabel: string;
    moods?: string[];
    moodLabels?: string[];
    sleep: number;
    text: string;
  };
  date: string;
  onClose: () => void;
  onSave: (entry: {
    mood: string;
    moodLabel: string;
    moods: string[];
    moodLabels: string[];
    sleep: number;
    text: string;
  }) => void;
  onDelete: () => void;
}

const moods = [
  { id: "excited", label: "Воодушевленный", emoji: "😍", gradient: "linear-gradient(180deg, #FFC90C 0%, #FFECAA 100%)" },
  { id: "happy", label: "Радостный", emoji: "😀", gradient: "linear-gradient(180deg, #A9C3E6 0%, #DAE6F7 100%)" },
  { id: "calm", label: "Спокойный", emoji: "🙂", gradient: "linear-gradient(180deg, #6DAD93 0%, #B2E5D0 100%)" },
  { id: "neutral", label: "Нейтральный", emoji: "😐", gradient: "linear-gradient(180deg, #E8EEF5 0%, #C2C8D0 100%)" },
  { id: "tired", label: "Уставший", emoji: "😒", gradient: "linear-gradient(180deg, #F0C4DD 0%, #FFDBF0 100%)" },
  { id: "anxious", label: "Тревожный", emoji: "😖", gradient: "linear-gradient(180deg, #FA7A4D 0%, #FFC9B7 100%)" },
];

export function EditNote({ entry, onClose, onSave, onDelete }: EditNoteProps) {
  const [selectedMoods, setSelectedMoods] = useState<string[]>(entry.moods ?? (entry.mood ? [entry.mood] : []));
  const [sleepHours, setSleepHours] = useState(entry.sleep);
  const [noteText, setNoteText] = useState(entry.text);
  const [showExitAlert, setShowExitAlert] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const hasChanges =
    (selectedMoods.join(",") !== (entry.moods ?? (entry.mood ? [entry.mood] : [])).join(",")) ||
    sleepHours !== entry.sleep ||
    noteText !== entry.text;

  const handleClose = () => {
    // Show alert if user has made changes
    if (hasChanges) {
      setShowExitAlert(true);
    } else {
      onClose();
    }
  };

  const handleSave = () => {
    if (selectedMoods.length === 0) return;
    const primaryMoodId = selectedMoods[0];
    const primaryMood = moods.find(m => m.id === primaryMoodId);
    if (!primaryMood) return;
    const selectedMoodLabels = selectedMoods
      .map(id => moods.find(m => m.id === id)?.label)
      .filter(Boolean) as string[];

    onSave({
      mood: primaryMoodId,
      moodLabel: primaryMood.label,
      moods: selectedMoods,
      moodLabels: selectedMoodLabels,
      sleep: sleepHours,
      text: noteText,
    });
  };

  const handleDeleteClick = () => {
    setShowDeleteAlert(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
  };

  const toggleMood = (id: string) => {
    setSelectedMoods((prev) => {
      const isSelected = prev.includes(id);
      if (isSelected) {
        return prev.filter(m => m !== id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const canSave = selectedMoods.length > 0 && sleepHours > 0;

  return (
    <div className="flex flex-col h-full w-full bg-background">
      {/* Exit Alert */}
      {showExitAlert && (
        <Alert
          title="Вы покидаете страницу"
          message="Эта запись не будет сохранена"
          confirmText="Выйти"
          onCancel={() => setShowExitAlert(false)}
          onConfirm={onClose}
        />
      )}

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

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-32 pt-8 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 w-full">
          <h1
            className="text-[34px] leading-[38px]"
            style={{ fontFamily: 'var(--font-main)' }}
          >
            Изменить запись
          </h1>
          <button onClick={handleClose} className="shrink-0">
            <X className="w-7 h-7 text-foreground" />
          </button>
        </div>

        {/* Mood Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => toggleMood(mood.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full h-12 transition-colors ${
                selectedMoods.includes(mood.id)
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-card text-card-foreground"
              }`}
              style={{ fontFamily: 'var(--font-main)' }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-lg shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)]"
                style={{ background: mood.gradient }}
              >
                {mood.emoji}
              </div>
              <span className="text-[15px] leading-[20px] font-bold">{mood.label}</span>
            </button>
          ))}
        </div>

        {/* Sleep Hours */}
        <div className="flex flex-col gap-2 mb-6">
          <p
            className="text-[15px] leading-[20px] text-center"
            style={{ fontFamily: 'var(--font-main)' }}
          >
            Сколько часов сна?
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSleepHours(Math.max(0, sleepHours - 1))}
              className="bg-card rounded-full w-[62px] h-[62px] flex items-center justify-center shrink-0"
            >
              <Minus className="w-7 h-7 text-foreground" />
            </button>
            <div className="flex-1 bg-card rounded-full h-[62px] flex items-center justify-center">
              <span
                className="text-[24px] leading-[26px] font-bold"
                style={{ fontFamily: 'var(--font-main)' }}
              >
                {sleepHours}
              </span>
            </div>
            <button
              onClick={() => setSleepHours(Math.min(24, sleepHours + 1))}
              className="bg-card rounded-full w-[62px] h-[62px] flex items-center justify-center shrink-0"
            >
              <Plus className="w-7 h-7 text-foreground" />
            </button>
          </div>
        </div>

        {/* Note Text Area */}
        <div className="bg-card rounded-[28px] p-5 min-h-[200px]">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Записать заметку о дне для себя"
            className="w-full bg-transparent text-card-foreground text-[17px] leading-[22px] outline-none resize-none min-h-[160px] placeholder:text-muted-foreground"
            style={{ fontFamily: 'var(--font-main)' }}
          />
        </div>
      </div>

      {/* Bottom Fixed Section */}
      <div className="fixed bottom-0 left-0 right-0 w-full max-w-[430px] mx-auto">
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
              onClick={handleSave}
              disabled={!canSave}
              className={`flex-1 h-[62px] rounded-full flex items-center justify-center transition-opacity ${
                canSave ? "bg-primary" : "bg-primary opacity-50"
              }`}
              style={{ fontFamily: 'var(--font-main)' }}
            >
              <span className="text-[#fff] text-[17px] leading-[22px] font-bold">
                Сохранить
              </span>
            </button>
          </div>
          <div className="h-[34px] flex items-end justify-center pb-2">
            <div className="w-[134px] h-[5px] bg-foreground/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}