'use client'

import Image from "next/image";
import "tailwindcss/tailwind.css";

import { homeData } from "@/data/homeData/homeData";


const Home: React.FC = () => {

  if (!homeData || !homeData.aboutMe) {
    return <div>Upppsssss..... Przepraszamy za awarię</div>
  }
  return ( 
    <div className="w-full h-full flex px-8">
      <div className="h-full w-2/3 py-10 pr-5">
        <div className="text-TitleNameFont">
          {homeData.title}
        </div>
        <div className="py-6 text-SmallTitleFont">
          {homeData.text}
        </div>
        <div className="text-NormalTextFont">
          <p dangerouslySetInnerHTML={{ __html: homeData.aboutMe.replace(/\n/g, '<br />') }} />
        </div>
      </div>
      <div className="w-1/3 h-full top-0 left-0 flex items-start justify-center pt-10 p-5">
          <Image
            src='/images/MartaKrysztofikImage.jpg'
            alt="Zdjęcie Marta Krysztofik"
            width={1000}
            height={2000}
            className="object-cover"
          />
      </div>
    </div>
  );
};

export default Home;