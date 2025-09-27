import { Geist, Geist_Mono } from "next/font/google";
import "../pages/globals.css";
import PageChrome from "@/components/layout/PageChrome";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import GlobalEnquiryPopupManager from "@/components/common/EnquiryPopup/GlobalEnquiryPopupManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <GoogleAnalytics />
      <GlobalEnquiryPopupManager />
      <PageChrome>
        <Component {...pageProps} />
      </PageChrome>
    </div>
  );
}
