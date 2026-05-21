"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-5">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <Icon icon="solar:bug-bold" className="text-5xl text-red-600" />
        </div>

        <h1 className="text-5xl font-black tracking-tight text-zinc-900">
          Oops!
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-zinc-800">
          Something went wrong
        </h2>

        <p className="mt-3 text-base leading-7 text-zinc-500">
          An unexpected error occurred. Please try again or return to the
          homepage.
        </p>

        {error?.message && (
          <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm text-red-600">
            {error.message}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onPress={() => reset()}
            className="h-11 rounded-2xl bg-red-600 px-6 font-semibold text-white hover:bg-red-700"
          >
            Try Again
          </Button>

          <Link href="/">
            <Button
              variant="bordered"
              className="h-11 rounded-2xl px-6 font-semibold"
            >
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
