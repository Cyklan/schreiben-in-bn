"use client";
import Link from "next/link";
import { Work_Sans } from "next/font/google";
import { useState } from "react";

const displayFont = Work_Sans({ weight: "400", subsets: ["latin"] });

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={displayFont.className}>
      <input
        checked={isOpen}
        type="checkbox"
        className="drawer-toggle"
        id="mobile-nav"
      />
      <nav className="drawer-content navbar bg-base-100 mb-4">
        <div className="flex-none">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="btn btn-square btn-ghost 2xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <Link href="/" className="text-2xl cursor-pointer font-bold">
            Schreiben in Bad Nauheim
          </Link>
        </div>
        <ul className="flex-none gap-4 hidden 2xl:flex">
          {links.slice(1).map(({ href, title }) => (
            <li key={`nav-link-top-${href}`}>
              <Link className="btn btn-ghost text-xl" href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="drawer-side z-10">
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {links.map(({ href, title }) => (
            <li
              onClick={() => {
                setIsOpen(false);
              }}
              key={`nav-link-top-${href}`}
            >
              <Link className="btn btn-ghost text-xl" href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const links = [
  {
    title: "Start",
    href: "/",
  },
  {
    title: "Lektorat",
    href: "/lektorat",
  },
  {
    title: "Öffentlichkeitsarbeit",
    href: "/oeffentlichkeitsarbeit",
  },
  {
    title: "Referenzen",
    href: "/referenzen",
  },
  {
    title: "Honorar",
    href: "/honorar",
  },
  {
    title: "Meine Bücher",
    href: "/buecher",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];
