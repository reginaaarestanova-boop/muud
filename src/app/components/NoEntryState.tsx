import svgPaths from "../../imports/svg-uy1obel5zt";

interface NoEntryStateProps {
  selectedDate: string;
}

// Random daily tips
const dailyTips = [
  "Сегодня мы смогли сохранить гармонию внутри. Это действительно радует!",
  "Каждый день — это возможность начать заново и стать лучше.",
  "Помните, что отдых так же важен, как и продуктивность.",
  "Маленькие шаги приводят к большим переменам. Продолжайте двигаться вперёд.",
  "Будьте добры к себе — вы делаете всё, что можете.",
  "Сегодня найдите время для того, что приносит вам радость.",
  "Ваши усилия не напрасны, даже если результаты не видны сразу.",
  "Примите то, что вы не можете изменить, и измените то, что можете.",
];

function AnimatedGradientBg() {
  return (
    <div className="absolute h-[200px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[365px]">
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 200">
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="557" id="filter0_f_animated" width="821" x="-228" y="-226">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="100" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="441" id="filter1_f_animated" width="492" x="-67" y="-100">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="30" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="272.521" id="filter2_f_animated" width="438.519" x="19.2434" y="-64.0725">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="10" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="355.084" id="filter3_f_animated" width="375.058" x="-11.7808" y="-126.918">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="12" />
            </filter>
            <clipPath id="clip0_animated">
              <rect fill="white" height="200" width="365" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip0_animated)">
            <rect className="fill-black light:fill-[#F3EADF]" height="200" width="365" />
            <g filter="url(#filter0_f_animated)" className="animate-gradient-1">
              <rect fill="#F3EADF" height="157" width="421" x="-28" y="-26" />
            </g>
            <g filter="url(#filter1_f_animated)" className="animate-gradient-2">
              <path d={svgPaths.p1f2bb900} fill="#A9C3E6" />
            </g>
            <g filter="url(#filter2_f_animated)" className="animate-gradient-3">
              <path d={svgPaths.p59bf0c0} fill="#F3EADF" />
            </g>
            <g filter="url(#filter3_f_animated)" className="animate-gradient-4">
              <path d={svgPaths.p1d17de80} fill="#CDC5FF" />
            </g>
          </g>
        </svg>
      </div>
      <style>{`
        @keyframes gradient-float-1 {
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

        @keyframes gradient-float-2 {
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

        @keyframes gradient-float-3 {
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

        @keyframes gradient-float-4 {
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

        .animate-gradient-1 {
          animation: gradient-float-1 8s ease-in-out infinite;
          transform-origin: center;
        }

        .animate-gradient-2 {
          animation: gradient-float-2 10s ease-in-out infinite;
          transform-origin: center;
        }

        .animate-gradient-3 {
          animation: gradient-float-3 7s ease-in-out infinite;
          transform-origin: center;
        }

        .animate-gradient-4 {
          animation: gradient-float-4 9s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  );
}

export function NoEntryState({ selectedDate }: NoEntryStateProps) {
  // Get a consistent tip based on the date (pseudo-random but same for the same date)
  const dateNum = new Date(selectedDate).getDate();
  const tipIndex = dateNum % dailyTips.length;
  const tip = dailyTips[tipIndex];

  return (
    <div className="flex flex-col gap-[2px] w-full">
      {/* Tip Card with Animated Gradient — fixed height 200px */}
      <div className="bg-card rounded-[28px] w-full overflow-hidden h-[200px]">
        <div className="flex flex-col gap-[6px] px-[20px] py-[16px] relative items-center justify-center h-full">
          <AnimatedGradientBg />
          <div className="text-[13px] leading-[17px] tracking-[0.4px] relative z-10 text-center text-black" style={{ fontFamily: 'var(--font-main)' }}>
            Совет на день
          </div>
          <p
            className="text-black text-[15px] leading-[20px] tracking-[0.4px] relative z-10 text-center"
            style={{ fontFamily: 'var(--font-main)' }}
          >
            {tip}
          </p>
        </div>
      </div>
    </div>
  );
}