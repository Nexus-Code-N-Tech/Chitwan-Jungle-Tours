import Image from "next/image";
import rhinoceros from "../../../public/assets/rhinoceros.png";

export default function Itinerary() {
  return (
    <>
      {/* Section Itinerary Hero */}
      <div className="Section-ItineraryHero relative flex">
        <Image
          className="w-full bg-cover bg-center"
          src={rhinoceros}
          alt="Chitwan Jingle Tours rhinoceros image"
        />
        {/* sm:bottom-2 md:-bottom-1 xl:bottom-6 2xl:bottom-3.5 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-2/4 -translate-y-2/4 max-md:-bottom-2 max-lg:-bottom-1 max-xl:bottom-0 max-2xl:bottom-1">
          {/* sm:text-[2rem] md:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] */}
          <p
            className={
              "font-MuseoModerno text-white text-[5rem] font-bold tracking-[2px] max-md:text-[2rem] max-lg:text-[3rem] max-xl:text-[4rem] max-2xl:text-[5rem]"
            }
          >
            itinerary
          </p>
        </div>
      </div>

      {/* Section Overview */}
      <div className="Section-Overview pt-14 pb-8 max-xl:pt-7 max-xl:pb-4">
        <div className="container mx-auto max-md:px-4">
          <h2 className="text-center text-5xl font-bold mb-8 max-md:text-2xl max-xl:text-4xl max-xl:mb-5">
            Overview
          </h2>
          <p className="text-center text-2xl leading-10 font-light max-md:text-base max-md:leading-7">
            Nepal's plains are just 100 m above sea level; this tour takes you
            down to the tropical, flat lowlands for a real contrast to the hills
            and mountains that are usually associated with Nepal. You'll stay
            river-side in an air-conditioned bungalow opposite the jungle, spend
            time on safari, almost definitely see a rhino, various types of
            monkeys and deer, and perhaps even a tiger. And, perhaps the most
            memorable and unique aspect of this trip is spending a night at the
            elephant camp, where elephants live chain-free.
          </p>
        </div>
      </div>

      {/* Section Brief Itinerary */}
      <div className="Section-BriefItinerary py-8 max-xl:py-4">
        <div className="container mx-auto max-md:px-4">
          {/* sm:text-1xl md:text-2xl xl:text-3xl 2xl:text-4xl */}
          <h3 className="text-center text-5xl font-bold mb-8 max-md:text-2xl max-xl:text-4xl max-xl:mb-5">
            Brief Itinerary
          </h3>
          <ul className="list-none pl-8 max-md:pl-4">
            <li className="mb-11 text-2xl leading-10 max-md:text-base max-md:mb-5">
              Day 1: Welcome to Kathmandu!
            </li>
            <li className="mb-11 text-2xl leading-10 max-md:text-base max-md:mb-5">
              Day 2: Explore Kathmandu
            </li>
            <li className="mb-11 text-2xl leading-10 max-md:text-base max-md:mb-5">
              Day 3: Fly Kathmandu to Chitwan (Bharatpur)
            </li>
            <li className="mb-11 text-2xl leading-10 max-md:text-base max-md:mb-5">
              Day 4: Jeep and foot safari
            </li>
            <li className="mb-11 text-2xl leading-10 max-md:text-base max-md:mb-5">
              Day 5: Boat safari down the river to the Tiger Tops Tharu Lodge
            </li>
            <li className="mb-11 text-2xl leading-10 max-md:text-base max-md:mb-5">
              Day 6: A day with the elephants
            </li>
            <li className="mb-11 text-2xl leading-10 max-md:text-base max-md:mb-5">
              Day 7: Last morning in Chitwan; Fly back to Kathmandu
            </li>
            <li className="mb-0 text-2xl leading-10 max-md:text-base max-md:mb-5">
              Day 8: Depart Kathmandu
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
