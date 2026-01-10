import { useRef, useEffect, useState } from "react";

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

export function FixedDateStrip({
  selectedDate,
  onSelectDate,
  diaryData,
}: FixedDateStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const isLoadingRef = useRef(false);
  
  // State to hold dynamic date range
  const [dateRange, setDateRange] = useState({ start: -15, end: 15 });
  
  // Generate dates based on current range
  const generateDates = () => {
    const dates = [];
    const today = new Date(2026, 0, 9); // Jan 9, 2026

    for (let i = dateRange.start; i <= dateRange.end; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    return dates;
  };
  
  const dates = generateDates();

  // Auto-scroll to show selected date in view
  useEffect(() => {
    if (scrollRef.current) {
      const selectedItem = itemRefs.current.get(selectedDate);
      if (selectedItem) {
        const container = scrollRef.current;
        const itemLeft = selectedItem.offsetLeft;
        const itemWidth = selectedItem.offsetWidth;
        const containerWidth = container.clientWidth;
        const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedDate]);

  // Handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && !isLoadingRef.current) {
        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        
        // Load more dates at the beginning
        if (scrollLeft < 300) {
          isLoadingRef.current = true;
          const currentScrollLeft = container.scrollLeft;
          const currentScrollWidth = container.scrollWidth;
          
          setDateRange(prev => ({ ...prev, start: prev.start - 10 }));
          
          // Adjust scroll position to maintain visual position
          requestAnimationFrame(() => {
            if (scrollRef.current) {
              const newScrollWidth = scrollRef.current.scrollWidth;
              const scrollDiff = newScrollWidth - currentScrollWidth;
              scrollRef.current.scrollLeft = currentScrollLeft + scrollDiff;
              isLoadingRef.current = false;
            }
          });
        }
        
        // Load more dates at the end
        if (scrollLeft + clientWidth > scrollWidth - 300) {
          isLoadingRef.current = true;
          setDateRange(prev => ({ ...prev, end: prev.end + 10 }));
          
          requestAnimationFrame(() => {
            isLoadingRef.current = false;
          });
        }
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [dates.length]);

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

            return (
              <button
                key={dateStr}
                onClick={() => onSelectDate(dateStr)}
                className={`flex-shrink-0 flex items-center justify-center px-[15px] py-[7px] rounded-[28px] ${
                  isSelected ? "bg-[#f3eadf]" : "bg-[#1a1a1a]"
                }`}
                ref={el => itemRefs.current.set(dateStr, el!)}
              >
                <p
                  className={`text-[13px] leading-[17px] tracking-[0.4px] whitespace-nowrap ${
                    isSelected ? "text-black" : "text-[#f3eadf]"
                  }`}
                  style={{ fontFamily: 'var(--font-main)', fontWeight: 400 }}
                >
                  {label}
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