import { Fragment, useState } from "react";
import Header from "./header";
import SideMenu from "./side-menu";

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => (event: any) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <Header onOpenMenu={() => setIsMenuOpen(true)}></Header>
      <SideMenu
        open={isMenuOpen}
        onOpen={null}
        onClose={toggleMenu()}
      ></SideMenu>
      {children}
    </Fragment>
  );
}

export default Layout;
