import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/components";
import Footer from "@/components/footer/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "THE BUCKETLISTER - International Tours & Travel",
  description: "Discover curated international journeys from Kyoto's temples to Tuscany's vineyards. Book your next adventure with THE BUCKETLISTER.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
