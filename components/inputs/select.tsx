import { MenuItem, Select } from "@mui/material";
import InputLabel from "./input-label";

export interface AppSelecOption {
  value: any;
  viewValue: string;
}

export interface AppSelectProps {
  className?: string;
  label?: string;
  value?: any;
  onChange: (value: any) => void;
  placeholder?: string;
  required?: boolean;
  option: AppSelecOption[];
}

function AppSelect({
  className,
  placeholder,
  label,
  required = false,
  option,
  value,
  onChange,
  ...props
}: AppSelectProps) {
  return (
    <div className={className}>
      <InputLabel label={label} required={required}></InputLabel>
      <Select
        className="w-full mt-3"
        variant="standard"
        value={value}
        label="Age"
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      >
        {option.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.viewValue}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default AppSelect;
