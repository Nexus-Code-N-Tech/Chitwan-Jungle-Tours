import { Inter, MuseoModerno, Poppins, Murecho, Museo } from "next/font/google";

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

export const metadata = {
  title: "Chitwan Junle Tours",
  description: "Chitwan Jungle Tours, Sauraha-Chitwan, Nepal",
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
          murecho.variable
        }
      >
        {children}
      </body>
    </html>
  );
}
