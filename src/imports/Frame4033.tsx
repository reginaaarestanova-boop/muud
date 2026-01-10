type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center justify-center px-[15px] py-[7px] relative rounded-[28px] shrink-0">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[#f3eadf] text-[13px] text-center tracking-[0.4px] w-full">{text}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f3eadf] content-stretch flex flex-col items-center justify-center px-[15px] py-[7px] relative rounded-[28px] shrink-0">
      <p className="font-['RotondaC:Regular',sans-serif] leading-[17px] not-italic relative shrink-0 text-[13px] text-black text-center tracking-[0.4px] w-full">10 Янв 2026</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-0 py-[16px] relative size-full">
      <Text text="08 Янв 2026" />
      <Text text="09 Янв 2026" />
      <Frame2 />
      <Text text="11 Янв 2026" />
      <Text text="12 Янв 2026" />
    </div>
  );
}