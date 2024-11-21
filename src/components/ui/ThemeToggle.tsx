import ToggleSwitch from "../common/ToggleSwitch";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="flex align-middle justify-center gap-1 font-bold"
      aria-label="Theme toggle switch"
    >
      <span className="sr-only">Theme toggle switch</span>
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="gray"
          className="size-6 fill-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="yellow-500"
          className="size-6 fill-yellow-500"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      )}
      <ToggleSwitch checked={theme === "dark"} onChange={toggleTheme} />
    </div>
  );
}

export default ThemeToggle;
