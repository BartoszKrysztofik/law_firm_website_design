import Link from "next/link";
import "tailwindcss/tailwind.css";

type TopbarProps = {
  descriptions?: string;
  descriptions2?: string;
  descriptions3?: string;
  iconHome?: React.ReactElement;
};

const Topbar: React.FC<TopbarProps> = ({
  descriptions,
  descriptions2,
  descriptions3,
  iconHome,
}) => {
  return (
    <div className="flex h-full space-x-10 max-h-120 bg-DarkGreen items-center justify-between shadow-inner-shadow px-10">
      <Link
        className="flex flex-row items-center justify-center px-8"
        href="/home"
        passHref
      >
        {iconHome}
      </Link>
      <div className="text-LawName text-White flex justify-center items-center">
        {descriptions}
              
      </div>
      <div className="text-ButtonFont text-White flex justify-end items-center">
        {descriptions2}
      </div>
      <div className="text-ButtonFont text-White flex justify-center items-center">
        {descriptions3}
      </div>
    </div>
  );
};

export default Topbar;