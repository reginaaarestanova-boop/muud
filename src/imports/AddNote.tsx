import svgPaths from "./svg-vla56udqq7";
import clsx from "clsx";
type Eye10Props = {
  additionalClassNames?: string;
};

function Eye10({ children, additionalClassNames = "" }: React.PropsWithChildren<Eye10Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.87351 6.87351">
        {children}
      </svg>
    </div>
  );
}

function Body({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[0_-42.86%_-42.86%_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        {children}
      </svg>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="icon 28">{children}</g>
      </svg>
    </div>
  );
}
type TitleTextProps = {
  text: string;
};

function TitleText({ text }: TitleTextProps) {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px pb-0 pt-[4px] px-0 relative shrink-0">
      <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3eadf] text-[17px] tracking-[-0.43px]">{text}</p>
    </div>
  );
}
type Helper6Props = {
  additionalClassNames?: string;
};

function Helper6({ additionalClassNames = "" }: Helper6Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(250, 122, 77, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6468 11.6468">
          <circle cx="5.82339" cy="5.82339" fill="var(--fill-0, #FA7A4D)" id="Ellipse 14" r="5.82339" />
        </svg>
      </div>
    </div>
  );
}
type Helper5Props = {
  additionalClassNames?: string;
};

function Helper5({ additionalClassNames = "" }: Helper5Props) {
  return (
    <div className={clsx("absolute aspect-[64/64] top-[calc(50%+2.48px)] translate-y-[-50%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.86396 2.86396">
        <circle cx="1.43198" cy="1.43198" fill="var(--fill-0, black)" id="Ellipse 13" r="1.43198" />
      </svg>
    </div>
  );
}
type Helper4Props = {
  additionalClassNames?: string;
};

function Helper4({ additionalClassNames = "" }: Helper4Props) {
  return (
    <div className={clsx("absolute aspect-[64/64] bottom-[20.82%] top-[22.24%] translate-x-[-50%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91408 3.91408">
        <circle cx="1.95704" cy="1.95704" fill="var(--fill-0, black)" id="Ellipse 13" r="1.95704" />
      </svg>
    </div>
  );
}
type Helper3Props = {
  additionalClassNames?: string;
};

function Helper3({ additionalClassNames = "" }: Helper3Props) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute bottom-0 left-[0.66%] right-[0.66%] top-1/2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0222 5.58473">
          <path d={svgPaths.pde38e80} fill="var(--fill-0, black)" id="Ellipse 14" />
        </svg>
      </div>
    </div>
  );
}

function Helper2() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 7.63723 7.63723" className="block size-full">
      <circle cx="3.81862" cy="3.81862" fill="var(--fill-0, black)" id="Ellipse 13" r="3.81862" />
    </svg>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("absolute aspect-[64/64] bottom-[-48.6%] top-[37.49%] translate-x-[-50%]", additionalClassNames)}>
      <Helper2 />
    </div>
  );
}

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 6.87351 6.87351" className="block size-full">
      <circle cx="3.43675" cy="3.43675" fill="var(--fill-0, #F3EADF)" id="Ellipse 12" r="3.43675" />
    </svg>
  );
}
type Eye1Props = {
  additionalClassNames?: string;
};

function Eye1({ additionalClassNames = "" }: Eye1Props) {
  return (
    <div className={clsx("absolute overflow-clip rounded-[954.558px]", additionalClassNames)}>
      <Helper />
      <div className="absolute aspect-[64/64] left-[20.83%] right-[-31.94%] top-[calc(50%+2.01px)] translate-y-[-50%]">
        <Helper2 />
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[3px] px-0 relative shrink-0">
      <div className="flex flex-col font-['RotondaC:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.23px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type EyeProps = {
  additionalClassNames?: string;
};

function Eye({ additionalClassNames = "" }: EyeProps) {
  return (
    <div className={clsx("absolute overflow-clip rounded-[954.558px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.81146 4.81146">
        <circle cx="2.40573" cy="2.40573" fill="var(--fill-0, #F3EADF)" id="Ellipse 12" r="2.40573" />
      </svg>
      <div className="absolute aspect-[64/64] bottom-[19.43%] left-[calc(50%+0.03px)] top-[19.46%] translate-x-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.94033 2.94033">
          <circle cx="1.47017" cy="1.47017" fill="var(--fill-0, black)" id="Ellipse 13" r="1.47017" />
        </svg>
      </div>
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

function Icon1() {
  return (
    <Icon>
      <path d={svgPaths.p114af070} fill="var(--fill-0, white)" id="xmark" />
    </Icon>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#f3eadf] text-[34px] text-nowrap tracking-[0.4px]">Записать день</p>
      <Icon1 />
    </div>
  );
}

function Eyes() {
  return (
    <div className="absolute contents inset-[17.18%_31.74%_65.63%_31.5%]" data-name="eyes">
      <Eye additionalClassNames="inset-[17.18%_51.31%_65.63%_31.5%]" />
      <Eye additionalClassNames="inset-[17.18%_31.74%_65.63%_51.08%]" />
    </div>
  );
}

function Emotions() {
  return (
    <div className="relative shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)] shrink-0 size-[28px]" data-name="emotions">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" fill="url(#paint0_linear_10_1178)" r="14" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_1178" x1="14" x2="14" y1="0" y2="28">
            <stop stopColor="#FFC90C" />
            <stop offset="1" stopColor="#FFECAA" />
          </linearGradient>
        </defs>
      </svg>
      <Eyes />
      <div className="absolute inset-[22.91%_36.04%_49.16%_36.04%]">
        <div className="absolute bottom-0 left-[2.78%] right-[2.78%] top-1/2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.38321 3.90931">
            <path d={svgPaths.p3c4ec3b0} fill="var(--fill-0, black)" id="Ellipse 14" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChipsTypesMassage() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[8px] h-[48px] items-center px-[16px] py-[2px] relative rounded-[60px] shrink-0" data-name="chips-types massage">
      <Emotions />
      <Text text="Воодушевленный" />
    </div>
  );
}

function Eyes1() {
  return (
    <div className="absolute contents inset-[24.55%_2.49%_50.9%_45.01%]" data-name="eyes">
      <Eye1 additionalClassNames="inset-[24.55%_30.45%_50.9%_45.01%]" />
      <Eye1 additionalClassNames="inset-[24.55%_2.49%_50.9%_72.96%]" />
    </div>
  );
}

function Emotions1() {
  return (
    <div className="relative shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)] shrink-0 size-[28px]" data-name="emotions">
      <Body>
        <circle cx="20" cy="20" fill="url(#paint0_linear_1_607)" r="20" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_607" x1="20" x2="20" y1="0" y2="40">
            <stop stopColor="#A9C3E6" />
            <stop offset="1" stopColor="#DAE6F7" />
          </linearGradient>
        </defs>
      </Body>
      <Eyes1 />
      <Helper3 additionalClassNames="absolute inset-[33.41%_8.62%_26.69%_51.49%]" />
    </div>
  );
}

function ChipsTypesMassage1() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[8px] h-[48px] items-center px-[16px] py-[2px] relative rounded-[60px] shrink-0" data-name="chips-types massage">
      <Emotions1 />
      <Text text="Радостный" />
    </div>
  );
}

function Eye2() {
  return (
    <div className="absolute inset-[24.55%_30.45%_50.9%_45%] overflow-clip rounded-[954.558px]" data-name="eye">
      <Helper />
      <Helper4 additionalClassNames="left-[calc(50%+0.91px)]" />
    </div>
  );
}

function Eye3() {
  return (
    <div className="absolute inset-[24.55%_2.49%_50.9%_72.96%] overflow-clip rounded-[954.558px]" data-name="eye">
      <Helper />
      <Helper4 additionalClassNames="left-[calc(50%-1px)]" />
    </div>
  );
}

function Eyes2() {
  return (
    <div className="absolute contents inset-[24.55%_2.49%_50.9%_45%]" data-name="eyes">
      <Eye2 />
      <Eye3 />
    </div>
  );
}

function Emotions2() {
  return (
    <div className="relative shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)] shrink-0 size-[28px]" data-name="emotions">
      <Body>
        <circle cx="20" cy="20" fill="url(#paint0_linear_10_1160)" r="20" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_1160" x1="20" x2="20" y1="0" y2="40">
            <stop stopColor="#6DAD93" />
            <stop offset="1" stopColor="#B2E5D0" />
          </linearGradient>
        </defs>
      </Body>
      <Eyes2 />
      <div className="absolute bg-black inset-[52.51%_14.76%_40.67%_57.62%] rounded-[9546.44px]" />
    </div>
  );
}

function ChipsTypesMassage2() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[8px] h-[48px] items-center px-[16px] py-[2px] relative rounded-[60px] shrink-0" data-name="chips-types massage">
      <Emotions2 />
      <Text text="Спокойный" />
    </div>
  );
}

function Eye4() {
  return (
    <div className="absolute inset-[24.55%_30.45%_50.9%_45.01%] overflow-clip rounded-[954.558px]" data-name="eye">
      <Helper />
      <Helper1 additionalClassNames="left-[calc(50%-2px)]" />
    </div>
  );
}

function Eye5() {
  return (
    <div className="absolute inset-[24.55%_2.49%_50.9%_72.96%] overflow-clip rounded-[954.558px]" data-name="eye">
      <Helper />
      <Helper1 additionalClassNames="left-[calc(50%-2.01px)]" />
    </div>
  );
}

function Eyes3() {
  return (
    <div className="absolute contents inset-[24.55%_2.49%_50.9%_45.01%]" data-name="eyes">
      <Eye4 />
      <Eye5 />
    </div>
  );
}

function Emotions3() {
  return (
    <div className="relative shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)] shrink-0 size-[28px]" data-name="emotions">
      <Body>
        <circle cx="20" cy="20" fill="url(#paint0_linear_3_3141)" r="20" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_3141" x1="20" x2="20" y1="0" y2="40">
            <stop stopColor="#E8EEF5" />
            <stop offset="1" stopColor="#C2C8D0" />
          </linearGradient>
        </defs>
      </Body>
      <Eyes3 />
      <div className="absolute bg-black inset-[52.5%_14.76%_40.68%_57.62%] rounded-[9546.44px]" />
    </div>
  );
}

function ChipsTypesMassage3() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[8px] h-[48px] items-center px-[16px] py-[2px] relative rounded-[60px] shrink-0" data-name="chips-types massage">
      <Emotions3 />
      <Text text="Нейтральный" />
    </div>
  );
}

function Eye6() {
  return (
    <Eye10 additionalClassNames="inset-[24.55%_30.45%_50.9%_45.01%]">
      <g id="eye">
        <g clipPath="url(#clip0_1_609)">
          <circle cx="3.43675" cy="3.43675" fill="var(--fill-0, #F3EADF)" id="Ellipse 12" r="3.43675" />
          <path d={svgPaths.p2691d740} fill="var(--fill-0, black)" id="Ellipse 14" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_609">
          <rect fill="white" height="6.87351" rx="3.43675" width="6.87351" />
        </clipPath>
      </defs>
    </Eye10>
  );
}

function Eye7() {
  return (
    <Eye10 additionalClassNames="inset-[24.55%_2.49%_50.9%_72.96%]">
      <g id="eye">
        <g clipPath="url(#clip0_1_578)">
          <circle cx="3.43675" cy="3.43675" fill="var(--fill-0, #F3EADF)" id="Ellipse 12" r="3.43675" />
          <path d={svgPaths.p1ef16b40} fill="var(--fill-0, black)" id="Ellipse 14" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_578">
          <rect fill="white" height="6.87351" rx="3.43675" width="6.87351" />
        </clipPath>
      </defs>
    </Eye10>
  );
}

function Eyes4() {
  return (
    <div className="absolute contents inset-[24.55%_2.49%_50.9%_45.01%]" data-name="eyes">
      <Eye6 />
      <Eye7 />
    </div>
  );
}

function Emotions4() {
  return (
    <div className="relative shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)] shrink-0 size-[28px]" data-name="emotions">
      <Body>
        <circle cx="20" cy="20" fill="url(#paint0_linear_1_627)" r="20" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_627" x1="20" x2="20" y1="0" y2="40">
            <stop stopColor="#F0C4DD" />
            <stop offset="1" stopColor="#FFDBF0" />
          </linearGradient>
        </defs>
      </Body>
      <Eyes4 />
      <div className="absolute flex inset-[49.78%_8.62%_10.33%_51.49%] items-center justify-center">
        <div className="flex-none rotate-[180deg] size-[11.169px]">
          <Helper3 additionalClassNames="relative size-full" />
        </div>
      </div>
    </div>
  );
}

function ChipsTypesMassage4() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[8px] h-[48px] items-center px-[16px] py-[2px] relative rounded-[60px] shrink-0" data-name="chips-types massage">
      <Emotions4 />
      <Text text="Усталый" />
    </div>
  );
}

function Eye8() {
  return (
    <div className="absolute inset-[24.55%_30.45%_50.9%_45%] overflow-clip rounded-[954.558px]" data-name="eye">
      <Helper />
      <Helper5 additionalClassNames="left-[27.78%] right-[30.55%]" />
      <Helper6 additionalClassNames="inset-[-112.51%_-33.33%_43.07%_-36.11%]" />
    </div>
  );
}

function Eye9() {
  return (
    <div className="absolute inset-[24.55%_2.49%_50.9%_72.96%] overflow-clip rounded-[954.558px]" data-name="eye">
      <Helper />
      <Helper5 additionalClassNames="left-[27.79%] right-[30.54%]" />
      <Helper6 additionalClassNames="inset-[-112.51%_-34.73%_43.07%_-34.71%]" />
    </div>
  );
}

function Eyes5() {
  return (
    <div className="absolute contents inset-[24.55%_2.49%_50.9%_45%]" data-name="eyes">
      <Eye8 />
      <Eye9 />
    </div>
  );
}

function Emotions5() {
  return (
    <div className="relative shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)] shrink-0 size-[28px]" data-name="emotions">
      <Body>
        <circle cx="20" cy="20" fill="url(#paint0_linear_3_3135)" r="20" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_3135" x1="20" x2="20" y1="0" y2="40">
            <stop stopColor="#FA7A4D" />
            <stop offset="1" stopColor="#FFC9B7" />
          </linearGradient>
        </defs>
      </Body>
      <Eyes5 />
      <div className="absolute inset-[53.53%_8.63%_34.88%_51.48%]" data-name="Vector 2 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1696 3.24772">
          <path d={svgPaths.p274c9200} fill="var(--fill-0, black)" id="Vector 2 (Stroke)" />
        </svg>
      </div>
    </div>
  );
}

function ChipsTypesMassage5() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[8px] h-[48px] items-center px-[16px] py-[2px] relative rounded-[60px] shrink-0" data-name="chips-types massage">
      <Emotions5 />
      <Text text="Тревожный" />
    </div>
  );
}

function Flex() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="flex">
      <ChipsTypesMassage />
      <ChipsTypesMassage1 />
      <ChipsTypesMassage2 />
      <ChipsTypesMassage3 />
      <ChipsTypesMassage4 />
      <ChipsTypesMassage5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3eadf] text-[15px] text-nowrap tracking-[0.4px]">Сколько часов сна?</p>
    </div>
  );
}

function Icon2() {
  return (
    <Icon>
      <path d={svgPaths.pcb8fd80} fill="var(--fill-0, white)" id="minus" />
    </Icon>
  );
}

function BtnPrimary() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[11px] relative rounded-[28px] shrink-0 size-[72px]" data-name="btn.primary">
      <Icon2 />
    </div>
  );
}

function InputLabelTextArea() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow h-[72px] min-h-px min-w-px relative rounded-[28px] shrink-0" data-name="inputLabel text area">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[18px] relative size-full">
          <TitleText text="0" />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <Icon>
      <path d={svgPaths.p265db100} fill="var(--fill-0, white)" id="plus" />
    </Icon>
  );
}

function BtnPrimary1() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[11px] relative rounded-[28px] shrink-0 size-[72px]" data-name="btn.primary">
      <Icon3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <BtnPrimary />
      <InputLabelTextArea />
      <BtnPrimary1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame6 />
    </div>
  );
}

function InputLabelTextArea1() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[28px] shrink-0 w-full" data-name="inputLabel text area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[20px] py-[18px] relative size-full">
          <TitleText text="Записать заметку о дне для себя" />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame1 />
      <Flex />
      <Frame5 />
      <InputLabelTextArea1 />
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

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="title">
      <p className="font-['RotondaC:Bold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px]">Сохранить</p>
    </div>
  );
}

function BtnPrimary2() {
  return (
    <div className="bg-[#ffc90c] h-[62px] relative rounded-[9999px] shrink-0 w-full" data-name="btn.primary">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[32px] py-[11px] relative size-full">
          <Title />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative w-full">
        <BtnPrimary2 />
      </div>
    </div>
  );
}

function BarsHomeIndicator() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="bars / home indicator">
      <div className="absolute bg-white bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[375px]">
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[140px] left-1/2 to-black translate-x-[-50%] w-[375px]" />
      <Frame4 />
      <BarsHomeIndicator />
    </div>
  );
}

export default function AddNote() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="Add note">
      <BarsStatusBar />
      <MainContainer />
      <Frame3 />
    </div>
  );
}