import React from 'react'
import NavBar from '../components/layout/Navbar'
import FeatureCard from '../components/FeatureCard'
import hoodie from "@/../public/Images/pngwing 4.png"
import poster from "@/../public/Images/Frame 4.png"
import blackShirt from "@/../public/Images/merch/blackShirt.png"
import greyShirt from "@/../public/Images/merch/greyShirt.png"
import blackCap from "@/../public/Images/merch/blackCap.png"
import ArtistName from "@/../public/Images/merch/ArtistName.png"

export default async function page() {
  const featureCards = [
    {
      image: blackShirt,
      header: 'T-shirt',
      text: '$$$',
    },
    {
      image: greyShirt,
      header: 'Long-sleeve',
      text: '$$$',
    },
    {
      image: hoodie,
      header: 'Hoodie',
      text: '$$$',
    },
    {
      image: blackCap,
      header: 'baseball cap',
      text: '$$$',
    },
    {
      image: ArtistName,
      header: 'sticker',
      text: '$$$',
    },
    {
      image: poster,
      header: 'Poster',
      text: '$$$',
    },
  ];

  return (
    <main className="bg-black overflow-x-hidden">
      <NavBar/>
      <div className="border-none min-h-screen w-full bg-[url('/Images/Noise&Texture.png')] bg-no-repeat bg-cover bg-center overflow-hidden">
        <div className="mt-[30%] lg:mt-[15%] text-white grid grid-cols-1 lg:grid-cols-3 gap-12 w-10/12 mx-auto items-center">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              image={card.image}
              header={card.header}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </main>
  )
}