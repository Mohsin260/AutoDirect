"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFilter,
  removeFilter,
  addModel,
  removeModel,
  addTrim,
  removeTrim,
} from "@/redux/slices/filtersPanelSlice";
import { featuresFilters } from "@/components/InventoryComponents/InventorySchema";


const MakeAndModelFilters = () => {
  const dispatch = useDispatch();
  const { selectedFilters, selectedModels, selectedTrims, matches } =
    useSelector((state) => state.filters);

  // Dropdown visibility states
  const [isMakeModelOpen, setIsMakeModelOpen] = useState(true);

  // Toggle dropdowns
  const toggleDropdown = (setDropdownState) =>
    setDropdownState((prev) => !prev);

  // Handle Make checkbox change (including removing all child filters when a make is removed)
  const handleMakeChange = (make, models) => {
    if (selectedFilters.includes(make)) {
      // Remove make and its models and trims
      dispatch(removeFilter(make));
      Object.keys(models).forEach((model) => {
        dispatch(removeFilter(model));
        const trims = featuresFilters.filters.trimgroups[`${make} ${model}`];
        if (trims) {
          Object.keys(trims).forEach((trim) => {
            dispatch(removeFilter(trim));
          });
        }
        dispatch(removeTrim({ model }));
      });
      dispatch(removeModel({ make }));
    } else {
      // Add make and models
      dispatch(addFilter(make));
      dispatch(addModel({ make, models }));
    }
  };

  // Handle Model checkbox change
  const handleModelChange = (make, model, trims) => {
    if (selectedFilters.includes(model)) {
      // Remove model and its trims
      dispatch(removeFilter(model));
      if (trims) {
        Object.keys(trims).forEach((trim) => {
          dispatch(removeFilter(trim));
        });
      }
      dispatch(removeTrim({ model }));
    } else {
      // Add model and trims
      dispatch(addFilter(model));
      dispatch(addTrim({ model, trims }));
    }
  };

  // Handle Trim checkbox change
  const handleTrimChange = (model, trim) => {
    if (selectedFilters.includes(trim)) {
      dispatch(removeFilter(trim));
    } else {
      dispatch(addFilter(trim));
    }
  };

  return (
    <>
      {/* Make & Model Dropdown */}
      <div className="bg-lighter card-footer">
        <div
          className="cursor-pointer py-1 font-weight-bold"
          onClick={() => toggleDropdown(setIsMakeModelOpen)}
        >
          Make &amp; Model
          <span className="d-inline-block faIcon fa-regular fa-angle-down text-primary float-end">
            <svg height={16} width={16} fill="inherit">
              <use
                xlinkHref={
                  isMakeModelOpen
                    ? "/images/icons/svgs/regular.svg#angle-right"
                    : "/images/icons/svgs/regular.svg#angle-down"
                }
              />
            </svg>
          </span>
        </div>
        {isMakeModelOpen && (
          <div style={{ overflowY: "scroll", maxHeight: 300 }}>
            {Object.entries(featuresFilters.filters.make.counts).map(
              ([make, count]) => (
                <div key={make} className="mt-2 cursor-pointer">
                  <label className="flex items-center" htmlFor="Make">
                    <input
                      name="make[]"
                      type="checkbox"
                      className="h-5 w-5"
                      id={make}
                      checked={selectedFilters.includes(make)}
                      onChange={() =>
                        handleMakeChange(
                          make,
                          featuresFilters.filters.modelgroups[make]
                        )
                      }
                    />
                    <span className="ml-2">
                      {make} ({count})
                    </span>
                  </label>

                  {/* Display Models if Make is selected */}
                  {selectedModels[make] ? (
                    <div className="ml-4">
                      <label className="font-weight-bold">Model</label>
                      {Object.entries(selectedModels[make]).map(
                        ([model, count]) => (
                          <div key={model}>
                            <label className="flex items-center">
                              <input
                                name="model[]"
                                type="checkbox"
                                className="h-5 w-5"
                                checked={selectedFilters.includes(model)}
                                onChange={() =>
                                  handleModelChange(
                                    make,
                                    model,
                                    featuresFilters.filters.trimgroups[
                                      `${make} ${model}`
                                    ]
                                  )
                                }
                              />
                              <span className="ml-2">
                                {model} ({count})
                              </span>
                            </label>
                          </div>
                        )
                      )}
                    </div>
                  ) : null}
                </div>
              )
            )}
          </div>
        )}
      </div>
      <div>
        {/* Display Trims if Model Is Selected */}
        {Object.entries(selectedTrims).map(([model, trims]) => {
          const make = Object.keys(selectedModels).find((m) =>
            Object.keys(selectedModels[m]).includes(model)
          );
          return (
            <div key={model} className="bg-lighter card-footer">
              <label className="font-weight-bold">
                {make} {model} Trims
              </label>
              {Object.entries(trims).map(([trim, count]) => (
                <div key={trim}>
                  <label className="flex items-center">
                    <input
                      name="trim[]"
                      type="checkbox"
                      className="h-5 w-5"
                      checked={selectedFilters.includes(trim)}
                      onChange={() => handleTrimChange(model, trim)}
                    />
                    <span className="ml-2">
                      {trim} ({count})
                    </span>
                  </label>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MakeAndModelFilters;
