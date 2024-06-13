"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// config
import config from "@/config/general";

const Header = () => {
  const [buttonText, setButtonText] = useState("Register");

  const handleClick = (e) => {
    e.preventDefault();
    setButtonText("Coming soon...");
    setTimeout(() => {
      setButtonText("Register");
    }, 3000);
  };

  return (
    <header className="flex-col sm:flex-row flex justify-between items-start">
      <Image src={"/logo.svg"} width={400} height={120} alt={config.title} />
      <nav>
        <ul className="flex sm:mt-0 mt-4 items-center lg:gap-7 gap-3 font-medium text-base sm:text-lg">
          <li className="text-black">
            <Link href={config.socials.twitter} passHref legacyBehavior>
              <a
                className="px-5 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/x-icon.svg" alt="X" width={36} height={36} />
              </a>
            </Link>
          </li>
          <li className="bg-activeButton text-white rounded py-2">
            <a
              className="px-5 py-2 rounded cursor-pointer"
              onClick={handleClick}
            >
              {buttonText}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
