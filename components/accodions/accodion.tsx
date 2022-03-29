import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { SyntheticEvent, useState } from "react";

export interface AppAccordionProps {
  children: React.ReactNode;
  className?: string;
  label: string;
  expanded?: boolean;
  valid?: boolean | null;
  onChange?: (event: SyntheticEvent<Element, Event>, expanded: boolean) => void;
  [key: string]: any;
}

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  "&.Mui-expanded": {
    margin: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: "#F3F4F9",
  borderRadius: "6px",
  height: "54px",
  "&.Mui-expanded": {
    minHeight: "0",
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: "0",
}));

const AppAccordion = ({
  children,
  className,
  expanded = false,
  label,
  onChange,
  valid = null,
  ...props
}: AppAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div className={className}>
      <StyledAccordion expanded={isExpanded} onChange={onChange}>
        <StyledAccordionSummary
          className={`border-b-4 border-solid  ${
            valid
              ? "border-b-primary-green"
              : valid === false
              ? "border-b-primary"
              : "border-b-transparent"
          }`}
          expandIcon={
            <ExpandMore
              className={valid ? "fill-primary-green" : "fill-primary"}
            />
          }
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Typography className="text-[18px] font-bold text-primary-black">
            {label}
          </Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>{children}</StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
};

export default AppAccordion;
