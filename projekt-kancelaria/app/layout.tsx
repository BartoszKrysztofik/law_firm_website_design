import type { Metadata } from "next";
import "tailwindcss/tailwind.css";
import "./globals.css";

import LinkedInIcon from "@/components/graphicComponents/LinkedIn";
import LogoKancelariaIcon from "@/components/graphicComponents/LogoKancelaria";
import Bookmarks from "@/features/landing/components/Bookmarks";
import Footer from "@/features/landing/components/Footer";
import Topbar from "@/features/landing/components/Topbar";

export const metadata: Metadata = {
  title: "Kancelaria Adwokacka Marta Krysztofik",
  description: "Kancearia Adwokacka Marta Krysztofik",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="w-full h-full">
      <body className="h-full w-full flex flex-col">
        <div className="flex-auto max-h-170">
          <Topbar
            iconHome={
              <LogoKancelariaIcon
                lineColor="RedAllert"
                backgroundColor="transparent"
                width="60"
                height="60"
              />
            }
            descriptions="Kancelaria Adwokacka Marta Krysztofik"
            descriptions2="tel.: 606 358 884"
          />
          <Bookmarks
            descriptions1="O mnie"
            descriptions2="Specjalizacja"
            href2="specialization"
            descriptions3="Blog"
            href3="blog"
            descriptions4="Kontakt"
            href4="contact"
          />
        </div>
        <div className="flex-1 overflow-y-auto mt-5">
          {children}
        </div>
        <Footer 
          iconHome={
            <LinkedInIcon
              width="20"
              height="20"
            />
          }
          descriptions="Realizacja:"
          descriptions2="Bartosz Krysztofik"
          descriptions3="Kontakt: +48 662 238 557"
        />
      </body>
    </html>
  );
};

export default RootLayout;