import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";
import { Icon } from "@iconify/react";
import { FaCalendarCheck } from "react-icons/fa";

const navItem = [
  { name: "Home", path: "/", icon: <Icon icon="typcn:home" /> },
  {
    name: "Explore Cars",
    path: "/explore-car",
    icon: <Icon icon="fontisto:car" />,
  },
  {
    name: "My Bookings",
    path: "/my-booking",
    icon: <FaCalendarCheck className="text-sm" />,
  },
  {
    name: "Add Car",
    path: "/add-car",
    icon: <Icon icon="mingcute:plus-fill" />,
  },
];

const Navbar = () => {
  return (
    <div className="bg-[#050b18] px-5 xl:px-0">
      <nav className="flex items-center justify-between py-4 w-full max-w-250 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://ik.imagekit.io/i455l48ls/Logo.png"
            width={30}
            height={30}
            alt="Logo"
          />
          <h2 className="text-gray-100 font-black text-lg">
            DF | <span className="text-blue-600"> Fleet</span>
          </h2>
        </Link>
        <div className="">
          <ul className="hidden md:flex items-center gap-0.5">
            {navItem.map((item, index) => (
              <li key={index}>
                <NavLink
                  className="flex items-center gap-1 px-2.5 p-1 rounded-sm text-base"
                  href={item.path}
                >
                  {item.icon} {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <DropdownMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
