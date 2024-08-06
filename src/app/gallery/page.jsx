"use client"
import { useState } from "react";
import Image from "next/image";
import "./gallery.css";

import banner from "../../../public/Assets/i2.png";
import img1 from "../../../public/Assets/j8.jpg";
import img2 from "../../../public/Assets/j4.jpg";
import img3 from "../../../public/Assets/i7.jpg";
import img4 from "../../../public/Assets/i6.jpg";
import img5 from "../../../public/Assets/j3.jpg";
import img6 from "../../../public/Assets/i10.jpg";
import img7 from "../../../public/Assets/j6.jpg";
import img8 from "../../../public/Assets/i8.jpg";
import img9 from "../../../public/Assets/j9.jpg";
// import { Mukta, MuseoModerno, Poppins } from "next/font/google";


const items = [
  { src: img1, alt: "Image 1", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img2, alt: "Image 2", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img3, alt: "Image 3", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img4, alt: "Image 4", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img5, alt: "Image 5", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img6, alt: "Image 6", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img7, alt: "Image 7", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img8, alt: "Image 8", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img9, alt: "Image 9", text: ["Beauty of Birds:", "Capture at CNP"] },
]

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  return (
    <>
      
      <div className="Section-ItineraryHero relative flex">
        <Image className="w-full bg-cover bg-center rounded-tl-[25] rounded-br-[25] " src={banner} />
        
        <div className="absolute bottom-4 left-1/2 -translate-x-2/4 -translate-y-2/4 max-md:-bottom-2 max-lg:-bottom-1 max-xl:bottom-0 max-2xl:bottom-1">
          
          <p
            className={
              "font-MuseoModerno text-white text-[5rem] font-bold tracking-[2px] max-md:text-[2rem] max-lg:text-[3rem] max-xl:text-[4rem] max-2xl:text-[5rem]"
            }
          >
            Gallery
          </p>
        </div>
      </div>



      <div className="container mx-auto px-4 py-[10rem]">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {paginatedItems.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <Image
          src={item.src}
          alt={item.alt}
          className="w-full sm:size-[12rem] md:size-[15rem] lg:size-[17rem] xl:size-[19rem] 2xl:size-[21rem]
           object-cover rounded-[2rem] cursor-pointer  transition ease-in"
        />
        
        <span className="text-black font-bold text-md sm:text-base md:text-lg lg:text-xl my-[1rem] font-MuseoModerno text-center cursor-pointer ">
        {item.text[0]} <br className=" md:inline lg:hidden" /> {item.text[1]}
        </span>
      </div>
    ))}
  </div>
</div>

<PaginationDemo currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
<br />

    </>
  );
}



// pagination
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


export function PaginationDemo({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };


  return (
    <Pagination className="pagination">
      <PaginationContent className="pagination-content">
        <PaginationItem className="pagination-item">
          <PaginationPrevious className="pagination-previous" onClick={handlePrevious} />
        </PaginationItem>
        
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem className="pagination-item" key={index}>
            <PaginationLink className={`pagination-link ${currentPage === index + 1 ? 'is-active' : ''}`} onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        
        <PaginationItem className="pagination-item">
          <PaginationNext className="pagination-next" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
