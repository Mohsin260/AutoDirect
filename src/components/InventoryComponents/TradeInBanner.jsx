"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const TradeInBanner = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls banner visibility
  const router = useRouter();

  // Show the banner only if the user hasn't closed it before
  useEffect(() => {
    const bannerClosed = localStorage.getItem('tradeInBannerClosed');
    if (!bannerClosed) {
      setIsVisible(true);
    }
  }, []);

  // Handle closing the banner and save the action to localStorage
  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('tradeInBannerClosed', 'true');
  };

  // Handle "Get your trade-in value" button click
  const handleTradeInClick = () => {
    router.push('/edmunds-trade-in');
  };

  if (!isVisible) return null; // Return nothing if the banner shouldn't be shown

  return (
    <div className="bg-secondary p-4 d-block" id="top-banner">
      <div className="align-items-center container">
        <div className="d-flex align-items-center row">
          <div className="text-large text-center text-white col-sm-12">
            <Image
              alt="Get your trade-in value"
              loading="lazy"
              width={40}
              height={40}
              decoding="async"
              className="me-4 d-none d-sm-inline-block"
              src="/images/icons/streamlinehq-car-tool-keys-transportation-white-2007527.png"
              style={{ color: 'transparent' }}
            />
            What&apos;s your car worth?
            <button
              type="button"
              className="border-white ms-4 mt-3 mt-sm-0 btn btn-light"
              onClick={handleTradeInClick}
            >
              Get your trade-in value
            </button>
            <button
              type="button"
              className="close text-white text-large float-end p-0 mb-n2 mt-n1 mr-n2 btn btn-link"
              onClick={handleClose}
            >
              <span className="d-inline-block faIcon fa-regular fa-xmark text-white">
                <svg height={36} width={25} fill="white">
                  <use xlinkHref="/images/icons/svgs/regular.svg#xmark" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeInBanner;
