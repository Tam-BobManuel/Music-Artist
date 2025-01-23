// FeatureCard.js
import Image, { StaticImageData } from 'next/image';

interface FeatureCardProps {
  image: string | StaticImageData;
  header: string;
  text: string;
  align?: 'center' | 'right';
}

const FeatureCard = ({ image, header, text, align = 'center' }: FeatureCardProps) => {
  return (
    <div className={`flex flex-col items-${align} mx-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}>
    <div className="overflow-hidden rounded-lg cursor-pointer group-hover:grayscale">
      <Image 
        src={image} 
        alt={header} 
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <h2 className="text-lg font-bold mt-4 transition-colors duration-300">
      {header}
    </h2>
    <p className="text-sm group-hover:opacity-100 transition-opacity duration-300">
      {text}
    </p>
  </div>
  );
};

export default FeatureCard;