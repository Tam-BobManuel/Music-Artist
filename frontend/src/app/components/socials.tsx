// components/Socials.js
import Image from "next/image";
import Insta from "@/../public/Icons/Instagram.png"
import X from "@/../public/Icons/Twitter.png"
import youtube from "@/../public/Icons/Youtube.png"
import TikTok from "@/../public/Icons/Tik Tok.png"
import AppleMusic from "@/../public/Icons/Apple Music.png"
import Spotify from "@/../public/Icons/Spotify.png"
import Soundcloud from "@/../public/Icons/Soundcloud.png"
import Link from "next/link";

const socials = [
  {
    href: '#',
    image: Insta,
    alt: 'Instagram',
  },
  {
    href: '#',
    image: X,
    alt: 'Twitter',
  },
  {
    href: '#',
    image: youtube,
    alt: 'Youtube',
  },
  {
    href: '#',
    image: TikTok,
    alt: 'Tiktok',
  },
  {
    href: '#',
    image: AppleMusic,
    alt: 'Apple Music',
  },
  {
    href: '#',
    image: Spotify,
    alt: 'Spotify',
  },
  {
    href: '#',
    image: Soundcloud,
    alt: 'Soundcloud',
  },
];

const Socials = () => {
  return (
  <div className="flex flex-row gap-2 mt-4 justify-center items-center text-center w-full">
    {socials.map((social, index) => (
      <Link key={index} href={social.href}>
        <Image src={social.image} alt={social.alt} />
      </Link>
    ))}
  </div>
  );
};

export default Socials;