import { useRef, useEffect, useState } from "react";
import { Plus } from "lucide-react";

interface DateStripProps {
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

const getMoodEmoji = (mood: string) => {
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

const getMoodColor = (mood: string) => {
  const colorMap: Record<string, string> = {
    sad: "#E5C1E5",
    neutral: "#C1D9E5",
    happy: "#C1D9F0",
    calm: "#A8D5C3",
  };
  return colorMap[mood] || "#C1D9E5";
};

export function DateStrip({
  selectedDate,
  onSelectDate,
  diaryData,
}: DateStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const isLoadingRef = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const isUserScrollingRef = useRef(false);
  
  // State to hold dynamic date range
  const [dateRange, setDateRange] = useState({ start: -30, end: 30 });
  
  // Generate dates based on current range
  const generateDates = () => {
    const dates = [];
    const today = new Date(); // Use actual current date

    for (let i = dateRange.start; i <= dateRange.end; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    return dates;
  };
  
  const dates = generateDates();

  // Update fade indicators based on scroll position
  const updateFadeIndicators = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      setShowLeftFade(scrollLeft > 50);
      setShowRightFade(scrollLeft + clientWidth < scrollWidth - 50);
    }
  };

  // Initial scroll to selected date
  useEffect(() => {
    if (scrollRef.current) {
      const selectedItem = itemRefs.current.get(selectedDate);
      if (selectedItem) {
        const container = scrollRef.current;
        const itemLeft = selectedItem.offsetLeft;
        const itemWidth = selectedItem.offsetWidth;
        const containerWidth = container.clientWidth;
        const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;
        // Use instant scroll on initial mount
        container.scrollLeft = scrollPosition;
      }
      updateFadeIndicators();
    }
  }, [selectedDate]); // Added selectedDate dependency to ensure initial scroll happens

  // Scroll to selected date when it changes from external source (like "Return" button)
  const isFirstRenderRef = useRef(true);
  
  useEffect(() => {
    // Skip on first render (already handled above)
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    
    if (scrollRef.current && !isUserScrollingRef.current) {
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

  // Handle infinite scroll - load more dates when reaching edges
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && !isLoadingRef.current) {
        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        
        // Mark that user is scrolling
        isUserScrollingRef.current = true;
        
        // Load more dates at the beginning
        if (scrollLeft < 500) {
          isLoadingRef.current = true;
          setIsLoading(true);
          
          // Save the first visible date to maintain position
          const containerLeft = container.scrollLeft;
          const firstVisibleDate = Array.from(itemRefs.current.entries()).find(([_, el]) => {
            return el.offsetLeft >= containerLeft;
          })?.[0];
          
          setDateRange(prev => ({ ...prev, start: prev.start - 20 }));
          
          // Adjust scroll position to maintain visual position
          setTimeout(() => {
            if (scrollRef.current && firstVisibleDate) {
              const targetElement = itemRefs.current.get(firstVisibleDate);
              if (targetElement) {
                const targetLeft = targetElement.offsetLeft;
                scrollRef.current.scrollLeft = targetLeft;
              }
            }
            setIsLoading(false);
            isLoadingRef.current = false;
          }, 0);
        }
        
        // Load more dates at the end
        if (scrollLeft + clientWidth > scrollWidth - 500) {
          isLoadingRef.current = true;
          setDateRange(prev => ({ ...prev, end: prev.end + 20 }));
          
          requestAnimationFrame(() => {
            isLoadingRef.current = false;
          });
        }
        
        setIsScrolling(true);
        
        // Clear previous timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Set new timeout to detect scroll end
        scrollTimeout.current = setTimeout(() => {
          setIsScrolling(false);
          isUserScrollingRef.current = false;
          
          // Find the centered item only if user was manually scrolling
          if (scrollRef.current && !isLoading) {
            const container = scrollRef.current;
            const containerCenter = container.scrollLeft + container.clientWidth / 2;
            
            let closestDate = selectedDate;
            let closestDistance = Infinity;

            itemRefs.current.forEach((item, dateStr) => {
              const itemCenter = item.offsetLeft + item.offsetWidth / 2;
              const distance = Math.abs(containerCenter - itemCenter);
              
              if (distance < closestDistance) {
                closestDistance = distance;
                closestDate = dateStr;
              }
            });

            if (closestDate !== selectedDate) {
              onSelectDate(closestDate);
              
              // Snap to center
              const item = itemRefs.current.get(closestDate);
              if (item) {
                const itemLeft = item.offsetLeft;
                const itemWidth = item.offsetWidth;
                const containerWidth = container.clientWidth;
                const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;
                container.scrollTo({
                  left: scrollPosition,
                  behavior: 'smooth'
                });
              }
            }
          }
        }, 150);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }
  }, [selectedDate, onSelectDate, dates.length, isLoading]);

  return (
    <div className="sticky top-0 z-10 bg-background pt-6 pb-4">
      <div
        ref={scrollRef}
        className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-4 relative"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onScroll={updateFadeIndicators}
      >
        {/* Left Fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to right, var(--background) 0%, transparent 100%)",
            opacity: showLeftFade ? 1 : 0,
          }}
        />

        {/* Right Fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to left, var(--background) 0%, transparent 100%)",
            opacity: showRightFade ? 1 : 0,
          }}
        />
        
        {dates.map((date) => {
          const dateStr = formatDate(date);
          const isSelected = dateStr === selectedDate;
          const todayStr = formatDate(new Date()); // Get actual today's date
          const isToday = dateStr === todayStr;
          const entry = diaryData[dateStr];
          const day = date.getDate();
          const month = getMonthName(date.getMonth());
          const year = date.getFullYear();

          return (
            <div
              key={dateStr}
              ref={(el) => el && itemRefs.current.set(dateStr, el)}
              className="flex flex-col items-center gap-2 flex-shrink-0"
              style={{
                scrollSnapAlign: "center",
              }}
            >
              {/* Date */}
              <button
                onClick={() => {
                  onSelectDate(dateStr);
                  // Scroll to center when clicked
                  if (scrollRef.current && itemRefs.current.get(dateStr)) {
                    const item = itemRefs.current.get(dateStr);
                    const container = scrollRef.current;
                    const itemLeft = item.offsetLeft;
                    const itemWidth = item.offsetWidth;
                    const containerWidth = container.clientWidth;
                    const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;
                    container.scrollTo({
                      left: scrollPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`flex flex-col items-center px-4 py-2 rounded-2xl transition-all ${
                  isSelected
                    ? "bg-secondary"
                    : "hover:bg-muted/10"
                }`}
              >
                <div
                  className={`text-[48px] leading-none ${
                    isSelected ? "text-secondary-foreground" : "text-muted-foreground"
                  }`}
                  style={{ fontFamily: 'var(--font-main)', fontWeight: 700 }}
                >
                  {String(day).padStart(2, "0")}
                </div>
                <div className={`text-[13px] ${
                  isSelected ? "text-secondary-foreground" : "text-muted-foreground"
                }`} style={{ fontFamily: 'var(--font-main)', fontWeight: 400 }}>
                  {month} {year}
                </div>
              </button>

              {/* Mood Indicator */}
              <div className="w-10 h-10 flex items-center justify-center">
                {entry ? (
                  <span className="text-[40px] leading-none">
                    {getMoodEmoji(entry.mood)}
                  </span>
                ) : isToday ? (
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center">
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full border-2 border-dashed border-muted-foreground" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}