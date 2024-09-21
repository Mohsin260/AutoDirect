"use client";

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/redux/slices/sortFilterOptionsSlice";

const SortByFilterOptions = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filterType) => {
    dispatch(setFilter(filterType));
  };

  return (
    <div className="border-bottom border-top bg-white d-none d-xl-block mb-4">
      <div className="container">
        <div className="py-3 row">
          <div className="col-sm-9">
            <div className="d-inline-block dropdown">
              <button
                type="button"
                id="recents"
                aria-expanded="false"
                className="text-decoration-none pl-0 dropdown-toggle btn btn-link"
              >
                <span className="d-inline-block faIcon fa-regular fa-clock me-2 text-primary">
                  <svg height={16} width={16} fill="inherit">
                    <use xlinkHref="/images/icons/svgs/regular.svg#clock" />
                  </svg>
                </span>
                Recently Viewed
              </button>
              {/* <div x-placement="bottom-start" aria-labelledby="recents" className="py-0 dropdown-menu show" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-start" style={{position: 'absolute', inset: '0px auto auto 0px', transform: 'translate(0px, 43px)'}}><a data-rr-ui-dropdown-item className="border-bottom dropdown-item" role="button" tabIndex={0} href="#"><em className="text-muted">No vehicles viewed yet.</em></a></div> */}
            </div>
            <div className="d-inline-block me-2 dropdown">
              <button
                type="button"
                id="favorites"
                aria-expanded="false"
                className="text-decoration-none pl-0 d-block dropdown-toggle btn btn-link"
              >
                <span className="d-inline-block faIcon fa-regular fa-heart me-2 text-primary">
                  <svg height={16} width={16} fill="inherit">
                    <use xlinkHref="/images/icons/svgs/regular.svg#heart" />
                  </svg>
                </span>
                Favorites
              </button>
              {/* <div x-placement="bottom-start" aria-labelledby="favorites" className="py-0 dropdown-menu show" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-start" style={{position: 'absolute', inset: '0px auto auto 0px', transform: 'translate(0px, 43px)'}}><a data-rr-ui-dropdown-item className="border-bottom dropdown-item" role="button" tabIndex={0} href="#"><em className="text-muted">No vehicles favorited.</em></a></div> */}
            </div>
          </div>
          <div className="text-end col-sm-3">
            <select
              name="sortby"
              className="custom-select form-select"
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="weight:desc">Best Match</option>
              <option value="price:desc">Price: Lowest</option>
              <option value="price:asc">Price: Highest</option>
              <option value="inventorydate:desc">Newest Arrivals</option>
              <option value="mileage:asc">Mileage: Low to High</option>
              <option value="mileage:desc">Mileage: High to Low</option>
              <option value="year:desc">Year: Newest</option>
              <option value="year:asc">Year: Oldest</option>
              <option value="make:asc">Make: Z-A</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortByFilterOptions;
