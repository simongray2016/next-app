import { Button, ButtonGroup } from "@mui/material";
import { Fragment, useState } from "react";
import InputLabel from "./input-label";

export interface SwitchSelectProps {
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
}

function SwitchSelect({
  label = "",
  leftButton = { text: "Yes", value: true },
  rightButton = { text: "No", value: false },
  required,
}: SwitchSelectProps) {
  const [value, setValue] = useState(null);

  const activeClass = (buttonValue: any) =>
    value === buttonValue
      ? "bg-primary text-white"
      : "bg-white text-primary-black";

  return (
    <Fragment>
      <InputLabel label={label} required={required}></InputLabel>
      <div className="mt-3 w-full border border-[#9D9D9D] rounded-button flex gap-[1px] bg-[#9D9D9D] overflow-hidden">
        <button
          className={`${activeClass(leftButton.value)} w-1/2 text-body-1 p-2`}
          onClick={() => setValue(leftButton.value)}
        >
          {leftButton.text}
        </button>
        <button
          className={`${activeClass(rightButton.value)} w-1/2 text-body-1 p-2`}
          onClick={() => setValue(rightButton.value)}
        >
          {rightButton.text}
        </button>
      </div>
    </Fragment>
  );
}

export default SwitchSelect;
