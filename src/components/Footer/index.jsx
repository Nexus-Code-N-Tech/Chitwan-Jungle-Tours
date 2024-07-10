export default function () {
  return (
    <footer>

      <div className="bg-purple-400 h-[20vh] flex justify-center items-center text-white">
        IMAGE-4o4 {"[Not Found]"} 💀
      </div>
      <iframe
        className="w-full h-[50vh]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297165.25479320704!2d84.13896016872056!3d27.555248274147228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399493f3cf54cc45%3A0xc0759aebafb6a8df!2sAdhikari%20Palace!5e0!3m2!1sen!2snp!4v1720460598987!5m2!1sen!2snp"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="bg-[#401A33] h-[30rem] relative">
        <div className="w-1/2 h-10 md:h-20 bg-inherit absolute transform -translate-y-full [clip-path:polygon(0%0%,100%100%,0%100%)]"></div>
        <div className="w-1/2 h-10 md:h-20 bg-inherit absolute transform -translate-y-full right-0 [clip-path:polygon(100%0%,100%100%,0%100%)]"></div>
        <div className="ml-10 grid grid-flow-col items-center gap-2 h-1/2">
          <div className="flex text-white flex-col justify-center items-center">
            <a className="text-xl">Contats</a>
            <a>Meet Our Guide</a>
            <a>Our Story</a>
            <a>Blogs</a>
          </div>
          <div className="flex text-white flex-col justify-center items-center">
            <a className="text-xl ">Contats</a>
            <a>Meet Our Guide</a>
            <a>Our Story</a>
            <a>Blogs</a>
          </div>
          <div className="flex text-white flex-col justify-center items-center">
            <button className="bg-white text-black rounded-xl w-1/2 h-12 font-MuseoModerno">
              Contact Us
            </button>
            <div>📞+977 9876543210</div>
            <div>💀 facbook.com</div>
          </div>
        </div>
        <div className="text-white flex flex-col items-center justify-center ">
          Associated with
          <div className="inline-flex gap-4">
            <div className="grid">💀</div>
            <div className="grid">💀</div>
            <div className="grid">💀</div>
          </div>
        </div>
        <div className="w-1/2 h-10 md:h-20 bg-white absolute bottom-0 [clip-path:polygon(0%0%,100%100%,0%100%)]"></div>
        <div className="w-1/2 h-10 md:h-20 bg-white absolute bottom-0 right-0 [clip-path:polygon(100%0%,100%100%,0%100%)]"></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Copyright © 2024. Chitwan Jungle Guide PVT LTD</p>
        <p>Website Designed & Developed by NexusCodeNTech </p>
      </div>
    </footer>
  );
}
