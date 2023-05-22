import "./globals.css";
import { Inter } from "next/font/google";

// Components
import ScrollIndicator from "@/components/ScrollIndicator";
import SocialButtons from "@/components/SocialButtons";
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
    <html lang="es" className="select-none scroll-smooth">
      <body className={inter.className + " min-h-screen"}>
        <Navbar />
        <ScrollIndicator />

        <div className="fixed z-20 bottom-4 right-4">
          <SocialButtons />
        </div>

        {children}
      </body>
    </html>
  );
}
