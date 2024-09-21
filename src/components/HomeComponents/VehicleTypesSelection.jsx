"use client"

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const VehicleTypesSelection = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <>
      <div
        className="bg-white pt-3 sm:pt-0 border-b sm:px-4 flex flex-col"
        id="home-vehicle-types"
      >
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="row-bordered sm:hidden border-t border-start border-end flex flex-wrap">
            <div className="text-center w-full">
              <div className="flex">
                <div className="px-3 pb-2 pt-3 w-1/2 inline-block font-bold border-b border-theme border-thick">
                  Body Style
                </div>
                <div className="px-3 pb-2 pt-3 w-1/2 inline-block text-gray-700">
                  Make &amp;Model
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-start border-end border-b flex justify-center">
            <div className="text-small font-weight-semibold cursor-pointer flex flex-col items-center">
              <h5 className="py-3 text-center hidden md:block font-bold m-0 w-full">
                Browse By Style
              </h5>
              <div className="flex gap-10 border-t lg:w-[1400px] w-full">
              {[
                { title: "Sedan", href: "/cars", img: "sedan", label: "Cars" },
                { title: "SUV", href: "/suvs", img: "suv", label: "SUVs" },
                { title: "Pickup truck", href: "/trucks", img: "truck", label: "Trucks" },
                { title: "Van", href: "/vans", img: "van", label: "Vans" },
                  { title: "Electric Car", href: "/convertibles", img: "electric-2", label: "Electric" },
                ].map((vehicle, index) => (
                  <div
                    key={index}
                    className="text-center relative p-6 md:w-full pr-4 pl-4 w-1/3 border-r group"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Link className="block cursor-pointer" title={`View Inventory: ${vehicle.title}`} href={vehicle.href}>
                      <Image
                        src={`/images/icons/cartypes/${vehicle.img}.webp`}
                        width={120}
                        height={66}
                        alt={`Used ${vehicle.title}`}
                        className={`my-1 Image-fluid mx-auto ${hovered === index ? "hidden" : "block"}`}
                      />
                      <Image
                        src={`/images/icons/cartypes/${vehicle.img}-hover.webp`}
                        width={120}
                        height={66}
                        alt={`Used ${vehicle.title} Hover`}
                        className={`my-1 Image-fluid mx-auto ${hovered === index ? "block" : "hidden"}`}
                      />
                      <br />
                      {vehicle.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex sm:hidden">
            <Link
              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 font-weight-semibold w-full my-3"
              href="/used-cars"
            >
              All Inventory
              <span className="inline-block faIcon fa-regular fa-angle-right text-white float-end">
                <svg height={16} width={16} fill="white">
                  <use xlinkHref="/regular.svg#angle-right" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="cElement cContainer  w-full ">
        <div className="sc-c65a0ac7-0 lfeduE">
          <div className="cElement cContainer  container mx-auto sm:px-4 ">
            <div className="sc-c65a0ac7-0 eKVTSo">
              <div className="cElement cColumnLayout  flex flex-wrap ">
                <div className="cElement cColumn sm:w-1/2 pr-4 pl-4 w-full sm:order-0 order-1">
                  <div className="cElement cContainer  container mx-auto sm:px-4 ">
                    <div className="sc-c65a0ac7-0 jssrwM">
                      <div className>
                        <div className="sc-f16f90d0-0 dRhfnk" />
                      </div>
                      <h2
                        style={{ textAlign: "center" }}
                        className
                        id="hins8uBAqh"
                      >
                        Cars, trucks, &amp;SUVs in Fredericksburg
                      </h2>
                      <div className>
                        <div className="sc-f16f90d0-0 dRfrQd" />
                      </div>
                      <div className="text-center">
                        <Link
                          target="_self"
                          className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded no-underline btn btn-outline-default w-full py-3 px-4 leading-tight text-xl"
                          href="/inventory?dealer_id[]=218"
                        >
                          Browse Fredericksburg Inventory
                          <span className="inline-block faIcon fa-regular fa-angle-right text-white float-end">
                            <svg height={16} width={16} fill="white">
                              <use xlinkHref="/images/icons/svgs/regular.svg#angle-right" />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <div className="sc-f16f90d0-0 dRhfnk" />
                  </div>
                </div>
                <div className="cElement cColumn sm:w-1/2 pr-4 pl-4 w-full sm:order-0 order-1">
                  <div className="cElement cContainer  container mx-auto sm:px-4 ">
                    <div className="sc-c65a0ac7-0 jssrwM">
                      <div className>
                        <div className="sc-f16f90d0-0 dRhfnk" />
                      </div>
                      <h2 style={{ textAlign: "center" }} id="Yf4jfUpI6m">
                        Cars, trucks, &amp;SUVs in Manassas
                      </h2>
                      <div>
                        <div className="sc-f16f90d0-0 dRfrQd" />
                      </div>
                      <div className="text-center">
                        <Link
                          target="_self"
                          className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded no-underline btn btn-outline-default w-full py-3 px-4 leading-tight text-xl"
                          href="/inventory?dealer_id[]=219"
                        >
                          Browse Manassas Inventory
                          <span className="inline-block faIcon fa-regular fa-angle-right text-white float-end">
                            <svg height={16} width={16} fill="white">
                              <use xlinkHref="/images/icons/svgs/regular.svg#angle-right" />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className>
                    <div className="sc-f16f90d0-0 dRhfnk" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleTypesSelection;
