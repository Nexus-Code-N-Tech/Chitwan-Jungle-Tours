import {
  Inter,
  MuseoModerno,
  Poppins,
  Murecho,
  Museo,
  Cedarville_Cursive,
} from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Top";
import "./globals.css";

const museo = MuseoModerno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-museo",
});
const poopins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const murecho = Murecho({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-murecho",
});

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
});

export const metadata = {
  title: "Chitwan Jungle Tours",
  description: "Chitwan Jungle Tours, Sauraha-Chitwan, Nepal",
  icon:"contact-favicon.svg"
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          poopins.className +
          " " +
          museo.variable +
          " " +
          poopins.variable +
          "" +
          murecho.variable +
          "" +
          cursive.variable
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
