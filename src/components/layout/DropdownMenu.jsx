import { NavLink } from "react-router-dom";

function DropdownMenu({ items }) {
  return (
    <div
      className="
        invisible
        absolute
        left-1/2
        top-full
        z-50
        mt-2
        w-80
        -translate-x-1/2
        translate-y-2
        rounded-xl
        border
        border-gray-200
        bg-white
        p-2
        opacity-0
        shadow-xl
        transition-all
        duration-200
        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className="
                block
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                text-gray-700
                transition-colors
                duration-200
                hover:bg-gray-100
                hover:text-black
              "
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropdownMenu;