import clsx from "clsx";
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("absolute aspect-[64/64] bottom-[20.82%] top-[22.24%] translate-x-[-50%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7422 11.7422">
        <circle cx="5.87112" cy="5.87112" fill="var(--fill-0, black)" id="Ellipse 13" r="5.87112" />
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 20.6205 20.6205" className="block size-full">
      <circle cx="10.3103" cy="10.3103" fill="var(--fill-0, #F3EADF)" id="Ellipse 12" r="10.3103" />
    </svg>
  );
}

function Eye() {
  return (
    <div className="absolute inset-[17.18%_51.31%_65.63%_31.5%] overflow-clip rounded-[2863.68px]" data-name="eye">
      <Helper />
      <Helper1 additionalClassNames="left-[calc(50%+3.72px)]" />
    </div>
  );
}

function Eye1() {
  return (
    <div className="absolute inset-[17.18%_31.74%_65.63%_51.07%] overflow-clip rounded-[2863.68px]" data-name="eye">
      <Helper />
      <Helper1 additionalClassNames="left-[calc(50%-2.01px)]" />
    </div>
  );
}

function Eyes() {
  return (
    <div className="absolute contents inset-[17.18%_31.74%_65.63%_31.5%]" data-name="eyes">
      <Eye />
      <Eye1 />
    </div>
  );
}

function Emotions() {
  return (
    <div className="relative shrink-0 size-[120px]" data-name="emotions">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        <circle cx="60" cy="60" fill="url(#paint0_linear_3_3879)" r="60" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_3879" x1="60" x2="60" y1="0" y2="120">
            <stop stopColor="#6DAD93" />
            <stop offset="1" stopColor="#B2E5D0" />
          </linearGradient>
        </defs>
      </svg>
      <Eyes />
      <div className="absolute bg-black inset-[36.76%_40.34%_58.47%_40.33%] rounded-[28639.3px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-0 relative shrink-0 w-[303px]">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f3eadf] text-[17px] text-center text-nowrap tracking-[0.4px]">Спокойный</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#333] relative rounded-[28px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[20px] relative w-full">
          <Emotions />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[122px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-0 pt-[2px] px-[20px] relative size-full">
          <p className="basis-0 font-['RotondaC:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#f3eadf] text-[15px] tracking-[0.4px]">Сегодняшний день прошел в спокойной атмосфере. Я наслаждался тишиной и умиротворением, проводя время на свежем воздухе и читая интересную книгу. Никаких забот и суеты, просто идеальный день для отдыха и размышлений.</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip pb-[16px] pt-0 px-0 relative rounded-[28px] size-full">
      <Frame3 />
      <Frame />
    </div>
  );
}