import svgPaths from "../../imports/svg-uy1obel5zt";

interface FilledStateProps {
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
  selectedDate: string;
  onEdit: () => void;
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

function AnimatedGradientBg() {
  return (
    <div className="absolute inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 80">
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="480" id="filter0_f_summary" width="735" x="-200" y="-200">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="380" id="filter1_f_summary" width="450" x="-60" y="-90">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="30" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="230" id="filter2_f_summary" width="380" x="0" y="-50">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="10" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="300" id="filter3_f_summary" width="330" x="-10" y="-100">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="12" />
          </filter>
          <clipPath id="clip0_summary">
            <rect fill="white" height="80" width="335" rx="24" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip0_summary)">
          <rect fill="#D4C5E8" height="80" width="335" />
          <g filter="url(#filter0_f_summary)" className="animate-summary-gradient-1">
            <rect fill="#F3EADF" height="140" width="335" x="0" y="-30" />
          </g>
          <g filter="url(#filter1_f_summary)" className="animate-summary-gradient-2">
            <ellipse cx="165" cy="40" fill="#A9C3E6" rx="165" ry="130" />
          </g>
          <g filter="url(#filter2_f_summary)" className="animate-summary-gradient-3">
            <ellipse cx="190" cy="40" fill="#F3EADF" rx="170" ry="95" />
          </g>
          <g filter="url(#filter3_f_summary)" className="animate-summary-gradient-4">
            <ellipse cx="155" cy="40" fill="#CDC5FF" rx="141" ry="126" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function FilledState({ entry, selectedDate, onEdit }: FilledStateProps) {
  const sleepInfo = getSleepInfo(entry.sleep);

  return (
    <div className="flex flex-col gap-4 pt-3 pb-5 w-full">
      {/* Title */}
      <h2 className="text-xl mb-2 text-[24px] text-center" style={{ fontFamily: 'var(--font-main)' }}>
        {selectedDate === "2026-01-09" ? "Твой день:" : "Твой день:"}
      </h2>

      {/* Container for all blocks with padding */}
      <div className="flex flex-col gap-[2px] p-[2px] w-full relative">
        {/* AI Summary */}
        <div
          className="rounded-3xl p-5 text-[15px] leading-relaxed text-center font-normal relative overflow-hidden isolate"
          style={{
            color: "#000",
            fontFamily: 'var(--font-main)',
          }}
        >
          <AnimatedGradientBg />
          <span className="relative z-10">{entry.summary}</span>
          <style>{`
            @keyframes summary-gradient-float-1 {
              0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.8;
              }
              25% {
                transform: translate(10px, -15px) scale(1.05);
                opacity: 0.9;
              }
              50% {
                transform: translate(-5px, -10px) scale(0.95);
                opacity: 0.85;
              }
              75% {
                transform: translate(5px, -20px) scale(1.02);
                opacity: 0.95;
              }
            }

            @keyframes summary-gradient-float-2 {
              0%, 100% {
                transform: translate(0, 0) scale(1) rotate(0deg);
                opacity: 0.7;
              }
              33% {
                transform: translate(-15px, 10px) scale(1.08) rotate(2deg);
                opacity: 0.85;
              }
              66% {
                transform: translate(8px, -5px) scale(0.92) rotate(-2deg);
                opacity: 0.75;
              }
            }

            @keyframes summary-gradient-float-3 {
              0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.75;
              }
              40% {
                transform: translate(12px, 8px) scale(1.06);
                opacity: 0.9;
              }
              80% {
                transform: translate(-8px, -12px) scale(0.98);
                opacity: 0.8;
              }
            }

            @keyframes summary-gradient-float-4 {
              0%, 100% {
                transform: translate(0, 0) scale(1) rotate(0deg);
                opacity: 0.8;
              }
              30% {
                transform: translate(-10px, -8px) scale(1.04) rotate(3deg);
                opacity: 0.95;
              }
              60% {
                transform: translate(15px, 5px) scale(0.96) rotate(-3deg);
                opacity: 0.85;
              }
            }

            .animate-summary-gradient-1 {
              animation: summary-gradient-float-1 8s ease-in-out infinite;
              transform-origin: center;
            }

            .animate-summary-gradient-2 {
              animation: summary-gradient-float-2 10s ease-in-out infinite;
              transform-origin: center;
            }

            .animate-summary-gradient-3 {
              animation: summary-gradient-float-3 7s ease-in-out infinite;
              transform-origin: center;
            }

            .animate-summary-gradient-4 {
              animation: summary-gradient-float-4 9s ease-in-out infinite;
              transform-origin: center;
            }
          `}</style>
        </div>

        {/* Sleep Block */}
        <div className="bg-card rounded-2xl p-4 flex items-center justify-between relative">
          <div className="text-base" style={{ fontFamily: 'var(--font-main)' }}>Сон:</div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-lg" style={{ fontFamily: 'var(--font-main)' }}>{entry.sleep} часов</span>
              <img src={sleepInfo.icon} alt="" className="w-6 h-6" />
            </div>
            <div className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-main)' }}>{sleepInfo.label}</div>
          </div>
        </div>

        {/* Mood and Diary Card Combined */}
        <div className="bg-card rounded-3xl overflow-hidden flex flex-col gap-2 relative">
          {/* Mood Section */}
          <div className="rounded-3xl p-5 mb-[2px] flex flex-col items-center gap-2 bg-muted/20 light:bg-[#F3EADF] overflow-hidden">
            {/* Mood Emojis (cluster up to 3) */}
            {(() => {
              const moodIds = (entry.moods && entry.moods.length > 0) ? entry.moods.slice(0, 3) : (entry.mood ? [entry.mood] : []);
              const icons = moodIds.map(getMoodIcon);
              if (icons.length <= 1) {
                return <img src={icons[0] ?? getMoodIcon('neutral')} alt="" className="w-[96px] h-[96px]" />;
              }
              return (
                <div className="relative w-[140px] h-[120px]">
                  {icons[0] && (
                    <img src={icons[0]} alt="" className="absolute" style={{ left: "50%", top: "0px", transform: "translateX(-50%)", zIndex: 30 }} width={80} height={80} />
                  )}
                  {icons[1] && (
                    <img src={icons[1]} alt="" className="absolute" style={{ left: "10px", bottom: "4px", zIndex: 20 }} width={56} height={56} />
                  )}
                  {icons[2] && (
                    <img src={icons[2]} alt="" className="absolute" style={{ right: "10px", bottom: "12px", zIndex: 10 }} width={56} height={56} />
                  )}
                </div>
              );
            })()}

          </div>

          {/* Diary Text Section */}
          {entry.text && (
            <div className="px-5 pt-4 pb-3">
              <p
                className="
                  text-[15px]
                  leading-[20px]
                  tracking-[0.4px]
                  text-card-foreground
                  font-normal
                  text-center
                "
                style={{ fontFamily: "var(--font-main)" }}
              >
                {entry.text}
              </p>
            </div>
          )}
        </div>

        {/* Separate Action Button — only if there is no text (bento style) */}
        {!entry.text && (
          <div className="px-5 pt-2 pb-[2px]">
            <button
              onClick={onEdit}
              className="
                w-full
                h-[56px]
                rounded-full
                bg-[#F3EADF]
                text-black
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
      </div>
    </div>
  );
}
