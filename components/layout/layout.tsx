import { Fragment, useState } from "react";
import Header from "./header";
import SideMenu from "./side-menu";

function Layout({ children, thinHeader = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => (event: any) => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fragment>
      <Header
        thinHeader={thinHeader}
        onOpenMenu={() => setIsMenuOpen(true)}
      ></Header>
      <SideMenu
        open={isMenuOpen}
        onOpen={() => null}
        onClose={toggleMenu()}
      ></SideMenu>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">{children}</div>
      </div>
    </Fragment>
  );
}

export default Layout;
