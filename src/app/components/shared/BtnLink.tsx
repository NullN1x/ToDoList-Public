interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`relative transform cursor-pointer overflow-hidden rounded-full border px-6 py-3 transition duration-300 outline-none dark:bg-violet-600 ${className}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  );
};
