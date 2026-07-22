import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <NavLinks />
        <SocialLinks />
      </div>
    </nav>
  );
}

export default Navbar;