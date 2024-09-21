"use client"

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBodyStyle,
  removeBodyStyle,
} from "@/redux/slices/filtersPanelSlice";
import { featuresFilters } from "@/components/InventoryComponents/InventorySchema";

const BodyStyleFilter = () => {
  const [isBodyStyleOpen, setIsBodyStyleOpen] = useState(false);

  const toggleDropdown = (setDropdownState) =>
    setDropdownState((prev) => !prev);

  const dispatch = useDispatch();
  const selectedBodyStyles = useSelector(
    (state) => state.filters.selectedBodyStyles
  );

  const handleBodyStyleChange = (bodyStyle) => {
    if (selectedBodyStyles.includes(bodyStyle)) {
      dispatch(removeBodyStyle(bodyStyle));
    } else {
      dispatch(addBodyStyle(bodyStyle));
    }
  };

  return (
    <div className="card-footer">
      {/* Body Style Dropdown */}
      <div
        className="cursor-pointer py-1 font-weight-bold"
        onClick={() => toggleDropdown(setIsBodyStyleOpen)}
      >
        Body Style
        <span className="d-inline-block faIcon fa-regular fa-angle-down text-primary float-end">
          <svg height={16} width={16} fill="inherit">
            <use
              xlinkHref={
                isBodyStyleOpen
                  ? "/images/icons/svgs/regular.svg#angle-right"
                  : "/images/icons/svgs/regular.svg#angle-down"
              }
            />
          </svg>
        </span>
      </div>

      <div>
        {isBodyStyleOpen && (
          <div style={{ overflowY: "scroll", maxHeight: 300 }}>
            {/* Render Body Style Options Here */}
            {Object.entries(featuresFilters.filters.body.counts).map(
              ([bodyStyle, count]) => (
                <div key={bodyStyle} className="mt-2 w-100 cursor-pointer">
                  <label
                    className="custom-control custom-checkbox"
                    htmlFor={`BodyStyle${bodyStyle}`}
                  >
                    <input
                      name="body[]"
                      type="checkbox"
                      id={`BodyStyle${bodyStyle}`}
                      className="custom-control-input"
                      checked={selectedBodyStyles.includes(bodyStyle)}
                      onChange={() => handleBodyStyleChange(bodyStyle)}
                    />
                    <span className="custom-control-label">
                      {`${bodyStyle} (${count})`}
                    </span>
                  </label>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyStyleFilter;
