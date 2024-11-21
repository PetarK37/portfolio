import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <div>
      {/* Invisible Checkbox */}
      <input
        type="checkbox"
        id="toggle"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
      />
      {/* Styled Label */}
      <label
        htmlFor="toggle"
        className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-primary peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-primary
      ">
        <span className="sr-only">Enable</span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
