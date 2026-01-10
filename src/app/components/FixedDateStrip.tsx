import { useRef, useEffect, useLayoutEffect, useState, useMemo } from "react";

interface FixedDateStripProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  diaryData: Record<string, any>;
}

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getMonthName = (month: number) => {
  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  return months[month];
};

const EDGE_OFFSET = 250;
const LOAD_STEP = 10;

export function FixedDateStrip({
  selectedDate,
  onSelectDate,
  diaryData,
}: FixedDateStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const isLoadingRef = useRef(false);
  const isProgrammaticScrollRef = useRef(false);
  const didInitialCenterRef = useRef(false);

  const [dateRange, setDateRange] = useState({ start: -15, end: 15 });

  // ✅ Важно: строим даты от selectedDate, а не от today
  const dates = useMemo(() => {
    const base = new Date(`${selectedDate}T00:00:00`); // фиксируем локальную полночь
    const arr: Date[] = [];

    for (let i = dateRange.start; i <= dateRange.end; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      arr.push(d);
    }

    return arr;
  }, [selectedDate, dateRange]);

  // ✅ Функция центрирования выбранной даты
  const centerSelected = (behavior: ScrollBehavior = "auto") => {
    const container = scrollRef.current;
    const selectedItem = itemRefs.current.get(selectedDate);
    if (!container || !selectedItem) return;

    const itemLeft = selectedItem.offsetLeft;
    const itemWidth = selectedItem.offsetWidth;
    const containerWidth = container.clientWidth;

    const targetLeft = itemLeft - containerWidth / 2 + itemWidth / 2;

    isProgrammaticScrollRef.current = true;
    container.scrollTo({ left: targetLeft, behavior });

    // снимаем флаг на следующем кадре
    requestAnimationFrame(() => {
      isProgrammaticScrollRef.current = false;
    });
  };

  /**
   * ✅ Один раз при входе (после первого рендера) центрируем выбранную дату.
   * useLayoutEffect — чтобы позиционирование произошло ДО того, как пользователь увидит скачок.
   */
  useLayoutEffect(() => {
    if (didInitialCenterRef.current) return;

    // Если выбранного элемента ещё нет (рефы не успели проставиться), попробуем на следующем кадре.
    requestAnimationFrame(() => {
      centerSelected("auto");
      didInitialCenterRef.current = true;
    });
  }, [dates.length, selectedDate]);

  /**
   * ✅ При смене selectedDate по клику — центрируем, но уже можно smooth.
   * (Если не хочешь smooth — поменяй на "auto")
   */
  useEffect(() => {
    if (!didInitialCenterRef.current) return;
    centerSelected("smooth");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  // ✅ Infinite scroll (игнорим programmatic scroll)
  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;
      if (isLoadingRef.current) return;
      if (!didInitialCenterRef.current) return;
      if (isProgrammaticScrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;

      // ⬅️ подгрузка слева
      if (scrollLeft < EDGE_OFFSET) {
        isLoadingRef.current = true;

        const prevScrollLeft = scrollLeft;
        const prevScrollWidth = scrollWidth;

        setDateRange((prev) => ({ ...prev, start: prev.start - LOAD_STEP }));

        requestAnimationFrame(() => {
          const el = scrollRef.current;
          if (!el) return;

          const newScrollWidth = el.scrollWidth;
          const diff = newScrollWidth - prevScrollWidth;

          // компенсируем, чтобы визуально позиция не прыгала
          el.scrollLeft = prevScrollLeft + diff;

          isLoadingRef.current = false;
        });
      }

      // ➡️ подгрузка справа
      if (scrollLeft + clientWidth > scrollWidth - EDGE_OFFSET) {
        isLoadingRef.current = true;

        setDateRange((prev) => ({ ...prev, end: prev.end + LOAD_STEP }));

        requestAnimationFrame(() => {
          isLoadingRef.current = false;
        });
      }
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-black border-b border-white/10">
      <div className="w-full max-w-[430px] mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-[8px] items-center justify-start px-4 py-[16px] overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {dates.map((date) => {
            const dateStr = formatDate(date);
            const isSelected = dateStr === selectedDate;

            const day = String(date.getDate()).padStart(2, "0");
            const month = getMonthName(date.getMonth());
            const year = date.getFullYear();
            const label = `${day} ${month} ${year}`;

            const hasEntry = Boolean(diaryData?.[dateStr]); // если нужно для UI

            return (
              <button
                key={dateStr}
                onClick={() => onSelectDate(dateStr)}
                className={`flex-shrink-0 flex items-center justify-center px-[15px] py-[7px] rounded-[28px] ${
                  isSelected ? "bg-[#f3eadf]" : "bg-[#1a1a1a]"
                }`}
                ref={(el) => {
                  if (el) itemRefs.current.set(dateStr, el);
                  else itemRefs.current.delete(dateStr);
                }}
              >
                <p
                  className={`text-[13px] leading-[17px] tracking-[0.4px] whitespace-nowrap ${
                    isSelected ? "text-black" : "text-[#f3eadf]"
                  }`}
                  style={{ fontFamily: "var(--font-main)", fontWeight: 400 }}
                >
                  {label}
                  {/* если захочешь маркер наличия записи */}
                  {/* {hasEntry ? " •" : ""} */}
                </p>
              </button>
            );
          })}
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}