interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`relative cursor-pointer overflow-hidden rounded-full border px-6 py-3 outline-none hover:scale-[2.5] dark:bg-violet-600 ${className}`}
    >
      <span className="">{text}</span>
    </a>
  );
};
