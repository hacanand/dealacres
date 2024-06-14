import React from 'react'
import styles from './privacy.module.css';

const PrivacyBanner = () => {
  return (
    <div className={`bg-gradient-to-r from-teal-400 to-blue-700
    hover:from-teal-600 hover:to-indigo-500 font-bold text-6xl md:text-8xl text-white min-h-[300px] w-full flex flex-col items-center justify-center text-center`}>
          Privacy Policy
    </div>
  )
}

export default PrivacyBanner
