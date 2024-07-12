"use client";
import Image from "next/image";
import Phone from "@/components/SVG/phone";
import Facebook from "@/components/SVG/facebook";

import SideBar from "./SideBarMedia";

export default function () {
  return (
    <>
      <SideBar />
      <footer>
        <div className="relative md:h-40 h-32 flex justify-center items-center text-white">
          <Image
            alt="footer image"
            src={"/global/footer.png"}
            fill
            quality={100}
          />
        </div>
        <iframe
          className="w-full h-[40vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297165.25479320704!2d84.13896016872056!3d27.555248274147228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399493f3cf54cc45%3A0xc0759aebafb6a8df!2sAdhikari%20Palace!5e0!3m2!1sen!2snp!4v1720460598987!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="bg-[#401A33] h-[25rem] lg:text-lg lg:h-[30rem] relative [clip-path:polygon(100%0%,50%10%,0%0%,0%80%,50%100%,100%80%)] lg:[clip-path:polygon(100%0%,50%10%,0%0%,0%85%,50%100%,100%85%)]  -translate-y-[14%] -mt-[1.5px]">
          {/* <div className="w-1/2 -mt-[-0.8px] h-10 md:h-20 bg-inherit absolute transform -translate-y-full" /> */}
          {/* <div className="w-1/2 h-10 md:h-20  -mt-[-0.8px] bg-inherit absolute transform -translate-y-full right-0 [clip-path:polygon(100%0%,100%100%,0%100%)]"></div> */}
          <div className=" grid grid-flow-col-dense items-center gap-2 h-[60%]">
            <div className="text-white space-y-4 text-center">
              <a className="text-xl">Contats</a>
              <div>
                <p>
                  <a>Meet Our Guide</a>
                </p>
                <p>
                  <a>Our Story</a>
                </p>
                <p>
                  <a>Blogs</a>
                </p>
              </div>
            </div>
            <div className="text-white space-y-4 text-center">
              <a className="text-xl">Contats</a>
              <div className="text-center">
                <p>
                  <a href="#">Meet Our Guide</a>
                </p>
                <p>
                  <a href="#">Our Story</a>
                </p>
                <p>
                  <a href="#">Blogs</a>
                </p>
              </div>
            </div>
            <div className="grid grid-flow-row space-y-4 text-white justify-center">
              <button className="bg-white text-black rounded-full w-full h-12 font-MuseoModerno">
                Contact Us
              </button>
              <div>
                {" "}
                <Phone fill={"#fff"} /> +977 9876543210
              </div>
              <div className="inline-flex gap-2 items-center">
                <Facebook /> <a>facbook.com</a>
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col items-center justify-center ">
            Associated with
            <div className="inline-flex gap-4">
              <div className=" bg-gradient-to-t relative text-center from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <Image
                  src={"/global/ntb.png"}
                  className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 ml-2"
                  alt="Chitwan National Park Icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="bg-gradient-to-t relative from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <Image
                  src={"/global/Emblem_of_Nepal.svg.png"}
                  className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                  alt="Chitwan National Park Icon"
                  width={70}
                  height={70}
                />
              </div>
              <div className="bg-gradient-to-t relative from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <Image
                  src={"/global/Chitwan-National-Park-logo-min.webp"}
                  className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                  alt="Chitwan National Park Icon"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
          {/* <div className="w-1/2 h-10 md:h-20 bg-white absolute bottom-0 [clip-path:polygon(0%0%,100%100%,0%100%)]"></div> */}
          {/* <div className="w-1/2 h-10 md:h-20 bg-white absolute bottom-0 right-0 [clip-path:polygon(100%0%,100%100%,0%100%)]"></div> */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Copyright © 2024. Chitwan Jungle Guide PVT LTD</p>
          <p>Website Designed & Developed by NexusCodeNTech </p>
        </div>
      </footer>
    </>
  );
}
