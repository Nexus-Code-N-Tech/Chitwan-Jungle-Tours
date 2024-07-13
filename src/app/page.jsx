import Image from "next/image";
import rhinoceros from ".//../../public/assets/home.jpg";
import img1 from ".//../../public/assets/img1.png";
import img2 from ".//../../public/assets/img2.png";
import img3 from ".//../../public/assets/img3.png";
import { Mukta, MuseoModerno, Poppins } from "next/font/google";

const museoModerno = MuseoModerno({
  weight: "600",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Itinerary() {
  return (
    <>
      <div className="Section-ItineraryHero relative h-screen">
        <Image
          className="w-full h-full object-cover"
          src={rhinoceros}
          alt="Rhinoceros"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p
            className={`${museoModerno.className} text-white text-6xl font-bold mb-4`}
          >
            YOUR JOURNEY, OUR EXPERTISE!
          </p>
          <p
            className={`${museoModerno.className} text-white text-3xl font-bold`}
          >
            Adventure Deeper
          </p>
        </div>
      </div>

      <div className="Section-Overview pt-16 py-9">
        <div className="container xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 md:pl-8 md:pr-8">
            <h2
              className={`${museoModerno.className} text-black text-3xl font-bold`}
            >
              Explore <br />
              beyond <br />
              boundaries
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className={`${poppins.className} text-left text-lg`}>
              With 20+ years in tour guiding, adventure, cross-cultural
              exploration, we design the perfect journey for you.
              <br />
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Schedule a call
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Section with Images and Text */}
      <div className="container mx-auto py-9">
        <h2
          className={`${museoModerno.className} text-black text-2xl font-bold text-center mb-4`}
        >
          Explore organizational services
        </h2>
        <div className="flex justify-center space-x-4">
          <div className="w-1/3">
            <Image
              src={img1}
              alt="Image 1"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="w-1/3">
            <Image
              src={img2}
              alt="Image 2"
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="w-1/3">
            <Image
              src={img3}
              alt="Image 3"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
