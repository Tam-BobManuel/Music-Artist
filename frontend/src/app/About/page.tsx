import Image from "next/image";
import PageDown from "@/../public/Icons/Page down arrow2.png"
import Link from "next/link";
import NavBar from "../components/layout/Navbar";
import hOne from "@/../public/Images/About The Artist.png"


export default async function Page() {
  return (
    <main className="w-full bg-black overflow-x-hidden">
      <NavBar/>
      <header className="border-none h-screen w-full bg-[url('/Images/hero-img2.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden">
        <div className="relative mt-[120%] lg:mt-[40%] text-center w-10/12 lg:w-4/12 mx-auto">
          <div className="flex flex-row mt-4 justify-center text-center w-full">
            <Link href="#section-below">
              <Image src={PageDown} alt="page down" />
            </Link>
          </div>
        </div>
      </header>
      <section id="section-below" className="border-none flex flex-col bg-black text-white py-28 gap-12">
        <h1 className="w-9/12 mx-auto text-center lg:text-left text-5xl">
            <Image src={hOne} alt="about the artist"/>
        </h1>
        <p className="w-8/12 mx-auto flex flex-col gap-8 text-3xl">
            <span>With a voice that echoes through the soul, our artist weaves a sonic tapestry that transcends genres and generations. From the heartfelt ballads that showcase their vocal range to the upbeat anthems that get crowds moving, their music is a testament to their passion and dedication. With a unique sound that blends elements of pop, rock, and R&B, they have carved out a niche for themselves in the music industry. Their lyrics, which often touch on themes of love, hope, and perseverance, resonate deeply with fans from all walks of life.</span>
            <span>With a career spanning over a decade, our artist has honed their craft through countless performances, collaborations, and experiments with different sounds. Their music has been praised for its raw emotion, catchy melodies, and thoughtful lyrics. Whether they&#39;re performing solo or with a full band, their energy and charisma on stage are undeniable. With a loyal fan base that continues to grow, our artist is poised to take their music to new heights and inspire a whole new generation of music lovers.</span>
        </p>
      </section>
    </main>
  );
}
