import React from 'react'
import NavBar from '../components/layout/Navbar'
import FeatureCard from '../components/FeatureCard'
import artOne from "@/../public/Images/artworks-jLp565GRJXzsnqfs-KeINFg-t500x500 1.png"
import artTwo from "@/../public/Images/music/artworks-jLp565GRJXzsnqfs-KeINFg-t500x500 1.png"
import artThree from "@/../public/Images/music/artworks-jLp565GRJXzsnqfs-KeffrINFg-t500x500 1.png"
import artFour from "@/../public/Images/music/artworks-jLp565GRJXzsnqfs-KeINFg-ffrrgt500x500 1.png"
import artFive from "@/../public/Images/music/artworks-jLp565GRJXzsnqfs-KefgergeINFg-t500x500 1.png"
import artSix from "@/../public/Images/music/artworks-jLp565GRJXzsnqfs-KeINFvkefvjefg-t500x500 1.png"

export default async function page() {
  const featureCards = [
    {
      image: artOne,
      header: 'Metropolitan',
      text: 'Music Artist',
    },
    {
      image: artTwo,
      header: 'Long-sleeve',
      text: 'Music Artist',
    },
    {
      image: artThree,
      header: 'Hoodie',
      text: 'Music Artist',
    },
    {
      image: artFour,
      header: 'baseball cap',
      text: 'Music Artist',
    },
    {
      image: artFive,
      header: 'sticker',
      text: 'Music Artist',
    },
    {
      image: artSix,
      header: 'Poster',
      text: 'Music Artist',
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