"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-footer">
            <div className="bg-secondary-light text-center text-sm-start text-white py-3 mx-auto">
              <div className="container sm:px-4">
                <div className="flex sm:flex-row flex-col justify-between items-center">
                  <div className="align-middle text-large sm:mb-0 notranslate px-4">
                    Autos Direct
                  </div>
                  <div className="text-center sm:text-end text-gray-700 text-large max-sm:w-1/2 px-4 flex items-center">
                    <Link
                      href="https://www.facebook.com/AutosDirectofFredericksburg/"
                      className="text-white"
                      target="_blank"
                      title="Autos Direct on Facebook"
                    >
                      <Image
                        alt="Autos Direct on Facebook"
                        loading="lazy"
                        width={30}
                        height={30}
                        decoding="async"
                        data-nImage={1}
                        className="ms-3 fill-white"
                        style={{ color: "transparent" }}
                        src="/images/icons/fontawesome/square-facebook8a6b.svg"
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/autosdirectva/"
                      className="text-white"
                      target="_blank"
                      title="Autos Direct on Instagram"
                    >
                      <Image
                        alt="Autos Direct on Instagram"
                        loading="lazy"
                        width={30}
                        height={30}
                        decoding="async"
                        data-nImage={1}
                        className="ms-3 fill-white"
                        style={{ color: "transparent" }}
                        srcSet="/images/icons/fontawesome/square-instagram.svg?w=32&q=80 1x, /images/icons/fontawesome/square-instagram.svg?w=64&q=80 2x"
                        src="/images/icons/fontawesome/square-instagram8a6b.svg"
                      />
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@autosvadirect"
                      className="text-white"
                      target="_blank"
                      title="Autos Direct on Tiktok"
                    >
                      <Image
                        alt="Autos Direct on Tiktok"
                        loading="lazy"
                        width={30}
                        height={30}
                        decoding="async"
                        data-nImage={1}
                        className="ms-3 fill-white"
                        style={{ color: "transparent" }}
                        srcSet="/images/icons/fontawesome/square-tiktok.svg?w=32&q=80 1x, /images/icons/fontawesome/square-tiktok.svg?w=64&q=80 2x"
                        src="/images/icons/fontawesome/square-tiktok8a6b.svg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-sm-start text-white py-4">
              <div className="container mx-auto sm:px-4">
                <div className="flex flex-wrap ">
                  <div className="mb-4 sm:mb-0 sm:w-1/3 pr-4 pl-4">
                    <h5 className="h5 border-b-[3px] border-[#c61b1e] inline-block pb-3">
                      Locations
                    </h5>
                    <div>
                      <div className="flex flex-wrap ">
                        <div className="lg:w-full w-full">
                          <div className="vcard mb-3">
                            <Link
                              className="adr text-white"
                              target="_blank"
                              title="View 4540 Lafayette Blvd on Google Maps"
                              href="https://www.google.com/maps/search/Autos Direct Fredericksburg,4540 Lafayette Blvd,Fredericksburg,VA 22408"
                            >
                              <b className="notranslate">
                                Autos Direct Fredericksburg
                              </b>
                              <br />
                              <span className="street-address">
                                4540 Lafayette Blvd
                              </span>
                              <br />
                              <span className="locality">
                                Fredericksburg
                              </span>, <span className="region">VA</span>
                              <span className="postal-code">22408</span>
                              <br />
                            </Link>
                            <span
                              role="button"
                              className="tel text-white block mt-2 mb-4"
                            >
                              <span className="inline-block faIcon fa-solid fa-phone me-2 ms-1 text-white">
                                <svg height={16} width={16} fill="white">
                                  <use xlinkHref="/images/icons/svgs/solid.svg#phone" />
                                </svg>
                              </span>
                              (540) 300-4540
                            </span>
                          </div>
                        </div>
                        <div className="lg:w-full w-full">
                          <div className="vcard mb-3">
                            <Link
                              className="adr text-white"
                              target="_blank"
                              title="View 9075 Euclid Ave on Google Maps"
                              href="https://www.google.com/maps/search/Autos Direct Manassas,9075 Euclid Ave,Manassas,VA 20110"
                            >
                              <b className="notranslate">
                                Autos Direct Manassas
                              </b>
                              <br />
                              <span className="street-address">
                                9075 Euclid Ave
                              </span>
                              <br />
                              <span className="locality">Manassas</span>,
                              <span className="region">VA</span>
                              <span className="postal-code">20110</span>
                              <br />
                            </Link>
                            <span
                              role="button"
                              className="tel text-white block mt-2 mb-4"
                            >
                              <span className="inline-block faIcon fa-solid fa-phone me-2 ms-1 text-white">
                                <svg height={16} width={16} fill="white">
                                  <use xlinkHref="/images/icons/svgs/solid.svg#phone" />
                                </svg>
                              </span>
                              (703) 260-8338
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 sm:mb-0 sm:w-1/3 pr-4 pl-4">
                    <h5 className="h5 border-b-[3px] border-[#c61b1e] inline-block pb-3">
                      Quick Links
                    </h5>
                    <nav className="flex flex-wrap ">
                      <div className="lg:w-1/2 w-full">
                        <Link
                          target="_self"
                          className="text-white block py-3 sm:py-1"
                          href="/inventory"
                        >
                          View Inventory
                        </Link>
                      </div>
                      <div className="lg:w-1/2 pr-4 pl-4 w-full">
                        <Link
                          target="_self"
                          className="text-white block py-3 sm:py-1"
                          href="/about-us"
                        >
                          About us
                        </Link>
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <Link
                          target="_self"
                          className="text-white block py-3 sm:py-1"
                          href="/financing"
                        >
                          Financing
                        </Link>
                      </div>
                      <div className="lg:w-1/2 pr-4 pl-4 w-full">
                        <Link
                          target="_blank"
                          className="text-white block py-3 sm:py-1"
                          href="https://linktr.ee/autosdirectva"
                        >
                          Visit us online
                          <span className="inline-block faIcon fa-regular fa-arrow-up-right-from-square ms-2 text-gray-700">
                            <svg height={16} width={16} fill="#a3a4a6">
                              <use xlinkHref="/images/icons/svgs/regular.svg#arrow-up-right-from-square" />
                            </svg>
                          </span>
                        </Link>
                      </div>
                      <div className="lg:w-1/2 w-full">
                        <Link
                          target="_self"
                          className="text-white block py-3 sm:py-1"
                          href="/terms"
                        >
                          Terms of service
                        </Link>
                      </div>
                      <div className="lg:w-1/2 pr-4 pl-4 w-full">
                        <Link
                          target="_self"
                          className="text-white block py-3 sm:py-1"
                          href="/privacy"
                        >
                          Privacy policy
                        </Link>
                      </div>
                    </nav>
                  </div>
                  <div className="mb-4 sm:mb-0 sm:w-1/3 pr-4 pl-4 w-full">
                    <h5 className="h5 border-b-[3px] border-[#c61b1e] inline-block pb-3">
                      Stay Updated
                    </h5>
                    <p>Get special offers directly to your inbox.</p>
                    <div className="rounded p-6 bg-secondary-light">
                      <div className="mb-0 flex flex-wrap ">
                        <div className="sm:w-1/2 pr-4 ">
                          <div>
                            <label className="hidden form-label">
                              First name
                            </label>
                            <input
                              placeholder="First"
                              name="firstname"
                              required
                              type="text"
                              className="form-control-inverted mb-4 block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            />
                          </div>
                        </div>
                        <div className="sm:w-1/2">
                          <div>
                            <label className="hidden form-label">
                              Last name
                            </label>
                            <input
                              placeholder="Last"
                              name="lastname"
                              required
                              type="text"
                              className="form-control-inverted mb-4 block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                            />
                          </div>
                        </div>
                        <div className="mb-3 md:mb-4 sm:w-full">
                          <label className="hidden form-label">Email</label>
                          <input
                            data-cy="formcontrol-email"
                            name="email"
                            placeholder="you@email.com"
                            aria-label="Your email"
                            autoComplete="email"
                            type="email"
                            id="email"
                            className="form-control form-control-inverted mb-4 block appearance-none w-full text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="w-full inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded leading-normal no-underline btn btn-primary  text-white "
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary-light text-center p-6 text-white">
              <div className="opacity-75">
                <Link
                  href="https://overfuel.com?utm_source=dealer&utm_medium=referral&utm_campaign=Autos Direct"
                  target="_blank"
                  className="text-white"
                >
                  Powered by <u>overfuel.com</u>
                  , the unified platform for automotive websites and digital
                  retailing.
                  <br />
                  <Image
                    alt="Powered by overfuel.com"
                    loading="lazy"
                    width={135}
                    height={30}
                    decoding="async"
                    data-nImage={1}
                    className="mt-3"
                    style={{ color: "transparent", margin: "auto" }}
                    // srcSet="/images/assets/overfuel-webp.webp?w=256&q=80 1x, /images/assets/overfuel-webp.webp?w=384&q=80 2x"
                    src="/images/assets/overfuel-webp177a.webp"
                  />
                </Link>
              </div>
            </div>
          </footer>
  )
}

export default Footer