import Logo from "../logo";
import MenuIconButton from "../buttons/menu-icon-button";

function Header({
  title = "",
  onOpenMenu,
}: {
  title?: string;
  onOpenMenu?: any;
}) {
  return (
    <div className="w-full bg-primary">
      <div className=" w-full bg-primary sticky top-0 left-0 h-16 flex items-center gap-5 px-[10px]">
        <MenuIconButton onClick={onOpenMenu}></MenuIconButton>
        <Logo></Logo>
      </div>
      <div className="mt-16 px-4 py-10 text-white">
        <div className="text-body-2 ">{title ?? "Applicant Form"}</div>
        <h2 className="uppercase text-white">PRIVATE PROPERTY LOAN</h2>
      </div>
    </div>
  );
}

export default Header;
