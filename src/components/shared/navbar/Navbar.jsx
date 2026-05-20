import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import DropdownMenu from "./DropdownMenu";
import { Icon } from "@iconify/react";
import { FaCalendarCheck } from "react-icons/fa";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const activeUser = session?.user;

  return (
    <div className="bg-[#050b18] px-5 xl:px-0 sticky top-0 z-50">
      <nav className="flex items-center justify-between py-4 w-full max-w-350 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://ik.imagekit.io/i455l48ls/Logo.png"
            width={30}
            height={30}
            alt="Logo"
          />
          <h2 className="text-gray-100 font-black text-xl">
            DF | <span className="text-blue-600"> Fleet</span>
          </h2>
        </Link>
        <div className="">
          <ul className="hidden lg:flex items-center gap-1 lg:gap-2">
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
        <div className="flex items-center gap-3">
          {!activeUser && (
            <>
              <NavLink
                className="flex items-center gap-1 px-2.5 p-1 rounded-sm text-base"
                href="/login"
              >
                Login
              </NavLink>
              <Link
                className="hidden sm:flex items-center gap-1 px-3 p-1 rounded-full font-medium text-base bg-blue-600 text-white"
                href="/signup"
              >
                Join Free
              </Link>
            </>
          )}
          {activeUser && <DropdownMenu />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
