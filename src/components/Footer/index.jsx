"use client";
import Image from "next/image";
import Phone from "@/components/SVG/phone";
import Facebook from "@/components/SVG/facebook";
import Link from "next/link";

export default function () {
  return (
    <>
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
          className="w-full h-[30vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297165.25479320704!2d84.13896016872056!3d27.555248274147228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399493f3cf54cc45%3A0xc0759aebafb6a8df!2sAdhikari%20Palace!5e0!3m2!1sen!2snp!4v1720460598987!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="bg-[#401A33] h-[25rem] lg:text-lg lg:h-[30rem] relative [clip-path:polygon(100%0%,50%10%,0%0%,0%80%,50%100%,100%80%)] lg:[clip-path:polygon(100%0%,50%10%,0%0%,0%85%,50%100%,100%85%)]  -translate-y-[14%] -mt-[1.5px]">
          <div className="grid grid-flow-col-dense items-center gap-2 h-[60%]">
            <div className="hidden lg:block text-white space-y-4 text-center">
              <a className="text-xl">Contacts</a>
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
              <a className="text-xl">Contacts</a>
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
              <Link href="/contact">
                <button className="bg-white text-black rounded-full w-full h-12 font-MuseoModerno">
                  Contact Us
                </button>
              </Link>

              <div>
                <Phone fill={"#fff"} />
                <a href="tel:+9779876543210">+977 9876543210</a>
              </div>
              <div className="inline-flex gap-2 items-center">
                <Facebook />{" "}
                <a
                  href="https://www.facebook.com/fule.chaudhary"
                  target="_blank"
                >
                  facbook.com
                </a>
              </div>
            </div>
          </div>
          <div className="-mt-6 text-white flex flex-col items-center justify-center text-2xl">
            Associated with
            <div className="inline-flex mt-4 gap-4">
              <div className="bg-gradient-to-t relative text-center from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <a
                  href="https://ntb.gov.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/global/ntb.png"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-2"
                    alt="Nepal tourism Board"
                    width={60}
                    height={60}
                  />
                </a>
              </div>

              <div className="bg-gradient-to-t relative from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <a
                  href="https://www.nepal.gov.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/global/Emblem_of_Nepal.svg.png"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt="Nepal Government"
                    width={70}
                    height={70}
                  />
                </a>
              </div>
              <div className="bg-gradient-to-t relative from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <a
                  href="https://chitwannationalpark.gov.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/global/Chitwan-National-Park-logo-min.webp"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt="Chitwan National Park"
                    width={80}
                    height={80}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Copyright © 2024. Chitwan Jungle Guide PVT LTD</p>
          <p>Website Designed & Developed by NexusCodeNTech</p>
        </div>
      </footer>
    </>
  );
}
