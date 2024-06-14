import React from "react";
import Image from "next/image";
import background from "../../../public/all blog/villa.jpg";
import discussion from "../../../public/all blog/discussions.webp";
import FeatureCard from "./FeatureCard";
import FeatureSlider from "../allBlog/FeatureSlider";

const Featured = () => {
  return (
    <div className="md:px-4  flex flex-col gap-16 ">
      <div className="grid grid-cols-2  gap-2 xs:gap-4 md:gap-12  md:h-[26rem] ">
        <div className="col-span-1 py-4   ">
          <div className="flex justify-start my-2 ">
            <h2 className="text-4xl border-b border-b-black font-[Poppins]">
              Featured
            </h2>
          </div>
          <div className="max-md:h-[100%] md:h-[65%] max-w-full">
            <FeatureCard img={discussion} text="Top Coworking Space On Rent in Modle Town Hisar" />
          </div>

        </div>
        <div className="col-span-1 py-4 md:h-[65%] max-md:overflow-hidden  ">
          <div className="flex justify-start my-4">
            <h2 className="text-4xl border-b border-b-black font-[Poppins]">
              New Updates
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-8 md:h-full max-md:min-w-[300px] overflow-x-auto">
            <FeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'} />
            <FeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'} />



            {/* Repeat the above structure for the other New Updates items */}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-8 md:h-full max-md:min-w-[300px] overflow-x-scroll">
            <FeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'} />
            <FeatureCard img={background} text={'Top Coworking Space On Rent in Modle Town Hisar'} />



            {/* Repeat the above structure for the other New Updates items */}
          </div>

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-12 ">
        <div className="col-span-1 md:col-span-2 max-h-[300px] h-full">
          <div className="max-h-[300px] h-[70%] ">
            <FeatureCard img={background} text={"Top Coworking Space On Rent in Modle Town Hisar"} />

          </div>
        </div>
        <div className="col-span-1 md:col-span-4 max-h-[300px] h-full ">

          {/* <FeatureCard img={background} text={"Top Coworking Space On Rent in Modle Town Hisar"}/> */}
          <div className="w-full h-[70%]">
            <FeatureSlider img={background} title={"Top Coworking Space On Rent in Modle Town Hisar"} />

          </div>

        </div>
      </div>
    </div>
  );
};

export default Featured;
