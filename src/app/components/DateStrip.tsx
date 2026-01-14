import { useRef, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";

interface DateStripProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  diaryData: Record<string, any>;
}

const formatDate = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const getMonthName = (month: number) =>
  ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"][month];

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

const INITIAL_RANGE = 30;
const LOAD_STEP = 20;
const EDGE_OFFSET = 400;

export function DateStrip({
  selectedDate,
  onSelectDate,
  diaryData,
}: DateStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const isLoadingRef = useRef(false);
  const didInitScrollRef = useRef(false);
  const lastSelectedDateRef = useRef<string | null>(null);

  const [range, setRange] = useState({ start: -INITIAL_RANGE, end: INITIAL_RANGE });
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  // ✅ даты строятся от selectedDate
  const dates = useMemo(() => {
    const base = new Date(`${selectedDate}T00:00:00`);
    const arr: Date[] = [];
    for (let i = range.start; i <= range.end; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      arr.push(d);
    }
    return arr;
  }, [selectedDate, range]);

  // ✅ центрирование при первом рендере и при изменении selectedDate
  useLayoutEffect(() => {
    const scrollToSelected = () => {
      const container = scrollRef.current;
      const item = itemRefs.current.get(selectedDate);
      if (!container || !item || item.offsetWidth === 0) return false;

      const targetScroll = item.offsetLeft - container.clientWidth / 2 + item.offsetWidth / 2;
      container.scrollLeft = targetScroll;
      return true;
    };

    // Если это первая инициализация или selectedDate изменился
    const isFirstInit = !didInitScrollRef.current;
    const dateChanged = lastSelectedDateRef.current !== selectedDate;

    if (!isFirstInit && !dateChanged) return;

    // Пробуем несколько раз с задержками для гарантии рендера
    const attemptScroll = (attempt = 0) => {
      if (attempt > 5) {
        if (isFirstInit) didInitScrollRef.current = true;
        lastSelectedDateRef.current = selectedDate;
        return;
      }

      requestAnimationFrame(() => {
        if (scrollToSelected()) {
          if (isFirstInit) didInitScrollRef.current = true;
          lastSelectedDateRef.current = selectedDate;
        } else {
          setTimeout(() => attemptScroll(attempt + 1), 50);
        }
      });
    };

    attemptScroll();
  }, [dates.length, selectedDate]);

  // ✅ infinite scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      setShowLeftFade(scrollLeft > 50);
      setShowRightFade(scrollLeft + clientWidth < scrollWidth - 50);

      if (isLoadingRef.current) return;

      // ⬅️ влево
      if (scrollLeft < EDGE_OFFSET) {
        isLoadingRef.current = true;
        const prevWidth = scrollWidth;

        setRange(r => ({ ...r, start: r.start - LOAD_STEP }));

        requestAnimationFrame(() => {
          if (!scrollRef.current) return;
          const diff = scrollRef.current.scrollWidth - prevWidth;
          scrollRef.current.scrollLeft += diff;
          isLoadingRef.current = false;
        });
      }

      // ➡️ вправо
      if (scrollLeft + clientWidth > scrollWidth - EDGE_OFFSET) {
        isLoadingRef.current = true;
        setRange(r => ({ ...r, end: r.end + LOAD_STEP }));
        requestAnimationFrame(() => {
          isLoadingRef.current = false;
        });
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-10 bg-background pt-6 pb-4">
      <div
        ref={scrollRef}
        className="relative flex gap-4 overflow-x-auto px-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {/* fades */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 transition-opacity"
          style={{
            opacity: showLeftFade ? 1 : 0,
            background: "linear-gradient(to right, var(--background), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 transition-opacity"
          style={{
            opacity: showRightFade ? 1 : 0,
            background: "linear-gradient(to left, var(--background), transparent)",
          }}
        />

        {dates.map(date => {
          const dateStr = formatDate(date);
          const isSelected = dateStr === selectedDate;
          const isToday = dateStr === formatDate(new Date());
          const entry = diaryData[dateStr];

          return (
            <div
              key={dateStr}
              ref={el => el && itemRefs.current.set(dateStr, el)}
              className="flex-shrink-0 flex flex-col items-center gap-2"
            >
              <button
  onClick={() => onSelectDate(dateStr)}
  className={`px-4 py-2 rounded-2xl ${
    isSelected ? "bg-secondary" : "hover:bg-muted/10"
  }`}
>
  {/* День */}
  <div
    className={`text-[48px] font-bold transition-colors ${
      isSelected ? "text-black" : "text-muted-foreground"
    }`}
  >
    {String(date.getDate()).padStart(2, "0")}
  </div>

  {/* Месяц + год */}
  <div
    className={`text-[13px] transition-colors ${
      isSelected ? "text-black" : "text-muted-foreground"
    }`}
  >
    {getMonthName(date.getMonth())} {date.getFullYear()}
  </div>
</button>

              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                {entry ? (
                  (() => {
                    const moodIds: string[] =
                      entry.moods && entry.moods.length > 0
                        ? entry.moods.slice(0, 3)
                        : (entry.mood ? [entry.mood] : []);
                    const faces = moodIds.map(getMoodIcon);
                    if (faces.length <= 1) {
                      return <img src={faces[0] ?? getMoodIcon("neutral")} alt="" className="w-7 h-7" />;
                    }
                    return (
                      <div className="relative w-[40px] h-[36px] overflow-hidden">
                        {/* Top/front */}
                        {faces[0] && (
                          <img
                            src={faces[0]}
                            alt=""
                            className="absolute"
                            style={{ left: "50%", top: "3px", transform: "translateX(-50%)", zIndex: 30 }}
                            width={24}
                            height={24}
                          />
                        )}
                        {/* Back left */}
                        {faces[1] && (
                          <img
                            src={faces[1]}
                            alt=""
                            className="absolute"
                            style={{ left: "0px", bottom: "0px", zIndex: 20, transform: "rotate(-13deg)" }}
                            width={18}
                            height={18}
                          />
                        )}
                        {/* Back right */}
                        {faces[2] && (
                          <img
                            src={faces[2]}
                            alt=""
                            className="absolute"
                            style={{ right: "0px", bottom: "0px", zIndex: 10, transform: "rotate(30deg)" }}
                            width={18}
                            height={18}
                          />
                        )}
                      </div>
                    );
                  })()
                ) : isToday ? (
                  <div className="w-10 h-10 rounded-full border-2 border-dashed flex items-center justify-center">
                    <Plus className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full border-2 border-dashed" />
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}