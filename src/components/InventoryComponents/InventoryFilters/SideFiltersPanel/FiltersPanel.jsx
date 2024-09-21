"use client";

import { useDispatch, useSelector } from "react-redux";
import BodyStyleFilter from "./BodyStyle";
import MakeAndModelFilters from "./Make&Model";

import { clearFilters } from "@/redux/slices/filtersPanelSlice";
import SelectedFiltersSection from "./SelectedFiltersSection";

const FiltersPanel = () => {
  const dispatch = useDispatch();
  const { selectedFilters, matches } = useSelector((state) => state.filters);

  // Clear all filters and reset dropdowns
  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="d-none d-xl-block col-xl-3">
      <div>
        {/* Matches and Clear Filters */}
        <div className="mb-5 mt-3 mt-md-0 notranslate card">
          <div className="pt-3 pb-2 bg-white card-header">
            <div className="card-title h6 font-weight-bold mb-2">
              {matches} matches
              {selectedFilters.length > 0 && (
                <a
                  title="Clear inventory filters"
                  className="float-end font-weight-normal cursor-pointer text-primary"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </a>
              )}
            </div>
            <SelectedFiltersSection />
          </div>
          <form className="pb-0 mt-sm-0">
            <MakeAndModelFilters />
            <BodyStyleFilter />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FiltersPanel;
