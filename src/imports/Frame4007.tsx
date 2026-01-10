import svgPaths from "./svg-uy1obel5zt";

function Bg() {
  return (
    <div className="absolute h-[145px] left-1/2 top-[calc(50%+19.5px)] translate-x-[-50%] translate-y-[-50%] w-[365px]" data-name="bg">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 145">
          <g clipPath="url(#clip0_12_795)" id="bg">
            <rect fill="black" height="145" width="365" />
            <g filter="url(#filter0_f_12_795)" id="Rectangle 42033">
              <rect fill="var(--fill-0, #F3EADF)" height="157" width="421" x="-28" y="-26" />
            </g>
            <g filter="url(#filter1_f_12_795)" id="Vector 6">
              <path d={svgPaths.p1f2bb900} fill="var(--fill-0, #A9C3E6)" />
            </g>
            <g filter="url(#filter2_f_12_795)" id="Vector 5">
              <path d={svgPaths.p59bf0c0} fill="var(--fill-0, #F3EADF)" />
            </g>
            <g filter="url(#filter3_f_12_795)" id="Vector 3">
              <path d={svgPaths.p1d17de80} fill="var(--fill-0, #CDC5FF)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="557" id="filter0_f_12_795" width="821" x="-228" y="-226">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_12_795" stdDeviation="100" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="441" id="filter1_f_12_795" width="492" x="-67" y="-100">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_12_795" stdDeviation="30" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="272.521" id="filter2_f_12_795" width="438.519" x="19.2434" y="-64.0725">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_12_795" stdDeviation="10" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="355.084" id="filter3_f_12_795" width="375.058" x="-11.7808" y="-126.918">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_12_795" stdDeviation="12" />
            </filter>
            <clipPath id="clip0_12_795">
              <rect fill="white" height="145" width="365" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0 w-full">
      <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[13px] text-black text-center tracking-[0.4px]">Совет:</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0 w-full">
      <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-black text-center tracking-[0.4px]">«Сегодня мы смогли сохранить гармонию внутри. Это действительно радует!»</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[28px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[20px] py-[16px] relative w-full">
          <Bg />
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pb-0 pt-[2px] px-[20px] relative w-full">
          <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3eadf] text-[24px] text-center tracking-[0.4px]">Нет записи</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-[#1a1a1a] content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[16px] relative rounded-[28px] shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame6 />
    </div>
  );
}