import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Image
                src="https://ik.imagekit.io/i455l48ls/Logo.png"
                width={34}
                height={34}
                alt="DriveFleet Logo"
              />

              <h2 className="text-white font-black text-2xl tracking-tight">
                DF | <span className="text-blue-500">Fleet</span>
              </h2>
            </Link>

            <p className="text-zinc-400 text-sm leading-7 mt-5 max-w-sm">
              Experience luxury, performance, and comfort with DriveFleet.
              Discover premium vehicles tailored for unforgettable journeys
              across every destination.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <Link
                href="/"
                className="size-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Icon icon="mdi:facebook" className="text-xl" />
              </Link>

              <Link
                href="/"
                className="size-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                <Icon icon="mdi:instagram" className="text-xl" />
              </Link>

              <Link
                href="/"
                className="size-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-sky-500 hover:text-white transition-all duration-300"
              >
                <Icon icon="mdi:twitter" className="text-xl" />
              </Link>

              <Link
                href="/"
                className="size-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                <Icon icon="mdi:youtube" className="text-xl" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-5">Useful Links</h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                href="/available-cars"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Available Cars
              </Link>

              <Link
                href="/add-car"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Add Car
              </Link>

              <Link
                href="/my-added-car"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                My Cars
              </Link>

              <Link
                href="/my-booking"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                My Bookings
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-5">
              Contact Information
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Icon
                  icon="solar:map-point-bold"
                  className="text-blue-500 text-xl mt-1"
                />

                <p className="text-zinc-400 text-sm leading-6">
                  Dubai Marina, UAE
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Icon
                  icon="solar:phone-bold"
                  className="text-blue-500 text-xl"
                />

                <p className="text-zinc-400 text-sm">+971 555 987 654</p>
              </div>

              <div className="flex items-center gap-3">
                <Icon
                  icon="solar:letter-bold"
                  className="text-blue-500 text-xl"
                />

                <p className="text-zinc-400 text-sm">support@drivefleet.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-5">Newsletter</h3>

            <p className="text-zinc-400 text-sm leading-7 mb-5">
              Subscribe to receive premium offers, exclusive cars, and luxury
              travel updates from DriveFleet.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-sm text-white outline-none"
              />

              <button className="h-12 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="border-t mt-5 border-zinc-800mt-14pt-6flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm text-center md:text-left mt-5">
            © 2026 DriveFleet. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="text-zinc-500 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="text-zinc-500 text-sm hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
