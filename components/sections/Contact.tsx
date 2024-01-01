import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

// import SocialButtons from "../SocialButtons";

export default function Contact() {
  return (
    <div className="flex flex-col items-center place-content-evenly py-10 w-screen h-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col text-2xl">
        <div className="flex flex-row w-full place-content-center gap-1">
          <IoMdMail className="text-3xl transition-colors duration-200 text-neutral-200" />{" "}
          Gmail
        </div>
        <Link
          className={
            "justify-center bottom-4 left-4 hover:scale-110 duration-200 group my-2 text-2xl"
          }
          href="mailto:venturifaku@gmail.com"
          target="_blank"
        >
          <div className="bg-neutral-950 group-hover:bg-neutral-900 duration-200 p-2 w-fit h-fit ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-xl flex items-center justify-center md:cursor-pointer transition-all flex-col">
            <p>venturifaku@gmail.com</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col text-2xl">
        <div className="flex flex-row w-full place-content-center gap-1">
          <BsInstagram className="text-3xl transition-colors duration-200 text-neutral-200" />{" "}
          Instagram
        </div>
        <Link
          className={
            "justify-center bottom-4 left-4 hover:scale-110 duration-200 group my-2 text-2xl"
          }
          href="https://www.instagram.com/fakuventuri"
          data-link="https://www.instagram.com/fakuventuri"
          data-count="instagram @fakuventuri"
          aria-label="Instagram @fakuventuri"
          target="_blank"
        >
          <div className="bg-neutral-950 group-hover:bg-neutral-900 duration-200 p-2 w-fit h-fit ring-1 ring-slate-200/20 shadow-neutral-800 shadow-lg rounded-xl flex items-center justify-center md:cursor-pointer transition-all flex-col">
            <p>@fakuventuri</p>
          </div>
        </Link>
      </div>

      {/* <SocialButtons /> */}
      {/* https://mail.google.com/mail/?view=cm&fs=1&to=venturifaku@gmail.com */}
    </div>
  );
}
