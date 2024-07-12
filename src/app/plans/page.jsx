import Image from "next/image";
import rhinoceros from "../../../public/rhinoceros.png";
import { MuseoModerno } from "next/font/google";

const museoModerno = MuseoModerno({
  weight: "600",
  subsets: ["latin"],
});

export default function Plans() {
  return (
    <>
      <div className="Section-ItineraryHero relative">
        <Image className="w-full bg-cover bg-center" src={rhinoceros} />
        <div className="absolute top-1/2 left-1/2 -translate-x-14 translate-y-44 justify-center">
          <p
            className={`${museoModerno.className} text-white text-6xl font-bold`}
          >
            Plans & Package
          </p>
        </div>
      </div>

      <div className="">
        <div>
          <h2>Archives: Trips</h2>
        </div>
      </div>
    </>
  );
}
