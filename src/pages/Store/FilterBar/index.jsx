import React, { useState, useCallback, useMemo } from 'react';
import { DropdownToggle, DropdownMenu } from './FilterMenu';
import Breadcrumb from '../../../components/Breadcrumb';
import CATEGORY_MAP from '../../../constants/categories';

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const categoryItems = useMemo(
    () =>
      Object.entries(CATEGORY_MAP).map(([urlCategory, displayCategory]) => ({
        url: `/store/${urlCategory}`,
        label:
          displayCategory.charAt(0).toUpperCase() + displayCategory.slice(1),
      })),
    []
  );

  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      {/* Breadcrumb Section */}
      <div className="hidden md:block">
        <Breadcrumb />
      </div>

      {/* Category and Order Section */}
      <div className="flex space-x-8 items-center">
        {/* Dropdown for Categories */}
        <nav className="relative">
          <DropdownToggle
            label="Categoría"
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
          />
          <DropdownMenu
            isOpen={isOpen}
            items={categoryItems}
            onClose={closeDropdown}
          />
        </nav>
      </div>
    </div>
  );
};

export default FilterBar;
