import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const metadata = {
  title: "Page Not Found | Drive Fleet Car Rental",
  description: "The requested page could not be found. Return to the Drive Fleet Car Rental homepage to continue browsing.",
};

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-5">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
          <Icon
            icon="solar:danger-triangle-bold"
            className="text-5xl text-blue-600"
          />
        </div>

        <h1 className="text-6xl font-black tracking-tight text-zinc-900">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-zinc-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-base leading-7 text-zinc-500">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button className="h-11 rounded-2xl bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
