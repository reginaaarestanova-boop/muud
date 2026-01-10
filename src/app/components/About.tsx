import { ArrowLeft } from "lucide-react";

interface AboutProps {
  onBack: () => void;
}

export function About({ onBack }: AboutProps) {
  return (
    <div className="flex flex-col h-full w-full pt-8 pb-24 px-4">
      {/* Back Button and Title */}
      <div className="flex items-center justify-between px-4 pt-8 pb-4">
        <button 
          onClick={onBack}
          className="shrink-0 w-7 h-7 flex items-center justify-center z-10"
        >
          <ArrowLeft className="w-7 h-7 text-foreground" />
        </button>
        <h1 
          className="text-[24px] leading-[28px] text-center flex-1" 
          style={{ fontFamily: 'var(--font-main)' }}
        >
          О приложении
        </h1>
        {/* Spacer for centering */}
        <div className="w-7 h-7 shrink-0" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[2px] w-full">
        {/* Main Description Card */}
        <div className="bg-card rounded-[28px] px-5 py-4">
          <p 
            className="text-[15px] leading-[20px]"
            style={{ fontFamily: 'var(--font-main)' }}
          >
            Личный дневник — это твое личное пространство для записи
            мыслей, переживаний и событий каждого дня. Создавай
            воспоминания, которые останутся с тобой навсегда.
          </p>
        </div>

        {/* Privacy Card */}
        <div className="bg-card rounded-[28px] px-5 py-4">
          <p 
            className="text-[15px] leading-[20px]"
            style={{ fontFamily: 'var(--font-main)' }}
          >
            <strong>Конфиденциальность:</strong> Все твои записи
            хранятся только на твоем устройстве. Мы не собираем и не
            передаем данные третьим лицам.
          </p>
        </div>

        {/* Support Notice Card */}
        <div className="bg-card rounded-[28px] px-5 py-4">
          <p 
            className="text-[15px] leading-[20px]"
            style={{ fontFamily: 'var(--font-main)' }}
          >
            Если у тебя есть идеи или предложения, мы всегда рады
            услышать твое мнение. Напиши нам!
          </p>
        </div>

        {/* Freedom Card */}
        <div className="bg-card rounded-[28px] px-5 py-4">
          <p 
            className="text-[15px] leading-[20px]"
            style={{ fontFamily: 'var(--font-main)' }}
          >
            Будь собой. Пиши так, как чувствуешь. Это твой дневник,
            твоя история.
          </p>
        </div>
      </div>
    </div>
  );
}