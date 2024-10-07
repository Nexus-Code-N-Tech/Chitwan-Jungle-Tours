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
import guide from "assets/guide.png";
import tourist from "assets/tourist.png";

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
    if (!dim.h) return;
    console.log(dim);
    setConfetti(true);
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
      <div className="w-[98,7] space-y-14">
        <div className="relative lg:h-full w-full bg-black">
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white space-y-2">
            <span className="font-MuseoModerno text-2xl px-2 lg:text-6xl">
              YOUR JOURNEY, OUR EXPERTISE!
            </span>
            <span className="font-MuseoModerno text-2xl lg:text-3xl block">
              Adventure Deeper
            </span>
          </div>
          <Image className="object-cover h-full w-full" src={home} alt="Home" />
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
            <button className="inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Schedule a call
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto px-10 lg:justify-evenly lg:flex grid grid-cols-3 gap-2">
          <div className="relative h-52 md:h-auto">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Explore World
            </h2>
            <Image
              src={img1}
              alt="Image 1"
              className="h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md"
            />
          </div>

          <div className="relative h-52 md:h-auto">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Explore World
            </h2>
            <Image
              src={img2}
              alt="Image 1"
              className="h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md"
            />
          </div>

          <div className="relative h-52 md:h-auto">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Explore World
            </h2>
            <Image
              src={img3}
              alt="Image 1"
              className="h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md"
            />
          </div>
        </div>

        <div className="lg:block hidden">
          {/* background, guide photo and texts */}
          <div className="relative text-center container mx-auto py-5 ">
            <Image src={boat2} className="w-full h-auto bg-cover" alt="Boat" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative flex items-center mx-4 lg:mx-20">
                {/* Guide image */}
                <Image
                  src={guide}
                  className="relative left-4 inline-block"
                  alt="Guide"
                  style={{ width: "450px", height: "500px" }}
                  sizes="(max-width: 1024px) 200px, 400px"
                />

                {/* Text content */}
                <div
                  className="relative left-4 bg-[#5C2C59] rounded-3xl text-white p-2 text-xs flex justify-center items-center"
                  style={{
                    width: "750px",
                    maxWidth: "700px",
                    height: "400",
                    minHeight: "350px",
                  }}
                >
                  <p className="font-Poppins text-white text-lg md:text-xl text-center absolute inset-2 md:inset-8 flex justify-center items-center p-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Best experiences in chitwan */}

          <div className="relative text-center container mx-auto bg-cover">
            <Image src={boat2} className="w-full h-auto" alt="Boat" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative flex items-center mx-20">
                <div
                  className="relative left-4 bg-[#5C2C59] rounded-3xl text-white p-2 text-xs flex justify-center items-center"
                  style={{ width: "700px", height: "400px" }}
                >
                  <p className="font-Poppins text-white text-xl text-center absolute inset-0 flex justify-center items-center p-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <Image
                  src={tourist}
                  className="relative left-4 inline-block rounded-3xl"
                  alt="Tourist"
                  style={{ width: "450px", height: "500px" }}
                  sizes="(max-width: 1024px) 200px, 400px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          {/* OLD CODE MODIFIED A BIT TO HARD CODE RESPONSIVE FOR MOBILE */}
          <div
            className="flex items-center justify-center h-80 sm:h-[35rem] lg:h-screen px-4"
            style={{ backgroundImage: `url('assets/boat2.png')` }}
          >
            <div className="grid grid-cols-[1fr_2fr]">
              <div className="rounded-3xl py-3">
                <Image src={guide} alt="Guide" />
              </div>
              <div className="rounded-md text-white px-5 lg:text-xl h-full text-sm text-center font-Poppins bg-[#5c2c59] flex flex-col justify-center items-center">
                <p className="">About Guide</p>
                <p className="">
                  Our guide offers a clear, step-by-step approach that makes
                  even the most complex topics easy to understand. Whether
                  you're a beginner or an experienced professional, the guide is
                  designed to provide practical solutions and actionable
                  insights.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-center h-80 sm:h-[35rem] lg:h-screen px-4"
            style={{ backgroundImage: `url('assets/boat-2958283_1280 1.png')` }}
          >
            <div className="grid grid-cols-[2fr_1fr]">
              <div className="rounded-md text-white lg:text-xl h-full text-sm text-center font-Poppins bg-[#5c2c59] flex flex-col justify-center items-center">
                <p className="">About Guide</p>
                <p className="">
                  Our guide offers a clear, step-by-step approach that makes
                  even the most complex topics easy to understand. Whether
                  you're a beginner or an experienced professional, the guide is
                  designed to provide practical solutions and actionable
                  insights.
                </p>
              </div>
              <div className="rounded-3xl py-3">
                <Image src={tourist} alt="Guide" />
              </div>
            </div>
          </div>
        </div>
        {/* <div>
        <div
          className="grid grid-cols-[12rem_1fr] h-80 w-full"
          style={{ backgroundImage: "url(assets/boat2.png)" }}
        >
          <div className="h-80 inline-flex justify-end">
            <Image src={guide} className="h-full w-fit py-8 lg:py-10 rounded-2xl" />
          </div>
          <div className="py-2">
            <div className="h-full px-2 w-full self-center text-xs lg:text-lg font-Poppins rounded-lg bg-[#5c2c59] flex text-center flex-col items-center justify-center text-white">
              <p className="">About Guide</p>
              <p>
                Our guide offers a clear, step-by-step approach that makes even
                the most complex topics easy to understand. Whether you're a
                beginner or an experienced professional, the guide is designed
                to provide practical solutions and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div> */}
        <div className="bg-gray-200 rounded pb-8">
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
