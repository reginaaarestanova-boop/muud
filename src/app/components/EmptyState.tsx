import { Plus } from "lucide-react";

interface EmptyStateProps {
  onAddNote: () => void;
}

export function EmptyState({ onAddNote, title }: EmptyStateProps) {
  return (
    <div>
      <h1
        className="text-[18px] mb-4"
        style={{ fontFamily: "var(--font-main)", fontWeight: 700 }}
      >
        {title ?? "Как прошёл твой день?"}
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