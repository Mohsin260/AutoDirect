import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="hidden md:block" id="header-desktop">
    <div className="border-b bg-preheader text-preheader theme-dark">
      <div className="container mx-auto sm:px-4">
        <div className="border-r border-l border-[#414141]">
          <div className="py-3 px-2 inline-block cursor-pointer border-r border-[#414141] relative">
            <span className="inline-block faIcon fa-solid fa-location-dot me-2">
              <svg
                height={16}
                width={16}
                fill="inherit"
                className="mt-2"
              >
                <use xlinkHref="/images/icons/svgs/solid.svg#location-dot" />
              </svg>
            </span>
            <span className="inline-block me-1 notranslate">
              2 Locations
              <span className="inline-block faIcon fa-solid fa-caret-down ms-2">
                <svg height={16} width={16} fill="inherit">
                  <use xlinkHref="/images/icons/svgs/solid.svg#caret-down" />
                </svg>
              </span>
            </span>
          </div>
          <div className="py-3 px-3 inline-block">
            <span role="button" className="text-preheader">
              <span className="inline-block faIcon fa-solid fa-phone me-2 ms-1">
                <svg height={16} width={16} fill="inherit">
                  <use xlinkHref="/images/icons/svgs/solid.svg#phone" />
                </svg>
              </span>
              (540) 300-4540
            </span>
          </div>
          <div className="pb-0 pt-2 px-3 float-end ms-auto text-end">
            <div className="relative">
              <div className="relative">
                <span className="inline-block faIcon fa-regular fa-magnifying-glass absolute top-2 left-5 text-white">
                  <svg height={15} width={15} fill="white">
                    <use xlinkHref="/images/icons/svgs/regular.svg#magnifying-glass" />
                  </svg>
                </span>
                <input
                  data-cy="input-search"
                  name="search"
                  placeholder="Search by make, model, feature"
                  autoComplete="off"
                  tabIndex={-1}
                  style={{ minWidth: 300, maxWidth: "100%" }}
                  type="text"
                  className="ps-5 mt-0 form-control-inverted block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  // defaultValue
                />
                <button
                  type="button"
                  id="closeMobileSearch"
                  className="my-3 w-full sm:w-auto sm:hidden flex align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-default"
                >
                  <span className="inline-block faIcon fa-regular fa-angle-left float-start text-gray-700">
                    <svg height={16} width={16} fill="#a3a4a6">
                      <use xlinkHref="/images/icons/svgs/regular.svg#angle-left" />
                    </svg>
                  </span>
                  Close Search
                </button>
              </div>
            </div>
          </div>
          <div className="float-right ms-auto h-full px-3 border-r border-[#414141] flex">
            <div id="google_translate_element" />
            <div
              className="skiptranslate goog-te-gadget pt-3"
              dir="ltr"
            >
              <div id=":0.targetLanguage">
                <select
                  class="goog-te-combo"
                  aria-label="Language Translate Widget"
                >
                  <option value="">Select Language</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
              Powered by
              <span style={{ whiteSpace: "nowrap" }}>
                <Link
                  className="VIpgJd-ZVi9od-l4eHX-hSRGPd"
                  href="https://translate.google.com"
                  target="_blank"
                >
                  <Image
                    src="/images/dealers/google-logo.webp"
                    width={37}
                    height={14}
                    style={{ paddingRight: "3px" }}
                    alt="Google Translate"
                  />
                  Translate
                </Link>
              </span>
            </div>
            <span className="inline-block faIcon fa-regular fa-angle-down  ms-2">
              <svg height={56} width={14} fill="inherit">
                <use xlinkHref="/images/icons/svgs/regular.svg#angle-down" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      className="px-3 py-2 border-b bg-header flex flex-col"
      id="homepage_header"
    >
      <div className="sm:px-4 flex justify-between sm:ml-64">
        <Link href="/" title="Autos Direct">
          <Image
            alt="Autos Direct"
            id="logo"
            fetchpriority="high"
            width={366}
            height={70}
            decoding="async"
            data-nImage={1}
            style={{ color: "transparent" }}
            // srcSet="/dealers/autos-direct/image/12.jpg?w=384&q=80 1x, /dealers/autos-direct/image/12.jpg?w=750&q=80 2x"
            src="/images/dealers/12e9df.jpg"
          />
        </Link>
        <div className="" id="header-nav">
            <ul>
              <Link href="/admin">
                <li className='cursor-pointer'>Dashboard</li>
              </Link>
            <li className="cursor-pointer">
              Inventory
              <span className="inline-block faIcon fa-regular fa-angle-down ms-2 text-blue-600">
                <svg height={10} width={14} fill="inherit">
                  <use xlinkHref="/images/icons/svgs/regular.svg#angle-down" />
                </svg>
              </span>
              <ul>
                <li className="cursor-pointer">
                  <Link
                    href="/used-cars"
                    target="_self"
                    title="All inventory"
                    className
                  >
                    All inventory
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/cars" target="_self" title="Cars">
                    Cars
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Trucks"
                    className
                    href="/trucks"
                  >
                    Trucks
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="SUVs"
                    className
                    href="/suvs"
                  >
                    SUVs
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Vans"
                    className
                    href="/vans"
                  >
                    Vans
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Electric-2s"
                    className
                    href="/convertibles"
                  >
                    Electric-2s
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Hatchbacks"
                    className
                    href="/hatchbacks"
                  >
                    Hatchbacks
                  </Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">
              Finance
              <span className="inline-block faIcon fa-regular fa-angle-down ms-2 text-blue-600">
                <svg height={10} width={14} fill="inherit">
                  <use xlinkHref="/images/icons/svgs/regular.svg#angle-down" />
                </svg>
              </span>
              <ul>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Financing"
                    className
                    href="/financing"
                  >
                    Financing
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Get pre qualified with Capital One"
                    className
                    href="/capital-one-qualified"
                  >
                    Get pre qualified with Capital One
                  </Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">
              <Link
                target="_self"
                title="Events and Offers"
                className="noChildren"
                href="/automotive-specials"
              >
                Events and Offers
              </Link>
            </li>
            <li className="cursor-pointer">
              About us
              <span className="inline-block faIcon fa-regular fa-angle-down ms-2 text-blue-600">
                <svg height={10} width={14} fill="inherit">
                  <use xlinkHref="/images/icons/svgs/regular.svg#angle-down" />
                </svg>
              </span>
              <ul>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="About us"
                    className
                    href="/about-us"
                  >
                    About us
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Contact us"
                    className
                    href="/contact-us"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_blank"
                    title="Visit us online"
                    className
                    href="https://linktr.ee/autosdirectva"
                  >
                    Visit us online
                    <span className="inline-block faIcon fa-regular fa-arrow-up-right-from-square ms-2 text-gray-700">
                      <svg height={16} width={16} fill="#a3a4a6">
                        <use xlinkHref="/regular.svg#arrow-up-right-from-square" />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Meet the Staff - Fredericksburg"
                    className
                    href="/meet-the-staff"
                  >
                    Meet the Staff - Fredericksburg
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Meet the Staff - Manassas"
                    className
                    href="/meet-the-staff-manassas"
                  >
                    Meet the Staff - Manassas
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Meet the Staff - Latino Center"
                    className
                    href="/meet-the-staff-latino"
                  >
                    Meet the Staff - Latino Center
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Meet the Staff - Service and Detailing"
                    className
                    href="/meet-the-staff-service"
                  >
                    Meet the Staff - Service and Detailing
                  </Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">
              Trade / Sell
              <span className="inline-block faIcon fa-regular fa-angle-down ms-2 text-blue-600">
                <svg height={10} width={14} fill="inherit">
                  <use xlinkHref="/images/icons/svgs/regular.svg#angle-down" />
                </svg>
              </span>
              <ul>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="What's your car worth?"
                    className
                    href="/trade-in"
                  >
                    What &apos;s your car worth?
                  </Link>
                </li>
                <li className="cursor-pointer">
                  <Link
                    target="_self"
                    title="Edmunds Trade-in"
                    className
                    href="/edmunds-trade-in"
                  >
                    Edmunds Trade-in
                  </Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer">
              <Link
                target="_self"
                title="Reviews"
                className="noChildren"
                href="/testimonials"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </header>
  )
}

export default Header