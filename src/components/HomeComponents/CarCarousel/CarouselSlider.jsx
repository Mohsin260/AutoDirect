"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, SquarePen } from "lucide-react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function CarouselSlider() {
  const [vehicleCarouselData, setVehicleCarouselData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchVehicleCarouselData = async () => {
      try {
        const response = await fetch('/api/vehiclecarousel'); // Call the API route
        if (response.ok) {
          const data = await response.json(); // Parse the response as JSON
          setVehicleCarouselData(data); // Set the data in state
        } else {
          console.error('Failed to fetch inventories');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchVehicleCarouselData (); // Fetch the fetchVehicleCarousel data
  }, []); // Empty dependency array to ensure it runs only once
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {vehicleCarouselData.map((car) => (
          <CarouselItem
            key={car.vin}
            className="pl-2 md:pl-4 xs:basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <CarCard car={car} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function CarCard({ car }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % car.photos.length);
  }, [car.photos.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + car.photos.length) % car.photos.length
    );
  }, [car.photos.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextImage();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, nextImage]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="srp-card card border border-gray-200 shadow-md rounded-none">
      {/* Image section with navigation */}
      <Link href={car.url} title={car.title}>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            loading="lazy"
            width={540}
            height={340}
            decoding="async"
            data-nimg={1}
            src={car.photos[currentImageIndex]?.src}
            alt={car.title}
            className="w-full h-[200px] object-cover"
          />

          {/* Toogle navigation Btns */}
          <div className="absolute inset-0 hover:flex items-center justify-between group">
            <Button
              size="icon"
              variant="ghost"
              onClick={prevImage}
              aria-label="Previous image"
              className="group-hover:flex hidden text-white bg-black/50 hover:bg-black/70 rounded-none h-14 w-12"
            >
              <ChevronLeft
                className="h-8 w-8"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={nextImage}
              aria-label="Next image"
              className="group-hover:flex hidden text-white bg-black/50 hover:bg-black/70 rounded-none h-14 w-12"
            >
              <ChevronRight
                className="h-8 w-8"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="px-3 py-3">
        {/* Car Info */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-base truncate">{car.title}</h3>
          {/* Heart icon */}
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleFavorite}
            aria-label="Add to favorites"
            className="-mt-2"
          >
            {isFavorite ? (
              <FaHeart className="h-5 w-5 text-red-600" />
            ) : (
              <FaRegHeart className="h-5 w-5 text-red-600" />
            )}
          </Button>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-normal">${car.price}</span>
          <div className="flex items-center">
            <span className="text-base text-gray-600 font-medium">
              ${car.finance.monthly_payment.toFixed(2)}
            </span>
            <i className="text-red-600">
              <SquarePen
                className="h-4 w-4 ml-2"
                aria-label="Edit monthly payment"
              />
            </i>
          </div>
        </div>
      </CardContent>
      <div className="m-0 no-gutters border-top row-bordered row">
        <div className="py-2 px-3 col-4">
          <strong>Miles</strong>
          <br />
          {car.mileage}
        </div>
        <div className="py-2 px-3 col-4">
          <div>
            <strong>Interior</strong>
          </div>
          <span
            className="colorIndicator ms-0 me-1 truncate"
            style={{ backgroundColor: car.interiorcolorstandard }}
          />
          {car.interiorcolorstandard}
        </div>
        <div className="py-2 px-3 col-4">
          <strong className="stocknumber notranslate">Stock #</strong>
          <br />
          <div className="truncate">{car.stocknumber}</div>
        </div>
      </div>
      <div className="flex items-center text-md border-top bg-[#F7F7F8] text-lg px-3 py-2">
        <MapPin className="h-5 w-5 mr-1 text-red-600" aria-hidden="true" />
        <span>{car.dealer.name}</span>
      </div>
    </Card>
  );
}
