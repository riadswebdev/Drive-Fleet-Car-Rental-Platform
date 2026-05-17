"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children ,className}) => {
  const pathName = usePathname();
  const ActiveLink = href ? href === pathName : "/";
  return (
    <Link
      className={`${className} ${ActiveLink ?  "bg-white " : "text-gray-300"}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
