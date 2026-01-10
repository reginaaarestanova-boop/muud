import { useState } from "react";

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      emoji: "📝",
      title: "Добро пожаловать",
      description: "Это ваш личный дневник настроения. Записывайте свои мысли и отслеживайте эмоции каждый день.",
    },
    {
      emoji: "😊",
      title: "Выбирайте настроение",
      description: "Каждый день выбирайте свое настроение из шести вариантов. Это поможет отслеживать эмоциональное состояние.",
    },
    {
      emoji: "😴",
      title: "Отслеживайте сон",
      description: "Укажите, сколько часов вы спали. Это поможет понять связь между сном и настроением.",
    },
    {
      emoji: "📖",
      title: "Пишите о своем дне",
      description: "Делитесь мыслями и событиями дня. Ваши записи останутся только у вас в браузере.",
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[430px] flex flex-col items-center">
        {/* Emoji */}
        <div className="text-[80px] mb-8">{slide.emoji}</div>

        {/* Title */}
        <h1 
          className="text-[32px] font-normal text-center mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-main)' }}
        >
          {slide.title}
        </h1>

        {/* Description */}
        <p 
          className="text-[17px] font-normal text-center text-muted-foreground mb-12 px-4"
          style={{ fontFamily: 'var(--font-main)' }}
        >
          {slide.description}
        </p>

        {/* Dots Indicator */}
        <div className="flex gap-2 mb-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor: index === currentSlide ? '#F3EADF' : 'rgba(243, 234, 223, 0.3)',
              }}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={handleNext}
            className="w-full h-[52px] rounded-[26px] text-[17px] font-normal text-white transition-opacity"
            style={{
              backgroundColor: '#F3EADF',
              fontFamily: 'var(--font-main)',
              color: '#000',
            }}
          >
            {currentSlide < slides.length - 1 ? 'Далее' : 'Начать'}
          </button>

          {currentSlide < slides.length - 1 && (
            <button
              onClick={handleSkip}
              className="w-full h-[52px] text-[17px] font-normal text-muted-foreground transition-opacity"
              style={{
                fontFamily: 'var(--font-main)',
              }}
            >
              Пропустить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}