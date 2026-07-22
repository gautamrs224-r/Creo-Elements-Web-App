import navigation from "../../data/navigation";
import NavItem from "./NavItem";

function NavLinks() {
  return (
    <ul className="flex items-center gap-8">
      {navigation.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default NavLinks;
