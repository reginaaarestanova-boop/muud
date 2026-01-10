function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-center not-italic p-[16px] relative text-[#f3eadf] text-center w-full">
          <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[17px] tracking-[-0.408px] w-full">Вы удаляете запись</p>
          <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] relative shrink-0 text-[13px] tracking-[-0.078px] w-full">Эта запись будет удалена</p>
        </div>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="_Action">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[43px] py-[11px] relative size-full">
          <div className="flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffc90c] text-[17px] text-center text-nowrap tracking-[-0.408px]">
            <p className="leading-[22px]">Отменить</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Action1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="_Action">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[41px] py-[11px] relative size-full">
          <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffc90c] text-[17px] text-center text-nowrap tracking-[-0.408px]">
            <p className="leading-[22px]">Удалить</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[0.5px] h-[44px] items-start relative shrink-0 w-full" data-name="Actions">
      <Action />
      <div className="bg-[rgba(255,255,255,0.2)] h-full shrink-0 w-[0.5px]" data-name="Separator" />
      <Action1 />
    </div>
  );
}

function Alert() {
  return (
    <div className="backdrop-blur-[11px] backdrop-filter bg-[#1a1a1a] content-stretch flex flex-col items-start relative rounded-[14px] shrink-0 w-[270px]" data-name="Alert">
      <Content />
      <div className="bg-[rgba(60,60,67,0.36)] h-[0.5px] shrink-0 w-full" data-name="Separator" />
      <Actions />
    </div>
  );
}

function AlertTemplate() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col h-[812px] items-center justify-center left-0 p-[32px] top-0 w-[375px]" data-name="Alert Template">
      <Alert />
    </div>
  );
}

export default function Deletion() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="Deletion">
      <AlertTemplate />
    </div>
  );
}