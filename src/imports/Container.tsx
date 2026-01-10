import svgPaths from "./svg-ak92kwsoic";
import clsx from "clsx";

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[28px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9996 27.9996">
        <g id="icon 28">{children}</g>
      </svg>
    </div>
  );
}
type Tab3Props = {
  additionalClassNames?: string;
};

function Tab3({ children, additionalClassNames = "" }: React.PropsWithChildren<Tab3Props>) {
  return (
    <div className={clsx("basis-0 grow h-[60px] min-h-px min-w-px relative rounded-[24px] shrink-0", additionalClassNames)}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[8px] py-[10px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type Eye2Props = {
  additionalClassNames?: string;
};

function Eye2({ children, additionalClassNames = "" }: React.PropsWithChildren<Eye2Props>) {
  return (
    <div className={clsx("absolute size-[5.236px] top-[6.76px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.23636 5.23636">
        <g id="eye">{children}</g>
      </svg>
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

function Eye() {
  return (
    <Eye2 additionalClassNames="left-[6.47px]">
      <circle cx="2.61813" cy="2.61815" fill="var(--fill-0, black)" id="Ellipse 13" r="1.38182" />
    </Eye2>
  );
}

function Eye1() {
  return (
    <Eye2 additionalClassNames="left-[12.44px]">
      <circle cx="2.61814" cy="2.61815" fill="var(--fill-0, black)" id="Ellipse 13" r="1.38182" />
    </Eye2>
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

function Frame() {
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

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon 28">
      <Frame />
    </div>
  );
}

function Tab() {
  return (
    <Tab3>
      <Icon1 />
      <TitleText text="Сегодня" />
    </Tab3>
  );
}

function Icon2() {
  return (
    <Icon>
      <path d={svgPaths.p2a62a640} fill="var(--fill-0, white)" fillOpacity="0.4" id="Union" />
    </Icon>
  );
}

function Tab1() {
  return (
    <Tab3>
      <Icon2 />
      <TitleText text="История" />
    </Tab3>
  );
}

function Icon3() {
  return (
    <Icon>
      <path d={svgPaths.p17242c00} fill="var(--fill-0, black)" id="Subtract" />
    </Icon>
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
    <Tab3 additionalClassNames="bg-[#f3eadf]">
      <Icon3 />
      <Title />
    </Tab3>
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

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-0 relative size-full" data-name="container">
      <NavbarBottom />
    </div>
  );
}