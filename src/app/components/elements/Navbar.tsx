import Container from "../shared/Container";
import Image from "next/image";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";

const navItems = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About Us" },
  { href: "#features", text: "Features" },
];

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="relative flex w-full justify-between gap-6">
          <div className="relative inline-flex min-w-max">
            <Image
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="Avatar"
              width={40}
              height={40}
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
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
