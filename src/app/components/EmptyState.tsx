import { Plus } from "lucide-react";

interface EmptyStateProps {
  onAddNote: () => void;
  title?: string;
}

export function EmptyState({ onAddNote, title = "Как прошёл твой день?" }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1
        className="text-[22px] leading-[28px] mb-6 text-foreground"
        style={{ fontFamily: "var(--font-main)", fontWeight: 500 }}
      >
        {title}
      </h1>

      {/* Main Card - stretches to fill remaining space */}
      <button
        onClick={onAddNote}
        className="w-full bg-card rounded-3xl p-12 flex flex-col items-center justify-center gap-4 hover:bg-muted/10 transition-colors flex-1 mb-5"
      >
        {/* Dashed Circle with Plus */}
        <div className="w-24 h-24 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center">
          <Plus className="w-12 h-12 text-muted-foreground" />
        </div>
        <p className="text-lg text-muted-foreground" style={{ fontFamily: 'var(--font-main)' }}>
          Добавить запись
        </p>
      </button>
    </div>
  );
}