'use client';
// MobileOption.js
import React, { useState } from "react";
import { cardData } from "./mobiledata";
import Image from 'next/image';

const MobileOption = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (cardId) => {
    setActiveCard(cardId);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="flex flex-col justify-center px-4">
      <div>
        <h2 className="text-xl font-[Poppins] font-bold pt-3 pb-2">
          GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
        </h2>
      </div>
      <div className="flex flex-row items-start gap-6 max-w-full overflow-x-auto cursor-pointer overflow-y-hidden">
        {cardData.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => handleCardHover(card.id)}
            onMouseLeave={handleCardLeave}
          >
            <div className="flex flex-col w-[250px] rounded-md ">
              <div className="rounded-md">
                <Image src={card.imageUrl} alt="house image" width={250} height={250} />
              </div>
              <div className={`text-md py-2 text-center  ${activeCard === card.id ? 'bg-blue-300' : ''}`}>
                {card.title}
              </div>
              {activeCard === card.id && (
                <div className="bg-blue-300 shadow-md p-2 ">
                  <ul>
                    {card.links.map((link, index) => (
                      <li key={index} className="text-sm">{link}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileOption;
