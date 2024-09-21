"use client";

import Image from "next/image";
import Link from "next/link";
import CarouselSlider from "@/components/HomeComponents/CarCarousel/CarouselSlider";
import BrowseInventory from "@/components/HomeComponents/BrowseInventory";
import LocationStepper from "@/components/HomeComponents/LocationStepper";
import HeroSection from "@/components/HomeComponents/HeroSection";
import VehicleTypesSelection from "@/components/HomeComponents/VehicleTypesSelection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="font-sans">
        <div className="route-home">
          <div
            id="mobile-nav"
            className="border-b p-2 align-middle flex flex-row items-center justify-between xl:hidden fixed w-full"
          >
            <div className="m-0">
              <span className="inline-block faIcon fa-solid fa-circle-phone h-8 mx-2 my-0">
                <svg height={29} width={29} fill="#000">
                  <use xlinkHref="/images/icons/svgs/solid.svg#circle-phone" />
                </svg>
              </span>
            </div>
            <div className="text-center w-full px-0">
              <Image
                alt="Autos Direct"
                fetchPriority="high"
                width={209}
                height={40}
                decoding="async"
                data-nImage={1}
                style={{ color: "transparent" }}
                // srcSet="/dealers/autos-direct/images/12.jpg?w=256&q=80 1x, /dealers/autos-direct/image/12.jpg?w=640&q=80 2x"
                src="/images/dealers/12.jpg"
              />
            </div>
            <div className="text-end m-0">
              <span className="inline-block faIcon fa-solid fa-bars h-8 me-1 my-0">
                <svg height={29} width={29} fill="#000">
                  <use xlinkHref="/images/icons/svgs/solid.svg#bars" />
                </svg>
              </span>
            </div>
          </div>
          {/* Hero Video Section */}
          <HeroSection />
          {/* Vehicle Types By Styles Section */}
          <VehicleTypesSelection />

          {/* About Us Section */}
          <div className="cElement cContainer  w-full ">
            <div className="sc-c65a0ac7-0 cLzOVb">
              <div className="cElement cContainer  container mx-auto sm:px-4 ">
                <div className="sc-c65a0ac7-0 hHCgds">
                  <div>
                    <div className="sc-f16f90d0-0 dRgsYv" />
                  </div>
                  <h3 style={{ textAlign: "center" }} id="Xz-YR8cSfr">
                    Used car dealer in Fredericksburg and Manassas, VA
                  </h3>
                  <div className="cElement cText ">
                    <p className="ql-align-center">
                      When you shop for your next car, get a pre-owned option
                      from Autos Direct. Our customers can shop from over 400+
                      cars in our inventory. We have something for everybody
                      with cars, trucks, and SUVs in a variety of shapes,
                      styles, and sizes. Let us get you behind the wheel of
                      something you will love today. We don’t believe in
                      haggling. Instead, we put our best price forward with
                      prices that rival wholesale prices.
                    </p>
                  </div>
                  <div>
                    <div className="sc-f16f90d0-0 dRgeeO" />
                  </div>
                </div>
              </div>
              <div>
                <div className="sc-f16f90d0-0 dRgsYv" />
              </div>
            </div>
          </div>
          <div />

          {/* Carousel Section */}
          <section className="xl:max-w-[1450px] mx-auto w-full">
            <div className="row mb-4">
              <div className="col">
                <h3 className="h4 border-b-[3px] border-[#c61b1e] pb-3 inline-block">
                  New Arrivals
                </h3>
              </div>
              <div className="text-end col">
                <Link
                  className="btn btn-default"
                  title="View all inventory"
                  href="/inventory"
                >
                  View All
                  <span className="inline-flex items-center faIcon fa-regular fa-angle-right ms-2">
                    <svg height={14} width={16} fill="inherit" className="pt-1">
                      <use xlinkHref="/images/icons/svgs/regular.svg#angle-right" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <CarouselSlider />
          </section>

          {/* Browse Inventory Section */}
          <BrowseInventory />

          {/* Location Map Section */}
          <LocationStepper />

        </div>
      </div>
    </main>
  );
}
