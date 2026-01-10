import svgPaths from "./svg-igc54u922p";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0">
      <div className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3eadf] text-[15px] tracking-[0.4px]">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[28px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3eadf] text-[15px] tracking-[0.4px]">{text}</p>
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

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px pb-0 pt-[3px] px-0 relative shrink-0">
      <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[38px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3eadf] text-[34px] tracking-[0.4px]">О приложении</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[28px] items-center justify-center relative shrink-0 w-full">
      <Icon />
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-full">
      <Frame10 />
      <p className="font-['RotondaC:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f3eadf] text-[15px] text-center tracking-[0.4px] w-full">Тихое пространство для заметок о дне</p>
    </div>
  );
}

function Frame1() {
  return (
    <Wrapper1>
      <p className="mb-0">Это личное пространство для заметок о дне, настроении и состоянии.</p>
      <p className="mb-0">Здесь можно фиксировать мысли, отмечать, как ты себя чувствуешь, и получать мягкую поддержку — без оценок и давления.</p>
      <p>Приложение создано, чтобы помогать замечать себя и свои дни, даже самые обычные.</p>
    </Wrapper1>
  );
}

function Frame4() {
  return (
    <Wrapper>
      <Frame1 />
    </Wrapper>
  );
}

function Frame5() {
  return (
    <Wrapper>
      <Text text="Все записи хранятся только на твоём устройстве." />
    </Wrapper>
  );
}

function Frame2() {
  return (
    <Wrapper1>
      <p className="mb-0">Поддержка в приложении носит общий характер и не заменяет помощь специалиста.</p>
      <p>Ответы создаются автоматически и предназначены для мягкой рефлексии и поддержки.</p>
    </Wrapper1>
  );
}

function Frame6() {
  return (
    <Wrapper>
      <Frame2 />
    </Wrapper>
  );
}

function Frame7() {
  return (
    <Wrapper>
      <Text text="Ты можешь использовать приложение так, как тебе удобно — без правил и ожиданий." />
    </Wrapper>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame9 />
      <Frame3 />
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

export default function About() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="About">
      <BarsStatusBar />
      <MainContainer />
      <BarsHomeIndicator />
    </div>
  );
}