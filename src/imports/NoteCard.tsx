import svgPaths from "./svg-cp47akd6jq";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("flex flex-row items-center size-full", additionalClassNames)}>
      <div className="content-stretch flex items-center justify-between px-[20px] py-[16px] relative w-full">{children}</div>
    </div>
  );
}
type EyeProps = {
  additionalClassNames?: string;
};

function Eye({ additionalClassNames = "" }: EyeProps) {
  return (
    <div className={clsx("absolute overflow-clip rounded-[2863.68px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6205 20.6205">
        <circle cx="10.3103" cy="10.3103" fill="var(--fill-0, #F3EADF)" id="Ellipse 12" r="10.3103" />
      </svg>
      <div className="absolute aspect-[64/64] left-[20.83%] right-[-31.94%] top-[calc(50%+7.02px)] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9117 22.9117">
          <circle cx="11.4558" cy="11.4558" fill="var(--fill-0, black)" id="Ellipse 13" r="11.4558" />
        </svg>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0", additionalClassNames)}>
      <p className="font-['RotondaC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f3eadf] text-[17px] text-center text-nowrap tracking-[0.4px]">{text}</p>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.662px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.662 11.3358">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.pb5882b0} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p14ac0800} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p1ae8cb00} fill="var(--fill-0, white)" id="Rectangle_2" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p3becb880} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
          <path clipRule="evenodd" d={svgPaths.p3e2de00} fill="var(--fill-0, white)" fillRule="evenodd" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="_Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="_Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3aa84e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e6b3780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12b0b900} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function BarsStatusBar() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-[375px]" data-name="bars / status bar">
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon 28">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="icon 28">
          <path d={svgPaths.p3a7feb00} fill="var(--fill-0, white)" id="arrow.left" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0">
      <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[38px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3eadf] text-[34px] tracking-[0.4px]">09.01.2026</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-center relative shrink-0 w-full">
      <Icon />
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute h-[106px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[365px]" data-name="bg">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 106">
          <g clipPath="url(#clip0_8_383)" id="bg">
            <rect fill="black" height="106" width="365" />
            <g filter="url(#filter0_f_8_383)" id="Rectangle 42033">
              <rect fill="var(--fill-0, #F3EADF)" height="157" width="421" x="-28" y="-26" />
            </g>
            <g filter="url(#filter1_f_8_383)" id="Vector 6">
              <path d={svgPaths.p1f2bb900} fill="var(--fill-0, #A9C3E6)" />
            </g>
            <g filter="url(#filter2_f_8_383)" id="Vector 5">
              <path d={svgPaths.p59bf0c0} fill="var(--fill-0, #F3EADF)" />
            </g>
            <g filter="url(#filter3_f_8_383)" id="Vector 3">
              <path d={svgPaths.p1d17de80} fill="var(--fill-0, #CDC5FF)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="557" id="filter0_f_8_383" width="821" x="-228" y="-226">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_8_383" stdDeviation="100" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="441" id="filter1_f_8_383" width="492" x="-67" y="-100">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_8_383" stdDeviation="30" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="272.521" id="filter2_f_8_383" width="438.519" x="19.2434" y="-64.0725">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_8_383" stdDeviation="10" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="355.084" id="filter3_f_8_383" width="375.058" x="-11.7808" y="-126.918">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_8_383" stdDeviation="12" />
            </filter>
            <clipPath id="clip0_8_383">
              <rect fill="white" height="106" width="365" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[15px] text-black text-center tracking-[0.4px]">«Сегодня мы смогли сохранить гармонию внутри. Это действительно радует!»</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[28px] shrink-0 w-full">
      <Wrapper additionalClassNames="overflow-clip rounded-[inherit]">
        <Bg />
        <Frame2 />
      </Wrapper>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#f3eadf] text-[17px] text-center text-nowrap tracking-[0.4px]">Сон:</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.78%_0_20.7%_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 16.386">
        <g id="Group 1">
          <path d={svgPaths.p3fb75880} fill="url(#paint0_linear_3_3137)" id="Vector" />
          <path d={svgPaths.p1447f700} fill="var(--fill-0, black)" id="Ellipse 14" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_3137" x1="14" x2="14" y1="0" y2="16.386">
            <stop stopColor="#F0C4DD" />
            <stop offset="1" stopColor="#FFDBF0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SleepEmotion() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="sleep emotion">
      <Group />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0">
      <Text text="9 часов" />
      <SleepEmotion />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] text-center text-nowrap tracking-[0.4px]">Отдохнувший</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <Frame11 />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[28px] shrink-0 w-full">
      <Wrapper>
        <Frame4 />
        <Frame10 />
      </Wrapper>
    </div>
  );
}

function Eyes() {
  return (
    <div className="absolute contents inset-[17.18%_31.74%_65.63%_31.5%]" data-name="eyes">
      <Eye additionalClassNames="inset-[17.18%_51.31%_65.63%_31.5%]" />
      <Eye additionalClassNames="inset-[17.18%_31.74%_65.63%_51.07%]" />
    </div>
  );
}

function Emotions() {
  return (
    <div className="relative shrink-0 size-[120px]" data-name="emotions">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <circle cx="60" cy="60" fill="url(#paint0_linear_8_381)" r="60" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_381" x1="60" x2="60" y1="0" y2="120">
            <stop stopColor="#A9C3E6" />
            <stop offset="1" stopColor="#DAE6F7" />
          </linearGradient>
        </defs>
      </svg>
      <Eyes />
      <div className="absolute inset-[23.39%_36.04%_48.69%_36.04%]">
        <div className="absolute bottom-0 left-[0.66%] right-[0.66%] top-1/2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.0665 16.7542">
            <path d={svgPaths.p12107180} fill="var(--fill-0, black)" id="Ellipse 14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#333] relative rounded-[28px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[20px] relative w-full">
          <Emotions />
          <Text text="Радостный" additionalClassNames="w-[303px]" />
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
          <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3eadf] text-[15px] tracking-[0.4px]">Сегодняшний день был наполнен радостью и спокойствием. Я наслаждался тишиной и умиротворением, проводя время на свежем воздухе с интересной книгой. Никаких забот, только идеальный день для отдыха и приятных размышлений.</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip pb-[16px] pt-0 px-0 relative rounded-[28px] shrink-0 w-full">
      <Frame7 />
      <Frame1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full">
      <Frame8 />
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame12 />
      <Frame9 />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="main container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[12px] pt-[28px] px-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function BarsHomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 w-[375px]" data-name="bars / home indicator">
      <div className="absolute bg-white bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

export default function NoteCard() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="Note card">
      <BarsStatusBar />
      <MainContainer />
      <BarsHomeIndicator />
    </div>
  );
}