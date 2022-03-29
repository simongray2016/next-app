import { Button, ButtonGroup } from "@mui/material";
import { Fragment, useState } from "react";
import InputLabel from "./input-label";

export interface SwitchSelectProps {
  className: string;
  label: string;
  leftButton?: {
    text: string;
    value: any;
  };
  rightButton?: {
    text: string;
    value: any;
  };
  required: boolean;
  value?: any;
  onChange: (value: any) => void;
}

function SwitchSelect({
  className = "",
  label = "",
  leftButton = { text: "Yes", value: true },
  rightButton = { text: "No", value: false },
  required,
  value = null,
  onChange,
}: SwitchSelectProps) {
  const activeClass = (buttonValue: any) =>
    value === buttonValue
      ? "bg-primary text-white font-bold"
      : "bg-white text-primary-black";

  return (
    <div className={className}>
      <InputLabel label={label} required={required}></InputLabel>
      <div className="mt-3 w-full border border-[#9D9D9D] rounded-button flex gap-[1px] bg-[#9D9D9D] overflow-hidden">
        <button
          className={`${activeClass(
            leftButton.value
          )} w-1/2 text-body-1 p-2 leading-7`}
          onClick={() => onChange(leftButton.value)}
        >
          {leftButton.text}
        </button>
        <button
          className={`${activeClass(
            rightButton.value
          )} w-1/2 text-body-1 p-2 leading-7`}
          onClick={() => onChange(rightButton.value)}
        >
          {rightButton.text}
        </button>
      </div>
    </div>
  );
}

export default SwitchSelect;
