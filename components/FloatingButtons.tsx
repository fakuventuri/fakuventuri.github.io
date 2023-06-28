import Link from "next/link";
import Image from "next/image";

import GitHubLogo from "@/public/stack/github.svg";
import CVsvg from "@/public/cv.svg";
import DownloadSVG from "@/public/download.svg";

export default function FloatingButtons() {
  return (
    <>
      <Link
        className={
          "fixed justify-center bottom-4 left-4 hover:scale-110 duration-200 group"
        }
        href="https://github.com/fakuventuri"
        target="_blank"
      >
        <div className="bg-neutral-950 group-hover:bg-neutral-900 duration-200 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-full flex items-center justify-center md:cursor-pointer transition-all">
          <Image src={GitHubLogo} alt={"GH"} />
        </div>
      </Link>

      <a
        href="/CV_Facundo_Venturi.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={
          "fixed justify-center bottom-4 left-16 hover:scale-110 duration-200 group"
        }
      >
        <div className="bg-neutral-950 group-hover:bg-neutral-900 duration-200 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-full flex items-center justify-center md:cursor-pointer transition-all">
          <Image
            src={CVsvg}
            alt={"CV"}
            className="absolute w-6 h-6 group-hover:opacity-0 duration-500 delay-300 group-hover:delay-0"
          />
          <span className="opacity-0 absolute w-6 h-6 group-hover:opacity-100 duration-500 delay-300 group-hover:delay-0 text-center">
            CV
          </span>
          {/* <Image
            src={DownloadSVG}
            alt={"CV"}
            className="opacity-0 absolute w-6 h-6 group-hover:opacity-100 duration-500 delay-200 group-hover:delay-75"
          /> */}
        </div>
      </a>
    </>
  );
}
