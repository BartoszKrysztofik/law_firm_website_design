import Link from "next/link";
import "tailwindcss/tailwind.css";

type FooterProps = {
  descriptions?: string;
  descriptions2?: string;
  descriptions3?: string;
  iconHome?: React.ReactElement;
};

const Footer: React.FC<FooterProps> = ({
  descriptions,
  descriptions2,
  descriptions3,
  iconHome,
}) => {
  return (
    <div className="flex h-full space-x-10 max-h-40 bg-DarkGreen items-center justify-between shadow-inner-shadow px-10">
      <div className="flex items-center space-x-5">
        <div className="text-FooterFont text-White flex justify-center items-center">
          {descriptions}          
        </div>
        <div className="text-FooterFont text-White flex justify-end items-center">
          {descriptions2}
        </div>
      </div>    
      <div className="flex items-center">
        <div className="text-FooterFont text-White flex justify-center items-center">
          {descriptions3}
        </div>
        <Link
          className="flex flex-row items-center justify-center px-8"
          href="https://www.linkedin.com/in/bartosz-krysztofik/"
          passHref
          target='_blank'
          rel='noopener noreferrer'
        >
          {iconHome}
        </Link>
      </div>
    </div>
  );
};

export default Footer;