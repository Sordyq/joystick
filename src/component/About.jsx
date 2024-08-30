import React from "react";

function About() {
  return (
    <div
      id="About"
      class="flex items-center justify-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 md:px-5"
    >
      <div class="flex items-center justify-center flex-col gap-4 mt-[5%] mb-[5%]">
        <h1 class="lg:text-5xl max-sm:text-2xl md:text-4xl text-white font-extrabold">
          About Us
        </h1>
        <p class="text-center lg:w-[40%] font-medium text-2xl max-sm:px-5 md:text-3xl">
          JoyStick Junction (Paradise For Gamers) is a place where you and your
          team mates can come and experience fast and seamless gaming
          experience. Our Gaming Hall is packed with industry standards gaming
          equipment.
        </p>
      </div>
    </div>
  );
}

export default About;
