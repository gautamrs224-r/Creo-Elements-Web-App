import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-2 transition-colors ${
    isActive
      ? "font-semibold text-black"
      : "text-gray-700 hover:text-black"
  }`;

function NavItem({ item }) {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="group relative">
      <NavLink to={item.path} className={navLinkClass}>
        {item.label}

        {hasChildren && (
          <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
        )}
      </NavLink>

      {hasChildren && (
        <DropdownMenu items={item.children} />
      )}
    </li>
  );
}

export default NavItem;