import { JSXElementConstructor } from "react";
import { SwipeableDrawer, SwipeableDrawerProps } from "@mui/material";

function SideMenu(props: SwipeableDrawerProps) {
  return (
    <SwipeableDrawer {...props}>
      <div className="bg-white w-48 h-full">hello</div>
    </SwipeableDrawer>
  );
}

export default SideMenu;
