import "./globals.css";
import { Inter } from "next/font/google";

// Components
// import SocialButtons from "@/components/SocialButtons";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import LoadingPage from "@/components/LoadingPage";

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
    <html
      lang="es"
      className="select-none scroll-smooth overflow-x-hidden hideScrollbar"
    >
      <body className={inter.className + " min-h-screen"}>
        <LoadingPage>
          <Navbar />
          {children}
          <FloatingButtons />
        </LoadingPage>
      </body>
    </html>
  );
}
