"use client";
import Link from "next/link";
import { useState } from "react";

function Navlink({ navLink }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <li>
      <Link
        href={navLink.route}
        className="block relative py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        onMouseEnter={() => {
          if (navLink.subMenu?.length > 0) setShowDropdown(true);
        }}
        onMouseLeave={() => setShowDropdown(false)}
      >
        {navLink.label} 

        {navLink.subMenu?.length > 0 ? (
          <div
            className={`${
              showDropdown ? "block" : "hidden"
            } absolute top-6 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
              {navLink.subMenu.map((menu, menuIndex) => (
                <li key={menuIndex}>
                  <Link
                    href={`${navLink.route}/${menu.route}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Link>
    </li>
  );
}

export default Navlink;
