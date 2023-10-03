"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as MenuLink, menu } from "contentlayer/generated";
import LinkActive from "@/assets/images/navbar-splash-background-white.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (link: string) => {
    return link === pathname || link === `/${pathname.split("/").at(1)}`;
  };

  return (
    <nav className="absolute flex items-center w-full h-20 text-white text-lg z-10">
      <div className="hidden lg:block container mx-auto px-8 lg:px-24">
        {menu.entries.map((entry: MenuLink) => {
          return (
            <Link
              key={entry.label}
              href={entry.link}
              className={`${
                isActive(entry.link) ? "text-primary font-bold" : ""
              } relative mx-4 px-4`}
            >
              {isActive(entry.link) && (
                <Image
                  src={LinkActive}
                  alt="Active Link Background"
                  className="absolute top-0 left-0 translate-x-2 -translate-y-4 -z-10 scale-150"
                />
              )}
              {entry.label}
            </Link>
          );
        })}
      </div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="lg:hidden absolute flex items-center justify-center top-0 left-0 w-10 h-10 m-8 z-20"
        aria-label="Menu Toggler"
      >
        <FaXmark className={`${isOpen ? "" : "hidden"} w-8 h-8`} />
        <FaBars className={`${!isOpen ? "" : "hidden"} w-6 h-6`} />
      </button>
      <div
        className={`${
          !isOpen ? "h-0" : "h-screen"
        } lg:hidden absolute top-0 flex flex-col items-center justify-center w-screen transition-all duration-200 overflow-hidden bg-dark z-10`}
        onClick={() => setIsOpen(false)}
      >
        {menu.entries.map((entry: MenuLink) => {
          return (
            <Link
              key={entry.label}
              href={entry.link}
              className={`${
                isActive(entry.link) ? "text-primary font-bold" : ""
              } relative m-2 px-4`}
            >
              {isActive(entry.link) && (
                <Image
                  src={LinkActive}
                  alt="Active Link Background"
                  className="absolute top-0 left-0 translate-x-2 -translate-y-2 -z-10 scale-150"
                />
              )}
              {entry.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
