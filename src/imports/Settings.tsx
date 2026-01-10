import svgPaths from "./svg-zz1jc6nngn";
import clsx from "clsx";
type Wrapper1Props = {
  text: string;
};

function Wrapper1({ children, text }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[28px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative w-full">
          <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
            <p className="font-['RotondaC:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#f3eadf] text-[17px] text-center text-nowrap tracking-[0.4px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("basis-0 grow h-full min-h-px min-w-px relative rounded-[28px] shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TitleTextProps = {
  text: string;
};

function TitleText({ text }: TitleTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] text-nowrap">{text}</p>
    </div>
  );
}

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#f3eadf] text-[17px] text-center text-nowrap tracking-[0.4px]">{text}</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['RotondaC:Bold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[0.4px]">Темная</p>
    </div>
  );
}

function Frame4() {
  return (
    <Wrapper additionalClassNames="bg-[#f3eadf]">
      <Frame1 />
    </Wrapper>
  );
}

function Frame5() {
  return (
    <Wrapper>
      <Text text="Светлая" />
    </Wrapper>
  );
}

function Frame6() {
  return (
    <Wrapper>
      <Text text="Авто" />
    </Wrapper>
  );
}

function Frame9() {
  return (
    <div className="bg-[#1a1a1a] h-[48px] relative rounded-[28px] shrink-0 w-full">
      <div className="content-stretch flex gap-[2px] items-start p-[4px] relative size-full">
        <Frame4 />
        <Frame5 />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Wrapper1 text="О приложении" />
      <Wrapper1 text="Написать нам" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] text-center text-nowrap tracking-[0.4px]">Все данные хранятся только на твоём устройстве</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame9 />
      <Frame10 />
      <Frame7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#f3eadf] text-[34px] text-center tracking-[0.4px] w-full">Настройки</p>
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

function Eye() {
  return (
    <div className="absolute left-[6.47px] size-[5.236px] top-[6.76px]" data-name="eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.23636 5.23636">
        <g id="eye">
          <circle cx="2.61813" cy="2.61815" fill="var(--fill-0, black)" id="Ellipse 13" r="1.38182" />
        </g>
      </svg>
    </div>
  );
}

function Eye1() {
  return (
    <div className="absolute left-[12.44px] size-[5.236px] top-[6.76px]" data-name="eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.23636 5.23636">
        <g id="eye">
          <circle cx="2.61814" cy="2.61815" fill="var(--fill-0, black)" id="Ellipse 13" r="1.38182" />
        </g>
      </svg>
    </div>
  );
}

function Eyes() {
  return (
    <div className="absolute contents left-[6.47px] top-[6.76px]" data-name="eyes">
      <Eye />
      <Eye1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute left-0 size-[24px] top-0">
        <div className="absolute inset-[1.43%_3.51%_9.55%_3.51%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3148 21.3648">
            <path d={svgPaths.p19a91100} fill="var(--fill-0, white)" fillOpacity="0.2" id="Polygon 1" />
          </svg>
        </div>
      </div>
      <Eyes />
      <div className="absolute left-[7.78px] size-[8.509px] top-[8.36px]">
        <div className="absolute bottom-0 left-[0.66%] right-[0.66%] top-1/2" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.39689 4.25455">
            <path d={svgPaths.p3f64be00} fill="var(--fill-0, black)" id="Ellipse 15" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon 28">
      <Frame8 />
    </div>
  );
}

function Tab() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="tab">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[8px] py-[10px] relative size-full">
          <Icon />
          <TitleText text="Сегодня" />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon 28">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9996 27.9996">
        <g id="icon 28">
          <path d={svgPaths.p2a62a640} fill="var(--fill-0, white)" fillOpacity="0.4" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Tab1() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="tab">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[8px] py-[10px] relative size-full">
          <Icon1 />
          <TitleText text="История" />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon 28">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9996 27.9996">
        <g id="icon 28">
          <path d={svgPaths.p17242c00} fill="var(--fill-0, black)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="title">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap">Настройки</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="basis-0 bg-[#f3eadf] grow h-[60px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="tab">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[8px] py-[10px] relative size-full">
          <Icon2 />
          <Title />
        </div>
      </div>
    </div>
  );
}

function NavbarBottom() {
  return (
    <div className="basis-0 bg-[#1a1a1a] grow min-h-px min-w-px relative rounded-[28px] shrink-0 w-full" data-name="navbar.bottom">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative size-full">
          <Tab />
          <Tab1 />
          <Tab2 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-0 relative size-full">
          <NavbarBottom />
        </div>
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

function Tabbar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[114px] items-center left-0 top-[698px] w-[375px]" data-name="tabbar">
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[140px] left-1/2 to-black translate-x-[-50%] w-[375px]" />
      <Container />
      <BarsHomeIndicator />
    </div>
  );
}

export default function Settings() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="Settings">
      <BarsStatusBar />
      <MainContainer />
      <Tabbar />
    </div>
  );
}