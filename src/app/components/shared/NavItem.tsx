interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="hover:text-primary py-3 font-medium duration-300 ease-linear"
      >
        {text}
      </a>
    </li>
  );
};
