import React from "react";
import { FilterOptionType } from "../../types/types";

interface FilterButtonProps {
  setFilterOption: React.Dispatch<React.SetStateAction<FilterOptionType>>;
  filterOption: FilterOptionType;
}

const FilterButtons = ({
  setFilterOption,
  filterOption,
}: FilterButtonProps) => {
  return (
    <div className="filter-menu-container flex justify-start items-center gap-1">
      <button
        title="All"
        className={`bordered-btn  ${
          filterOption === "all"
            ? "active-btn-filter "
            : "non-active-btn-filter"
        }`}
        onClick={() => setFilterOption("all")}
      >
        All
      </button>
      <button
        title="Done"
        className={`bordered-btn  ${
          filterOption === "done"
            ? "active-btn-filter "
            : "non-active-btn-filter"
        }`}
        onClick={() => setFilterOption("done")}
      >
        Done
      </button>
      <button
        title="Undone"
        className={`bordered-btn  ${
          filterOption === "undone"
            ? "active-btn-filter "
            : "non-active-btn-filter"
        }`}
        onClick={() => setFilterOption("undone")}
      >
        Undone
      </button>
    </div>
  );
};

export default FilterButtons;
