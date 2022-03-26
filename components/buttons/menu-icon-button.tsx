import { IconButton } from "@mui/material";
import IconMenu from "../icons/icon-menu";

function MenuIconButton({ onClick }) {
  return (
    <IconButton onClick={onClick} aria-label="menu">
      <IconMenu></IconMenu>
    </IconButton>
  );
}

export default MenuIconButton;
