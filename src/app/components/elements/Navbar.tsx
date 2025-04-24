"use client";
import "@/styles/globals.css";
import Container from "../shared/Container";
import Image from "next/image";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../store/ThemeStore";

const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#features", text: "Features" },
];

const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();

  return (
    <div className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="relative flex w-full justify-between gap-6">
          <div className="relative inline-flex min-w-max">
            <Image
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="Avatar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="text-heading-1 inline-flex text-lg font-semibold">
              LeTo-DoDeFrance
            </div>
          </div>

          <div className="bg-body border-x-box-border absolute top-full left-0 flex h-0 w-full flex-col overflow-hidden border-x lg:static lg:top-0 lg:h-auto lg:flex-row lg:items-center lg:justify-between lg:border-x-0 lg:bg-transparent">
            <ul className="border-box-border text-heading-2 flex w-full flex-col gap-x-3 gap-y-4 border-t px-6 pt-6 text-lg lg:flex-row lg:items-center lg:justify-center lg:border-t-0 lg:px-0 lg:pt-0">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
            <div className="border-box-border flex w-full items-center border-b px-6 pb-6 sm:w-max lg:min-w-max lg:border-0 lg:px-0 lg:pb-0">
              <BtnLink text="Get Started" href="#cta" className="" />
            </div>
          </div>
          <div className="flex min-w-max items-center gap-x-3">
            <button
              onClick={toggleTheme}
              className="text-heading-2 border-box-border relative flex cursor-pointer rounded-full border p-2 outline-hidden lg:p-3"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
