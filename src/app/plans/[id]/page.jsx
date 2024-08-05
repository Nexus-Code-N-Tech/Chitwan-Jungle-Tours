"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import items from "../items";
import "../plans.css";

import { useParams } from "next/navigation";
import { Cedarville_Cursive } from "next/font/google";

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const PlanDetails = () => {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <p>Item not found</p>;
  }

  const [shuffledItems, setShuffledItems] = useState([]);

  useEffect(() => {
    setShuffledItems(shuffleArray([...items]).slice(0, 3));
  }, []);

  return (
    <div className="container mx-auto lg:p-16 p-8">
      <div className="grid lg:grid-cols-3 gap-3 grid-cols-1 md:grid-cols-3">
        <div className="lg:col-span-2 md:col-span-2 col-span-1 bg-gray-300 w-full h-full p-5 md:p-10 rounded-tr-full">
          <h1 className="font-bold text-2xl md:text-3xl lg:w-[70%] leading-0 tracking-wider">
            {item.title}
          </h1>
          <div className="bg-green-400 w-1/6 h-2 mb-8 mt-1 rounded-full"></div>
          <Image
            src={item.src}
            alt={item.title}
            width={700}
            height={400}
            className="rounded-3xl"
          />
          <div className="description mt-5 text-[#666666]">
            <p className="short-description mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dignissimos facere autem quod est nesciunt sed tempora dolores
              ratione illo?
            </p>
            <p>
              <strong>Highlights:</strong>
            </p>
            <ul className="list-disc ps-7 pt-4">
              <li>hello</li>
              <li>hiii</li>
            </ul>
            <div className="mt-10 grid gap-6">
              <p>
                <strong className="text-2xl text-black pb-1">
                  How to get Chitwan National Park?
                </strong>{" "}
                <br />
                The best way to get to Chitwan from Kathmandu or Pokhara depends
                on your preferences and budget.
              </p>

              <p>
                <strong>Here are the common options:</strong>
              </p>

              <p>
                <strong>
                  By Road: <br />
                  From Kathmandu to Chitwan National Park:{" "}
                </strong>
                The most common route is by road, which takes around 6-7 hours
                depending on traffic and road conditions. You can take a tourist
                bus, a private car, or a taxi. The tourist bus is the most
                economical option.
              </p>
              <p>
                <strong>From Pokhara to Chitwan: </strong> The road journey from
                Pokhara to Chitwan takes around 5-6 hours. You can also take a
                tourist bus, private car, or taxi.
              </p>

              <p>
                <strong>
                  By Air: <br />
                  From Kathmandu to Chitwan National Park:{" "}
                </strong>
                You can take a domestic flight from Kathmandu to Bharatpur,
                which is the nearest airport to Chitwan. The flight takes around
                20 minutes, followed by a short drive to Chitwan National Park.
              </p>
              <p>
                <strong>From Pokhara to Chitwan: </strong> There are also direct
                flights from Pokhara to Chitwan daily. The flight will take
                around 18 minutes, followed by a short drive to Chitwan National
                Park.
              </p>

              <p>
                <strong>By Bus:</strong>
                <br />
                There are direct bus services from Kathmandu and Pokhara to
                Chitwan. The bus journey is relatively inexpensive but can be
                long and uncomfortable due to road conditions.
                <br />
                <br />
                We offer Chitwan Jungle Safari packages with 1 night tower stay
                that include transportation from Kathmandu or Pokhara to Chitwan
                and return as part of a tour package.
              </p>
            </div>
          </div>

          <div className="bg-[#401a33] h-auto w-auto mt-12 rounded-tr-[45px] rounded-bl-[45px] texture">
            <div className="px-6 py-12 texture-content">
              <h3
                className={`${cursive.className} text-white text-center text-2xl md:text-4xl font-bold`}
              >
                Ready to
              </h3>
              <div className="text-3xl md:text-5xl text-center text-white font-black w-full pt-4 font-serif">
                Plan Your Group Trip?
              </div>
              <div className="text-center mt-8">
                <a
                  href="/contact"
                  className="py-3 px-6 bg-white text-green-600 font-bold text-sm rounded-3xl hover:text-white hover:bg-green-600"
                >
                  Request a Plan
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-400 w-full h-full p-10 md:px-5 lg:px-10 rounded-br-full">
          <div className="mb-10">
            <h5 className="text-2xl lg:text-2xl font-bold mb-4 md:text-xl">
              Why Book With Us?
            </h5>
            <ul className="list-none text-lg lg:text-lg md:text-[16px]">
              <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
                Daily Departures
              </li>
              <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
                All-inclusive price
              </li>
              <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
                Free Cancellation
              </li>
              <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
                Best Price Guarantee
              </li>
              <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
                Secure Online Payments
              </li>
              <li>24/7 Support</li>
            </ul>
          </div>

          <div className="">
            <h5 className="text-2xl font-bold mb-4 md:text-xl lg:text-2xl">
              Any Queries?{" "}
            </h5>
            <p className="text-lg font-bold md:text-sm lg:text-lg">
              Dial us now:
            </p>
            <p>+977 98********</p>
            <p>abc@gmail.com</p>
          </div>
        </div>
      </div>

      {/* for relative trips */}
      <div className="items-center text-center bg-gray-100 mt-10 rounded-2xl">
        <h3 className="text-4xl font-bold mb-4 pb-3 pt-10 text-[#111]">
          Relative Trips
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-5 p-5">
          {shuffledItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#f4f5f8] shadow-xl rounded-3xl card"
            >
              <div className="relative card1">
                <Image src={item.src} layout="responsive" />
              </div>

              <div className="p-5">
                <h4 className="mb-1 mt-1 text-xl">{item.title}</h4>

                <hr />

                <div className="flex items-center gap-2 mt-4 justify-center">
                  <Link href={`/plans/${item.id}`}>
                    <button className=" border-2 border-[#55e6a5] px-[2rem] bg-gray-200 transition-all duration-200 py-[0.5rem] text-[15px] font-bold uppercase hover:bg-[#55e6a5] text-black flex items-center justify-center space-x-2 rounded-full button">
                      <p className="tracking-widest">View Details</p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
