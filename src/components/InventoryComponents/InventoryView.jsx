"use client";

import Image from "next/image";
import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

// InventoryView Component
const InventoryView = ({ itemsPerPage = 24 }) => {
  const [inventories, setInventories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data on component mount
  useEffect(() => {
    const fetchInventories = async () => {
      try {
        const response = await fetch('/api/inventories'); // Call the API route
        if (response.ok) {
          const data = await response.json(); // Parse the response as JSON
          setInventories(data); // Set the data in state
        } else {
          console.error('Failed to fetch inventories');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchInventories(); // Fetch the inventory data
  }, []); // Empty dependency array to ensure it runs only once

  // Fetch selected filters from Redux
  const selectedSort = useSelector((state) => state.sortFilterOptions.filter);
  const selectedFilters = useSelector((state) => state.filters.selectedFilters);
  const selectedModels = useSelector((state) => state.filters.selectedModels);
  const selectedTrims = useSelector((state) => state.filters.selectedTrims);
  const selectedBodyStyles = useSelector((state) => state.filters.selectedBodyStyles);

  let FilterModels = [];

  console.log("selectedModels 1", selectedModels);
  console.log("selectedModels.length", selectedModels.length);
  Object.entries(selectedModels).forEach(([make, modelArr]) => {
    Object.entries(modelArr).forEach(([model, modelCount]) => {
      console.log("model", model);
      FilterModels.push(model);
    });
  });

  const commonModels  = selectedFilters.filter((element) =>
    FilterModels.includes(element)
  );


  let FilterTrims = [];
  Object.entries(selectedTrims).forEach(([model, trimArr]) => {
    Object.entries(trimArr).forEach(([trim, trimCount]) => {
      FilterTrims.push(trim);
    });
  });

  const commonTrims = selectedFilters.filter((element) =>
    FilterTrims.includes(element)
  );


  console.log("selectedFilters", selectedFilters);
  console.log("selectedModels", selectedModels);
  console.log("selectedTrims", selectedTrims);
  console.log("FilterModels", FilterModels);
  console.log("FilterTrims", FilterTrims);
  console.log("commonModels ", commonModels);
  console.log("commonTrims ", commonTrims);
  console.log("selectedSort", selectedSort);

  // Filter and sort inventory
  const filterAndSortInventory = () => {
    const filteredInventory = inventories.filter((vehicle) => {
      const matchMake = () => {
        if (selectedFilters.length) {
          return selectedFilters.includes(vehicle.make);
        }
        return true;
      };
      const matchModel = () => {
        if (commonModels.length) {
          return commonModels.includes(vehicle.model);
        }
        return true;
      };
      const matchTrim = () => {
        if (commonTrims.length) {
          return commonTrims.includes(vehicle.trim);
        }
        return true;
      };
      const matchBodyStyle = () => {
        if (selectedBodyStyles.length) {
          return selectedBodyStyles.includes(vehicle.body);
        }
        return true;
      };

      return matchMake() && matchModel() && matchTrim() && matchBodyStyle();
    });
    console.log("filteredInventory", filteredInventory);

    // Sort inventory based on selected sorting filter
    switch (selectedSort) {
      case "price:desc":
        return filteredInventory.sort((a, b) => a.price - b.price);
      case "price:asc":
        return filteredInventory.sort((a, b) => b.price - a.price);
      case "inventorydate:desc":
        return filteredInventory.sort((a, b) => b.price - a.price);
      case "mileage:asc":
        return filteredInventory.sort((a, b) => a.mileage - b.mileage);
      case "mileage:desc":
        return filteredInventory.sort((a, b) => b.mileage - a.mileage);
      case "year:desc":
        return filteredInventory.sort((a, b) => b.year - a.year);
      case "year:asc":
        return filteredInventory.sort((a, b) => a.year - b.year);
      case "make:asc":
        return filteredInventory.sort((a, b) => a.make.localeCompare(b.make));
      default:
        return filteredInventory;
    }
  };

  // Memoize the filtered and sorted inventory
  const filteredInventory = useMemo(() => {
    return filterAndSortInventory([...inventories]);
  }, [selectedSort, selectedFilters, commonModels , selectedTrims, selectedBodyStyles]);

  // Pagination logic
  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
  const currentInventory = filteredInventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="col-xl-9 col-12">
        <h1 className="inventoryheading pt-3 pt-lg-0 text-center text-lg-start">
          {filteredInventory.length} used cars, trucks and SUVs for sale in
          Fredericksburg and Manassas, VA
        </h1>
        <div id="inventory-grid" className="row">
          {currentInventory.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        {/* Pagination */}
        <div className="text-center mt-3">
          <ul className="pagination d-inline-block cursor-pointer notranslate">
            <li
              className={`page-item d-inline-block ${
                currentPage === 1 && "disabled"
              }`}
            >
              <a
                className="page-link"
                aria-label="Previous page"
                onClick={handlePreviousPage}
                style={{
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                }}
              >
                <span className="d-inline-block faIcon fa-regular fa-angle-left text-muted">
                  <svg height={13} width={13} fill="#a3a4a6">
                    <use xlinkHref="/images/icons/svgs/regular.svg#angle-left" />
                  </svg>
                </span>
              </a>
            </li>

            {/* Pagination Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item d-inline-block ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <a
                  data-cy="pagination"
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                  style={{ cursor: "pointer" }}
                >
                  {index + 1}
                </a>
              </li>
            ))}

            <li
              className={`page-item d-inline-block ${
                currentPage === totalPages && "disabled"
              }`}
            >
              <a
                className="page-link"
                aria-label="Next page"
                onClick={handleNextPage}
                style={{
                  cursor:
                    currentPage === totalPages ? "not-allowed" : "pointer",
                }}
              >
                <span className="d-inline-block faIcon fa-regular fa-angle-right text-primary">
                  <svg height={13} width={13} fill="inherit">
                    <use xlinkHref="/images/icons/svgs/regular.svg#angle-right" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <div className="mt-3">
            Showing {(currentPage - 1) * itemsPerPage + 1} to&nbsp;
            {Math.min(
              currentPage * itemsPerPage,
              filteredInventory.length
            )}{" "}
            of&nbsp;
            {filteredInventory.length} vehicles
          </div>
        </div>
      </div>
      <Info />
    </>
  );
};

export default InventoryView;

// VehicleCard Component
const VehicleCard = ({ vehicle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const photos = vehicle.photos;

  const handleImageToggle = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div
      data-vin={vehicle.vin}
      className="srp-cardcontainer px-1 mb-3 col-lg-4 col-md-6 col-sm-6 col-12"
    >
      <div className="srp-card card">
        <div className="px-0 pt-0 pb-0 card-body">
          <div className="new-arrival position-relative border-bottom">
            <Link href={vehicle.url} title={vehicle.title}>
              <div className="img-srp-container position-relative">
                <Image
                  alt={`Photo of ${vehicle.title}`}
                  loading="eager"
                  width={640}
                  height={480}
                  className="img-srp d-block"
                  style={{ color: "transparent" }}
                  src={photos[currentImageIndex]?.src}
                  onClick={() => router.push(vehicle.url)}
                />

                <div className="image-toggle-nav">
                  <div
                    className="toggle left-toggle"
                    data-direction="left"
                    onClick={(e) => {
                      e.preventDefault();
                      handleImageToggle("left");
                    }}
                  >
                    <span className="d-inline-block h2 m-0 text-white">
                      <svg height={29} width={29} fill="white">
                        <use xlinkHref="/images/icons/svgs/regular.svg#angle-left" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className="toggle right-toggle"
                    data-direction="right"
                    onClick={(e) => {
                      e.preventDefault();
                      handleImageToggle("right");
                    }}
                  >
                    <span className="d-inline-block h2 m-0 text-white">
                      <svg height={29} width={29} fill="white">
                        <use xlinkHref="/images/icons/svgs/regular.svg#angle-right" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="px-3 pt-3 pb-0">
            <div className="no-gutters mb-2 row">
              <div className="text-truncate col-11">
                <a href={vehicle.url}>
                  <h2 className="h5 m-0 font-weight-bold text-truncate">
                    {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}
                  </h2>
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 row">
              <div className="font-weight-bold col">
                <del className="text-muted">${vehicle.originalprice}</del>
                <span className="ps-1 text-success">${vehicle.price}</span>
              </div>
              <div className="text-end col">
                <span className="cursor-pointer" role="button">
                  ${vehicle.finance.monthly_payment.toFixed(0)} / mo.
                  <span className="d-inline-block ms-2 text-primary">
                    <svg height={16} width={16} fill="inherit">
                      <use xlinkHref="/images/icons/svgs/regular.svg#pen-to-square" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="m-0 no-gutters border-top row-bordered row">
            <div className="py-2 px-3 col-4">
              <strong>Miles</strong>
              <br />
              {vehicle.mileage.toLocaleString()}
            </div>
            <div className="py-2 px-3 col-4">
              <div>
                <strong>Interior</strong>
              </div>
              <span
                className="colorIndicator ms-0 me-1 d-inline-block text-truncate"
                style={{ backgroundColor: vehicle.interiorcolorstandard }}
              />
              {vehicle.interiorcolorstandard}
            </div>
            <div className="py-2 px-3 col-4">
              <strong className="stocknumber notranslate">Stock #</strong>
              <br />
              {vehicle.stocknumber}
            </div>
          </div>
          <div className="bg-lighter py-2 px-3 border-top">
            <span className="d-inline-block text-primary me-2">
              <svg height={16} width={16} fill="inherit">
                <use xlinkHref="/images/icons/svgs/solid.svg#location-dot" />
              </svg>
            </span>
            {vehicle.dealer.name}
          </div>
        </div>
      </div>
    </div>
  );
};

// Info Component
const Info = () => {
  return (
    <div className="py-3 py-sm-5 text-small text-muted container">
      <div>
        Information deemed reliable, but not guaranteed. Interested parties
        should confirm all data before relying on it to make a purchase
        decision. All prices and specifications are subject to change without
        notice. Prices may not include additional fees such as government fees
        and taxes, title and registration fees, finance charges, dealer document
        preparation fees, processing fees, and emission testing and compliance
        charges.
      </div>
    </div>
  );
};
