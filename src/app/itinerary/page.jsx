import Image from "next/image";
import rhinoceros from "../../../public/assets/rhinoceros.png";

export default function Itinerary() {
  return (
    <>
      {/* Section Itinerary Hero */}
      <div className="Section-ItineraryHero relative">
        <Image className="w-full bg-cover bg-center" src={rhinoceros} />
        <div className="absolute top-1/2 left-1/2 -translate-x-14 translate-y-44">
          <p className={`font-MuseoModerno text-white text-6xl font-bold`}>
            Itinerary
          </p>
        </div>
      </div>

      {/* Section Overview */}
      <div className="Section-Overview pt-16 py-9">
        <div className="container xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-4">Overview</h2>
          <p className="text-center text-lg">
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
      <div className="Section-BriefItinerary py-9">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-3xl font-bold mb-4">
            Brief Itinerary
          </h3>
          <ul className="list-none pl-8">
            <li className="mb-3 text-lg">Day 1: Welcome to Kathmandu!</li>
            <li className="mb-3 text-lg">Day 2: Explore Kathmandu</li>
            <li className="mb-3 text-lg">
              Day 3: Fly Kathmandu to Chitwan (Bharatpur)
            </li>
            <li className="mb-3 text-lg">Day 4: Jeep and foot safari</li>
            <li className="mb-3 text-lg">
              Day 5: Boat safari down the river to the Tiger Tops Tharu Lodge
            </li>
            <li className="mb-3 text-lg">Day 6: A day with the elephants</li>
            <li className="mb-3 text-lg">
              Day 7: Last morning in Chitwan; Fly back to Kathmandu
            </li>
            <li className="mb-0 text-lg">Day 8: Depart Kathmandu</li>
          </ul>
        </div>
      </div>
    </>
  );
}
