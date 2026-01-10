import { useState } from "react";
import { About } from "./About";

type Theme = "dark" | "light" | "auto";

interface SettingsProps {
  onShowAbout?: (show: boolean) => void;
  onThemeChange?: (theme: Theme) => void;
  currentTheme?: Theme;
}

export function Settings({ onShowAbout, onThemeChange, currentTheme = "dark" }: SettingsProps) {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(currentTheme);
  const [showAbout, setShowAbout] = useState(false);

  const handleThemeChange = (theme: Theme) => {
    setSelectedTheme(theme);
    if (onThemeChange) {
      onThemeChange(theme);
    }
  };

  // If About screen is shown, render it instead
  if (showAbout) {
    return <About onBack={() => {
      setShowAbout(false);
      if (onShowAbout) onShowAbout(false);
    }} />;
  }

  const handleShowAbout = () => {
    setShowAbout(true);
    if (onShowAbout) onShowAbout(true);
  };

  return (
    <div className="flex flex-col pt-8 pb-24 px-4 gap-4 w-full">
      {/* Title */}
      <h1 className="text-3xl text-center mb-4" style={{ fontFamily: 'var(--font-main)' }}>Настройки</h1>

      {/* Theme Selector */}
      <div className="bg-card rounded-3xl p-1 flex gap-0.5 w-full">
        <button
          onClick={() => handleThemeChange("dark")}
          className={`flex-1 px-5 py-3 rounded-3xl transition-all ${
            selectedTheme === "dark"
              ? "bg-secondary text-secondary-foreground"
              : "text-card-foreground"
          }`}
          style={{ fontFamily: 'var(--font-main)', fontWeight: selectedTheme === "dark" ? 700 : 400 }}
        >
          Темная
        </button>
        <button
          onClick={() => handleThemeChange("light")}
          className={`flex-1 px-5 py-3 rounded-3xl transition-all ${
            selectedTheme === "light"
              ? "bg-secondary text-secondary-foreground"
              : "text-card-foreground"
          }`}
          style={{ fontFamily: 'var(--font-main)', fontWeight: selectedTheme === "light" ? 700 : 400 }}
        >
          Светлая
        </button>
        <button
          onClick={() => handleThemeChange("auto")}
          className={`flex-1 px-5 py-3 rounded-3xl transition-all ${
            selectedTheme === "auto"
              ? "bg-secondary text-secondary-foreground"
              : "text-card-foreground"
          }`}
          style={{ fontFamily: 'var(--font-main)', fontWeight: selectedTheme === "auto" ? 700 : 400 }}
        >
          Авто
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-0.5">
        <button 
          onClick={handleShowAbout}
          className="bg-card rounded-3xl px-5 py-4 text-left text-card-foreground" 
          style={{ fontFamily: 'var(--font-main)' }}
        >
          О приложении
        </button>
        <a 
          href="https://t.me/re_ginni" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-card rounded-3xl px-5 py-4 text-left text-card-foreground block" 
          style={{ fontFamily: 'var(--font-main)' }}
        >
          Написать нам
        </a>
      </div>

      {/* Privacy Notice */}
      <div className="mt-4">
        <p className="text-sm text-muted-foreground text-center" style={{ fontFamily: 'var(--font-main)' }}>
          Все данные хранятся только на твоём устройстве
        </p>
      </div>
    </div>
  );
}