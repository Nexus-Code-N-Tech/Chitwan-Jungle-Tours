"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Confetti from "react-confetti";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import home from "assets/home.jpg";
import img1 from "assets/img1.png";
import img2 from "assets/img2.png";
import img3 from "assets/img3.png";
import boat2 from "assets/boat2.png";
import review1 from "assets/review1.jpg";


import roundedGuide from "../../public/home/guide.png";
import roundedTourist from "../../public/home/tourist1.png";

import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Adolf Hitler",
    avatar: "",
    rating: 5,
    text: "Dammi xa hai dai lah best of best.",
  },
  {
    id: 2,
    name: "Adolf Hitler",
    avatar: "",
    rating: 4,
    text: "kada haixa dai kada.",
  },
  {
    id: 3,
    name: "Adolf Hitler",
    avatar: "",
    rating: 3,
    text: "aile samma yesto thau katai ghumethina",
  },
  {
    id: 4,
    name: "Adolf Hitler",
    avatar: "",
    rating: 1,
    text: "Nefol derai raamro cha.",
  },
  {
    id: 5,
    name: "Adolf Hitler",
    avatar: "",
    rating: 2,
    text: "Nefol derai raamro cha.",
  },
  {
    id: 6,
    name: "Adolf Hitler",
    avatar: "",
    rating: 0,
    text: "Nefol derai raamro cha.",
  },
];
export default function Homepage() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const stickyButtonRef = useRef(null);
  const footerRef = useRef(null);
  const [dim, setDim] = useState({});
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (stickyButtonRef.current && footerRef.current) {
        const stickyButtonRect =
          stickyButtonRef.current.getBoundingClientRect();
        const footerRect = footerRef.current.getBoundingClientRect();
        setIsAtBottom(stickyButtonRect.bottom >= footerRect.top);
      }
    };
    setDim({
      h: window.innerHeight,
      w: window.innerWidth,
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!dim.h || document.cookie.includes("confetti")) return;
    console.log(dim);
    setConfetti(true);
    const d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = "confetti=true;" + "expires=" + d.toUTCString();
    +";path=/";
    const timer = setTimeout(() => {
      setConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [dim]);

  const STFU = ({ review }) => (
    <Card key={review.id}>
      <CardContent className="flex flex-col items-center p-6">
        <Avatar className="w-16 h-16 mb-4">
          <AvatarImage src={review.avatar} alt={review.name} />
          <AvatarFallback>
            {review.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
        <div className="flex mb-2">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          ))}
          {[...Array(5 - review.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-gray-400" />
          ))}
        </div>
        <p className="text-center text-muted-foreground">{review.text}</p>
      </CardContent>
    </Card>
  );

  return (
    <>
      <div className="space-y-14 ">
        <div className="relative lg:h-full w-full">
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white space-y-2">
            <span className="font-MuseoModerno text-2xl px-2 lg:text-6xl">
              YOUR JOURNEY, OUR EXPERTISE!
            </span>
            <span className="font-MuseoModerno text-2xl lg:text-3xl block">
              Adventure Deeper
            </span>
          </div>
          <Image className="lg:h-[90vh] w-full rounded-tl-[100px] bg-yellow-200 py-2 " src={home} alt="Home" />
        </div>

        <div className="container flex flex-col sm:flex-row sm:gap-2">
          <div className="md:w-1/2 md:pl-8 md:pr-8">
            <h2 className="font-MuseoModerno text-black text-3xl font-bold">
              Explore <br />
              beyond <br />
              boundaries
            </h2>
          </div>
          <div className="md:w-1/2 space-y-3">
            <p className="font-Poppins text-left text-lg">
              With 20+ years in tour guiding, adventure, cross-cultural
              exploration, we design the perfect journey for you.
            </p>
            <button className="inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Schedule a call
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto px-10 lg:justify-evenly lg:flex grid grid-cols-2 gap-2">
          <div className="relative h-52 md:h-auto">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Explore World
            </h2>
            <Image
              src={img1}
              alt="Image 1"
              className="h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />
          </div>

          <div className="relative h-52 md:h-auto hidden md:block">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Explore World
            </h2>
            <Image
              src={img2}
              alt="Image 1"
              className="h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />
          </div>

          <div className="relative h-52 md:h-auto">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Explore World
            </h2>
            <Image
              src={img3}
              alt="Image 1"
              className="h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />
          </div>
        </div>

        {/* FOR SM and MD only*/}
      <div
        className="lg:hidden px-5 py-4 -space-y-1 bg-no-repeat"
        style={{ backgroundImage: `url("assets/boat2.png")` }}
      >
        <div className="relative rounded-t-xl break-words text-white rounded-tr-[70%] bg-gradient-to-br from-[#802D65] to-60% to-[#5C2C59]">
          <h1 className="font-semibold text-lg px-5 py-4">My Specialization</h1>
          <p className="text-sm px-5 pr-20 mt-3">
            Chitwan is renowned for its exceptional experiences centered around
            its famous national park, home to rare and endangered animals like
            the one-horned rhino,
          </p>
          <Image
            className="float-right p-2 mr- m-6"
            src={roundedGuide}
            width={120}
            height={120}
          />
          <p className="text-sm px-5 pr-16 pb-5">
            Asian elephant, Bengal tiger, and gharial crocodile. Visitors can go
            on thrilling jungle safaris, where spotting these majestic creatures
            in their natural habitat is a highlight.
          </p>
        </div>

        <div className="relative break-words py-14 text-white rounded-bl-[70%] bg-gradient-to-bl to-[#802D65] from-30% from-[#5C2C59]">
          <h1 className="font-semibold text-lg px-5 py-4 ">
            Best Experience in Chitwan
          </h1>
          <p className="text-sm px-5 pl-20 mt-3">
            Chitwan is renowned for its exceptional experiences centered around
            its famous national park, home to rare and endangered animals like
            the one-horned rhino, Asian elephant, Bengal tiger, and gharial
            crocodile.
          </p>
          <Image
            className="float-left p-2 ml-24 mt-2"
            src={roundedTourist}
            width={120}
            height={120}
          />
          <p
            className="text-sm px-5
           text-right"
          >
            Visitors can go on thrilling jungle safaris, where spotting these
            majestic creatures in their natural.
          </p>
        </div>
      </div>
        <div className="bg-green-200 rounded pb-8 mx-8">
          <h2 className="font-MuseoModerno text-black underline text-2xl font-bold text-center mb-5 pt-5">
            Reviews from our clients
          </h2>
          <div className="flex justify-center">
            {/* Carousel for large screens */}
            <Carousel
              plugins={[plugin.current]}
              className="w-3/4 hidden lg:block"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {reviews
                  .reduce((result, review, index) => {
                    if (index % 3 === 0) result.push([]);
                    result[result.length - 1].push(review);
                    return result;
                  }, [])
                  .map((group, i) => (
                    <CarouselItem key={i}>
                      <div className="grid grid-cols-3 gap-5 px-1">
                        {group.map((review) => (
                          <STFU review={review} />
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* Carousel for small screens */}
            <Carousel
              plugins={[plugin.current]}
              className="w-3/4 block md:hidden"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {reviews.map((review, i) => (
                  <CarouselItem key={i}>
                    <div className="grid grid-cols-1 gap-5 px-1">
                      <STFU review={review} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* Carousel for medium screens */}
            <Carousel
              plugins={[plugin.current]}
              className="w-3/4 hidden md:block lg:hidden"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {reviews
                  .reduce((result, review, index) => {
                    if (index % 2 === 0) result.push([]);
                    result[result.length - 1].push(review);
                    return result;
                  }, [])
                  .map((group, i) => (
                    <CarouselItem key={i}>
                      <div className="grid grid-cols-2 gap-5 px-1">
                        {group.map((review) => (
                          <STFU review={review} />
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Confetti */}
        {confetti && (
          <Confetti
            width={dim.w}
            height={dim.h}
            recycle={false}
            numberOfPieces={1000}
            gravity={0.1}
            colors={
              String[
                ("#f44336",
                "#e91e63",
                "#9c27b0",
                "#673ab7",
                "#3f51b5",
                "#2196f3",
                "#03a9f4",
                "#00bcd4",
                "#009688",
                "#4CAF50",
                "#8BC34A",
                "#CDDC39",
                "#FFEB3B",
                "#FFC107",
                "#FF9800",
                "#FF5722",
                "#795548")
              ]
            }
            wind={0}
          />
        )}

        {/* Quick buttons */}
        <div
          ref={stickyButtonRef}
          className={`fixed right-4 flex flex-col items-center space-y-2 transition-all duration-300 ease-in-out z-50 ${
            isAtBottom ? "bottom-[calc(100vh-5rem)]" : "bottom-4"
          }`}
        >
          {isExpanded && (
            <div className="flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out transform">
              {/* WhatsApp Button */}
              <div className="p-1 bg-gradient-to-r from-green-400 to-white-500 rounded-full">
                <button
                  className="p-2 bg-green-500 text-white rounded-full w-12"
                  onClick={() =>
                    window.open("https://wa.me/9866028826", "_blank")
                  }
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </button>
              </div>

              {/* Facebook Button */}
              <div className="p-1 bg-gradient-to-r from-blue-500 to-white-600 rounded-full">
                <button
                  className="p-2 bg-blue-500 text-white rounded-full w-12"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/uniqueadhikari.007",
                      "_blank"
                    )
                  }
                >
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </button>
              </div>

              {/* Instagram Button */}
              <div className="p-1 bg-gradient-to-r from-pink-500 to-white-500 rounded-full">
                <button
                  className="p-2 bg-pink-500 text-white rounded-full w-12"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/unik.adhikarii/",
                      "_blank"
                    )
                  }
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </button>
              </div>
            </div>
          )}

          {/* Main Toggle Button with Icons */}
          <button
            onClick={toggleExpand}
            className={`p-4 bg-blue-600 text-white rounded-full transition-all duration-1000 ease-in-out transform hover:bg-blue-700 ${
              isExpanded ? "scale-105" : "scale-100"
            }`}
          >
            {isExpanded ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </>
  );
}
