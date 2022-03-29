import { Button } from "@mui/material";

function GradientButton({ children, className = "", ...props }) {
  return (
    <Button
      className={
        "rounded-[10px] bg-gradient-primary text-white text-body-1 font-bold py-4 px-10 normal-case " +
        className
      }
      {...props}
    >
      {children}
    </Button>
  );
}

export default GradientButton;
