import React from "react";
import { NavLink } from "react-router-dom";
import CATEGORY_MAP from "../../constants/categories";

function CategoryNav() {
  return (
    <nav className="hidden md:block category-nav bg-primary py-4 shadow-sm border-b border-gray-200">
      <ul className="flex justify-center space-x-8">
        {Object.entries(CATEGORY_MAP).map(([urlCategory, displayCategory]) => (
          <li key={urlCategory}>
            <NavLink
              to={`/store/${urlCategory}`}
              className="text-white  font-medium text-sm"
            >
              {displayCategory.charAt(0).toUpperCase() +
                displayCategory.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default React.memo(CategoryNav);
