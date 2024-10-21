import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata = {
  title: "Milane - Incredible and Delicious Food",
  description: "Discover Milane, a restaurant offering incredible and delicious food crafted with the finest ingredients. Savor a dining experience that will leave you wanting more.",
  keywords: ["Milane", "restaurant", "incredible food", "delicious food", "fine dining", "gourmet", "culinary experience", "food lovers"],
  author: "Milane Restaurant",
  link: [
    { rel: "canonical", href: "https://www.milane.com" }
  ],

  twitter: {
    card: "summary_large_image",
    title: "Milane - Incredible and Delicious Food",
    description: "Indulge in delicious food at Milane, where every dish is crafted with passion and expertise.",
    images: [
      {
        url: "/assets/images/image.png",
        alt: "Milane Restaurant"
      }
    ]
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="loaded">
        <div className="top">
          {/* <Preloader /> */}
          <TopBar />
          <Header />

          {children}
          <Footer />
          <a
            href="#top"
            className="back-top-btn active"
            aria-label="back to top"
            data-back-top-btn
          >
            <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
          </a>
        </div>
        <ToastContainer />
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      </body>
    </html>
  );
}
