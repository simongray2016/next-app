import Logo from "../logo";
import MenuIconButton from "../buttons/menu-icon-button";

export interface HeaderProps {
  title?: string;
  onOpenMenu?: any;
  thinHeader?: boolean;
}

function Header({ title = "", onOpenMenu, thinHeader = false }: HeaderProps) {
  return (
    <div className="w-full bg-primary">
      <div
        className={
          " w-full bg-primary fixed top-0 left-0 z-50 h-16 flex items-center gap-5 px-[10px] " +
          (thinHeader ? "justify-center" : "")
        }
      >
        {!thinHeader && <MenuIconButton onClick={onOpenMenu}></MenuIconButton>}
        <Logo></Logo>
      </div>
      {!thinHeader && (
        <div className="mt-16 px-4 py-10 text-white">
          <div className="text-body-2 ">{title ?? "Applicant Form"}</div>
          <h2 className="uppercase text-white">PRIVATE PROPERTY LOAN</h2>
        </div>
      )}
    </div>
  );
}

export default Header;
