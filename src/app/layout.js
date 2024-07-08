import { Inter, MuseoModerno } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const Museo = MuseoModerno({subsets: ["latin"], weight: "400", variable: "--font-museo"});

export const metadata = {
  title: "Chitwan Junle Tours",
  description: "Chitwan Jungle Tours, Sauraha-Chitwan, Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " " + Museo.variable}>{children}</body>
    </html>
  );
}
