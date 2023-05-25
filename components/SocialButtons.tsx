import Link from "next/link";

import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function SocialButtons() {
  return (
    <ul className="flex flex-row items-center justify-between max-w-screen-md gap-2 rounded-full w-fit">
      <li className="w-10 h-10 bg-[#E9E9E9] bg-opacity-75 rounded-full cursor-pointer hover:bg-[#444444] transition-all duration-200 group">
        <Link
          href="https://www.instagram.com/fakuventuri"
          data-link="https://www.instagram.com/fakuventuri"
          data-count="instagram @fakuventuri"
          target="_blank"
          aria-label="Instagram @fakuventuri"
          className="flex items-center justify-center w-full h-full"
        >
          <BsInstagram className="text-2xl transition-colors duration-200 text-neutral-900 group-hover:text-neutral-200" />
        </Link>
      </li>
      <li
        className="w-10 h-10 bg-[#E9E9E9] bg-opacity-75 rounded-full
        cursor-pointer hover:bg-[#444444] transition-all duration-200 group"
      >
        <Link
          href="mailto:venturifaku@gmail.com"
          target="_blank"
          aria-label="Email"
          className="flex items-center justify-center w-full h-full"
        >
          <IoMdMail className="text-2xl transition-colors duration-200 text-neutral-900 group-hover:text-neutral-200" />
        </Link>
      </li>
    </ul>
  );
}
