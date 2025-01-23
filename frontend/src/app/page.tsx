import Image from "next/image";
import NavBar from "./components/layout/Navbar";
import PageDown from "@/../public/Icons/Page down arrow.png"
import Link from "next/link";
import FeatureCard from "./components/FeatureCard";
import artOne from "@/../public/Images/artworks-jLp565GRJXzsnqfs-KeINFg-t500x500 1.png"
import hoodie from "@/../public/Images/pngwing 4.png"
import poster from "@/../public/Images/Frame 4.png"
import Socials from "./components/socials";


export default function Home() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      <NavBar/>
      <header className="border-none h-screen w-full bg-[url('/Images/hero-img.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden">
        <div className="relative mt-[90%] lg:mt-[30%] text-center w-10/12 lg:w-4/12 mx-auto">
          <div className="border rounded-lg bg-none py-2 text-white text-bold w-7/12 mx-auto border-[#00b18b] border-2">Stream/Download New Music</div>
            <Socials />
          <div className="flex flex-row mt-4 justify-center text-center w-full">
            <Link href="#section-below">
              <Image src={PageDown} alt="page down" />
            </Link>
          </div>
        </div>
      </header>
      <section id="section-below" className="border-none flex flex-col bg-black text-white py-28 gap-12">
        <h1 className="w-9/12 mx-auto text-center lg:text-left text-5xl">Latest</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          <FeatureCard
            image={artOne}
            header="Metropolitan"
            text="Music Artist"  
            align="right"
          />
          <FeatureCard
            image={hoodie}
            header="Hoodie"
            text="$$$"
          />
          <FeatureCard
            image={poster}
            header="Poster"
            text="$$$"
          />
        </div>
      </section>
    </main>
  );
}
