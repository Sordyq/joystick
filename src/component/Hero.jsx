import React from "react";

function Hero() {
  return (
    <div>
      <div className=" Hero flex mt-[3%] flex-col items-center gap-5">
        <h1 className="hero font-black text-7xl text-gray-00">
          JoyStick Junction
        </h1>
        <p className="font-semibold text-black text-2xl">
          Start Your Gaming Journey Today!
        </p>
        <div class="flex items-center justify-center lg:mt-[19%] max-sm:mt-[10%]">
          <a
            class="font-semibold p-3 rounded-2xl bg-black text-white lg:w-full hover:bg-white hover:text-black"
            href="https://wa.link/b08iy4"
          >
            <button>Book A Session With Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
