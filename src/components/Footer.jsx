import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <p className='font-bold'>ABOUT</p>
            <p>How Airbnb Works</p>
            <p>NewsRoom</p>
            <p>Investors</p>
            <p>AirbnbPlus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <p className='font-bold'>COMMUNITY</p>
            <p>Accesibility</p>
            <p>This is not a real site</p>
            <p>Its pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>Cans</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <p className='font-bold'>SUPPORT</p>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Investors</p>
            <p>AirbnbPlus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <p className='font-bold'>HOST</p>
            <p>For the Win</p>
            <p>NewsRoom</p>
            <p>Investors</p>
            <p>AirbnbPlus</p>
            <p>Airbnb Luxe</p>
        </div>

    </div>
  )
}

export default Footer