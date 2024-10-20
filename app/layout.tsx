import type { Metadata } from "next";
import "./globals.css";
import { Background } from "@/components/background";
import NavbarComponent from "@/components/Navbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Waa Tech Ltd.",
  description: "Waa Tech Ltd. - Leading provider of web technologies, SEO, and digital marketing services.",
  keywords:
    "Waa Tech, web technologies, web development, SEO, digital marketing, website development, web design",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description || undefined} />
        <meta
          name="keywords"
          content={
            typeof metadata.keywords === "string"
              ? metadata.keywords
              : metadata.keywords?.join(", ") || undefined
          }
        />
     
        <meta name="google-site-verification" content="mlkvOHuVQMBkrgKkJWoUnLMcGhEhme1G2UC4blaFwXY" />

        <title>Waa Tech Ltd.</title>
      </head>
      <body>
        <NavbarComponent/>
        <Background />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
