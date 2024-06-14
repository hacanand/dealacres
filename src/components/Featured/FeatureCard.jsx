import Image from 'next/image'
import React from 'react'

const FeatureCard = ({
    img,
    text
}) => {
  return (
    <div className="border-1 shadow-lg transition-all overflow-hidden  hover:bg-neutral-200 cursor-pointer    h-full max-h-full flex flex-col max-md:min-w-[250px]">
            <div className="flex-grow md:overflow-clip max-w-full    ">
              <Image
                src={img}
                alt="card"
                className="w-full h-full scale-100 transition-all object-cover hover:scale-[1.3]"
                width={600}
                height={1800}
              />
            </div>
            <div className="flex  justify-center text-center text-base  font-bold   py-2 px-1 shadow border border-t-0 border-gray-400 ">
              {text}
            </div>
          </div>
  )
}

export default FeatureCard
