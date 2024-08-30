import React from "react";
import onepad from "../image/1pad-removebg-preview.png"
import instagram from "../image/instagram.svg"
import envelope from "../image/envelope.svg"
import telephone from "../image/telephone.svg"
import whatsapp from "../image/whatsapp.svg"
import geo from "../image/geo-alt-fill.svg"

function Footer() {
  return (
    <div
      id="Contact"
      class="lg:flex gap-5 mt-[5%] bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 lg:h-[60vh] items-center max-sm:justify-center md:justify-center"
    >
      <div class="flex items-center gap-2 lg:pl-[5%] max-sm:justify-center max-sm:pt-5 md:justify-center md:pt-5">
        <img class="lg:h-[10vh]" src={geo} alt="" />
        <p class="text-white font-medium text-center md:text-xl">
          PlaySport UniGate, Off University Of Ilorin Road, <br /> Tanke,
          Ilorin, Kwara State
        </p>
      </div>
      <div class="md:flex md:items-center md:justify-center">
        <img
          class="lg:h-[50vh] max-sm:h-[30vh] drop-shadow-2xl"
          src={onepad}
          alt=""
        />
      </div>
      <div class="flex gap-5 flex-col lg:pr-5 max-sm:items-center max-sm:pb-5 md:items-center md:pb-5">
        <h1 class="text-white font-semibold text-2xl md:text-3xl">
          <u>Contact Us</u>
        </h1>
        <div class="flex lg:gap-5 flex-col max-sm:items-center max-sm:justify-center max-sm:gap-1 max-sm:font-bold">
          <div class="flex items-center gap-2">
            <a class="flex items-center" href="">
              <img src={instagram} alt="" />
            </a>
            <p class="flex items-center font-medium cursor-pointer md:text-xl">
              @joys_tickjunction
            </p>
          </div>
          <div class="flex items-center gap-2">
            <a href="">
              <img src={envelope} alt="" />
            </a>
            <p class="flex items-center font-medium cursor-pointer md:text-xl">
              joystickjunction3@gmail.com
            </p>
          </div>
          <div class="flex items-center gap-2">
            <a href="">
              <img src={telephone} alt="" />
            </a>
            <p class="flex items-center font-medium cursor-pointer md:text-xl">
              +2349134682828
            </p>
          </div>
          <div class="flex items-center gap-2">
            <a href="https://wa.link/b08iy4">
              <img src={whatsapp} alt="" />
            </a>
            <p class="flex items-center font-medium cursor-pointer md:text-xl">
              +2349042094868
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
