'use client'
import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavigationBroker = () => {
  
  const navigationItems = [
    'location-details',
    'property-profile',
    'photos',
    'pricing',
    'amenities'
  
  ];

  const currentPath = usePathname();

  let flag=0;

  let n=currentPath.split('/').length

  let xy=currentPath.split('/')[n-1]
  
  if(xy.includes('amenities')){
  flag=4;
  }else if(xy.includes('pricing')){
    flag=3;
  }else if(xy.includes('photos')){
    flag=2;
  }else if(xy.includes('property')){
    flag=1;
  }

  const generateLink = (subPath) => `${subPath}`;

  const getLinkStyle = (index) => ({
    color:
       index <flag
        ? '#40A2E3'
        : '#000000',
    fontWeight:
      index <flag  
        ? 'bold'
        : 'normal',
    margin: '4px',
  });

  const getGrowStyle = (index) => ({
    borderColor: index === navigationItems.length - 1 ? '#40A2E3' : '#000000',
  });

  return (
    <section className='container mx-auto mt-12'>
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-2 w-full lg:w-4/5 mx-auto rounded-3xl bg-[#c6e8fd]">

        
        <div className='font-bold text-[#40A2E3]'>Basic Details</div>
        <div className="grow border-b border-black"></div>
        

        {navigationItems.map((item, index) => (

          <React.Fragment key={index}>
            
            <Link href={generateLink(item)} passHref>
              <div style={getLinkStyle(index)} >{item.replace('-', ' ')}</div>
            </Link>
            {index < navigationItems.length - 1 && (
              <div
                className="grow border-b border-black"
                style={getGrowStyle(index)}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default NavigationBroker;



