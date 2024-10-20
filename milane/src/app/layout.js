import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Script from "next/script";

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
  title: "Milane",
  description: "Generated by create next app",
  link: []
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
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
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
      </body>
    </html>
  );
}