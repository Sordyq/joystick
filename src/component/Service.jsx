import React from 'react'
import bluepad from "../image/blue-white_pad-removebg-preview.png"
import check from "../image/patch-check-fill.svg"

function Service() {
  return (
    <div id="Service" class="flex flex-col items-center justify-center lg:gap-[50px] mt-[5%]">
    <h1 class="lg:text-5xl max-sm:text-2xl md:text-4xl font-extrabold">Services</h1>
    <div class="lg:flex flex-row lg:px-5 w-full justify-around">
        <div class="flex gap-5 flex-col lg:items-center lg:justify-center max-sm:items-center md:items-center">
            <h1 class="font-bold lg:text-2xl md:text-3xl"><u>Experience Our Services:</u></h1>
            <ul class="flex gap-3 flex-col font-medium max-sm:px-5">
               <div class="flex gap-5">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">FC 24/25</li>
               </div>
               <div class="flex gap-5">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">COD and Mortal Kombat</li>
               </div>
                <div class="flex gap-5">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">Snooker and Air Hockey</li>
                </div>
                <div class="flex gap-5">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">VR Gaming Experience and Tournaments</li>
                </div>
                <div class="flex gap-5">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">PS5 and PS4 Console Repairs and Maintenance</li>
                </div>
            </ul>
        </div>
        <div class="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-10 md:items-center md:mt-10 md:flex md:justify-center">
            <img class="h-[40vh] max-sm:h-[30vh] md:h-[40vh]" src={bluepad} alt=""/>
        </div>
        <div class="flex gap-5 flex-col lg:items-center lg:justify-center max-sm:items-center md:items-center">
            <h1 class="font-bold text-2xl"><u>Shop With Us:</u></h1>
            <ul class="flex gap-3 flex-col font-medium max-sm:px-5">
                <div class="flex gap-5 lg:items-center">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">Video Games: PS5, PS4, and More</li>
                </div>
                <div class="flex gap-5 lg:items-center">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">Gaming Gadgets</li>
                </div>
                <div class="flex gap-5 lg:items-center">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">Gaming Consoles</li>
                </div>
                <div class="flex gap-5 lg:items-center">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">Accessories</li>
                </div>
               <div class="flex gap-5 lg:items-center">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">Games Installation</li>
               </div>
               <div class="flex gap-5 lg:items-center">
                    <img class="lg:h-[4vh] md:h-[3vh]" src={check} alt=""/>
                    <li class="md:text-xl">Board Games: Chess, Monopoly, Scrabble e.t.c</li>
               </div>
            </ul>
            <a class="font-semibold p-3 relative bottom-[10rem] sm:h-20 sm:w-20 sm:bottom-0 sm:left-0 left-12 rounded-full bg-black text-white hover:bg-white hover:text-black" href="https://wa.link/b08iy4"><button>ORDER <br/> NOW</button></a>
        </div>
    </div>
</div>
  )
}

export default Service