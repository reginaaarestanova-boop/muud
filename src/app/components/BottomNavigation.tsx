import svgPaths from "../../imports/svg-28dnj4ouxb";
import clsx from "clsx";

interface BottomNavigationProps {
  activeTab: "today" | "history" | "settings";
  onTabChange: (tab: "today" | "history" | "settings") => void;
}

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
  onClick?: () => void;
};

function Tab3({ children, additionalClassNames = "", onClick }: React.PropsWithChildren<Tab3Props>) {
  return (
    <button
      onClick={onClick}
      className={clsx("basis-0 grow h-[60px] min-h-px min-w-px relative rounded-[24px] shrink-0 pointer-events-auto", additionalClassNames)}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center justify-center px-[8px] py-[10px] relative size-full">{children}</div>
      </div>
    </button>
  );
}

type Eye2Props = {
  additionalClassNames?: string;
  fill?: string;
};

function Eye2({ children, additionalClassNames = "", fill }: React.PropsWithChildren<Eye2Props>) {
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
  isActive?: boolean;
};

function TitleText({ text, isActive = false }: TitleTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p
        className={clsx(
          "leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap",
          isActive ? "text-black" : "text-[rgba(255,255,255,0.4)] light:text-[rgba(0,0,0,0.4)]"
        )}
        style={{ fontFamily: 'var(--font-main)', fontWeight: 400 }}
      >
        {text}
      </p>
    </div>
  );
}

function Eye({ fill = "#F3EADF", fillLight = "#fff" }: { fill?: string; fillLight?: string }) {
  return (
    <>
      <Eye2 additionalClassNames="left-[6.47px] light:hidden">
        <circle cx="2.61813" cy="2.61815" fill={fill} id="Ellipse 13" r="1.38182" />
      </Eye2>
      <Eye2 additionalClassNames="left-[6.47px] hidden light:block">
        <circle cx="2.61813" cy="2.61815" fill={fillLight} id="Ellipse 13 Light" r="1.38182" />
      </Eye2>
    </>
  );
}

function Eye1({ fill = "#F3EADF", fillLight = "#fff" }: { fill?: string; fillLight?: string }) {
  return (
    <>
      <Eye2 additionalClassNames="left-[12.44px] light:hidden">
        <circle cx="2.61814" cy="2.61815" fill={fill} id="Ellipse 13" r="1.38182" />
      </Eye2>
      <Eye2 additionalClassNames="left-[12.44px] hidden light:block">
        <circle cx="2.61814" cy="2.61815" fill={fillLight} id="Ellipse 13 Light" r="1.38182" />
      </Eye2>
    </>
  );
}

function Eyes({ fill = "#F3EADF", fillLight = "#fff" }: { fill?: string; fillLight?: string }) {
  return (
    <div className="absolute contents left-[6.47px] top-[6.76px]" data-name="eyes">
      <Eye fill={fill} fillLight={fillLight} />
      <Eye1 fill={fill} fillLight={fillLight} />
    </div>
  );
}

function Frame({ isActive = false }: { isActive?: boolean }) {
  const bodyFillDark = isActive ? "#000" : "#fff";
  const bodyFillLight = isActive ? "#000" : "#000";
  const eyesFillDark = isActive ? "#F3EADF" : "#000";
  const eyesFillLight = isActive ? "#F3EADF" : "#fff";
  const mouthFillDark = isActive ? "#F3EADF" : "#000";
  const mouthFillLight = isActive ? "#F3EADF" : "#fff";

  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute left-0 size-[24px] top-0">
        <div className="absolute inset-[1.43%_3.51%_9.55%_3.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3148 21.3648">
            <path
              d={svgPaths.p19a91100}
              fill={bodyFillDark}
              className="light:hidden"
              id="Polygon 1"
            />
            <path
              d={svgPaths.p19a91100}
              fill={bodyFillLight}
              className="hidden light:block"
              id="Polygon 1 Light"
            />
          </svg>
        </div>
      </div>
      <Eyes fill={eyesFillDark} fillLight={eyesFillLight} />
      <div className="absolute left-[7.78px] size-[8.509px] top-[8.36px]">
        <div className="absolute bottom-0 left-[0.66%] right-[0.66%] top-1/2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.39689 4.25455">
            <path d={svgPaths.p3f64be00} fill={mouthFillDark} className="light:hidden" id="Ellipse 15" />
            <path d={svgPaths.p3f64be00} fill={mouthFillLight} className="hidden light:block" id="Ellipse 15 Light" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="icon 28">
      <Frame isActive={isActive} />
    </div>
  );
}

function TodayTab({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <Tab3 onClick={onClick} additionalClassNames={isActive ? "bg-[#f3eadf]" : ""}>
      <Icon1 isActive={isActive} />
      <TitleText text="Сегодня" isActive={isActive} />
    </Tab3>
  );
}

function Icon2({ isActive = false }: { isActive?: boolean }) {
  return (
    <Icon>
      <path
        d={svgPaths.p1c5d50c0}
        className={isActive ? "fill-black" : "fill-white fill-opacity-40 light:fill-black light:fill-opacity-40"}
        id="Union"
      />
    </Icon>
  );
}

function HistoryTab({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <Tab3 onClick={onClick} additionalClassNames={isActive ? "bg-[#f3eadf]" : ""}>
      <Icon2 isActive={isActive} />
      <TitleText text="История" isActive={isActive} />
    </Tab3>
  );
}

function Icon3({ isActive = false }: { isActive?: boolean }) {
  return (
    <Icon>
      <path
        d={svgPaths.p17242c00}
        className={isActive ? "fill-black" : "fill-white fill-opacity-40 light:fill-black light:fill-opacity-40"}
        id="Subtract"
      />
    </Icon>
  );
}

function SettingsTab({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <Tab3 onClick={onClick} additionalClassNames={isActive ? "bg-[#f3eadf]" : ""}>
      <Icon3 isActive={isActive} />
      <TitleText text="Настройки" isActive={isActive} />
    </Tab3>
  );
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-background pointer-events-none" />
      <div className="w-full max-w-[375px] mx-auto px-[16px] pb-[16px] relative">
        <div className="basis-0 bg-card grow min-h-px min-w-px relative rounded-[28px] shrink-0 w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative size-full">
              <TodayTab isActive={activeTab === "today"} onClick={() => onTabChange("today")} />
              <HistoryTab isActive={activeTab === "history"} onClick={() => onTabChange("history")} />
              <SettingsTab isActive={activeTab === "settings"} onClick={() => onTabChange("settings")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}