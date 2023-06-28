import "./globals.css";
import { Inter } from "next/font/google";

// Components
// import SocialButtons from "@/components/SocialButtons";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Facundo Venturi's portfolio",
  },
  description: "Facundo Venturi's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="select-none scroll-smooth overflow-x-hidden">
      <body className={inter.className + " min-h-screen"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
