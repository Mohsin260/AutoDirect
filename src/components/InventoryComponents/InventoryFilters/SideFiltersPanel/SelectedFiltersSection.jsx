import React from "react";
import { removeFilter, removeModel, removeTrim } from "@/redux/slices/filtersPanelSlice";
import { featuresFilters } from "@/components/InventoryComponents/InventorySchema";
import { useDispatch, useSelector } from "react-redux";

const SelectedFiltersSection = () => {
    const dispatch = useDispatch();
    const { selectedFilters, selectedModels } = useSelector((state) => state.filters);

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
  return (
    <div className="selected-filters">
      {/* Selected Filters */}
      {/* // Inside the JSX of Selected Filters section */}
      {selectedFilters.map((filter, index) => {
        // Check if the filter is a Make
        const isMake = Object.keys(
          featuresFilters.filters.make.counts
        ).includes(filter);
        // Check if the filter is a Model
        const makeWithModel = Object.entries(selectedModels).find(
          ([make, models]) => Object.keys(models).includes(filter)
        );

        return (
          <div
            key={index}
            className="d-inline-block badge-default px-2 py-0 me-2 rounded border my-1 cursor-pointer"
            onClick={() => {
              if (isMake) {
                // Call handleMakeChange to remove the make and all its children
                handleMakeChange(
                  filter,
                  featuresFilters.filters.modelgroups[filter]
                );
              } else if (makeWithModel) {
                // If it's a model, call handleModelChange to remove the model and its trims
                handleModelChange(
                  makeWithModel[0], // Pass the make
                  filter, // The model
                  featuresFilters.filters.trimgroups[
                    `${makeWithModel[0]} ${filter}`
                  ]
                );
              } else {
                // If it's a trim, just remove the trim
                dispatch(removeFilter(filter));
              }
            }}
          >
            <span className="small">{filter}</span>
            <span className="d-inline-block faIcon fa-solid fa-circle-xmark ms-2 float-end text-primary">
              <svg height={15} width={15} fill="inherit">
                <use xlinkHref="/images/icons/svgs/solid.svg#circle-xmark" />
              </svg>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedFiltersSection;
