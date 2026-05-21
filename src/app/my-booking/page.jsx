import { headers } from "next/headers";
import { getBookingCarsByUserId } from "../lib/dataFetch";
import { auth } from "@/lib/auth";
import UserBookingCard from "@/components/ui/BookingCard";

export const metadata = {
  title: "My Booking | Drive Fleet",
  description: "View your current and past car rental bookings on the Drive Fleet platform.",
};

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  const bookingCarsData = await getBookingCarsByUserId(userId);
  const data = bookingCarsData?.data;

  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full max-w-7xl mx-auto my-25">
        <h2 className="mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-10 lg:leading-16  text-zinc-900">
          my booking
        </h2>
        <div>
          {data.length === 0 ?
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="bg-blue-50 p-5 rounded-full mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 14l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-black text-zinc-900">
                No Bookings Found
              </h2>

              <p className="text-zinc-500 mt-2 max-w-md leading-7">
                You haven’t booked any cars yet. Explore premium vehicles and
                reserve your dream ride in just a few clicks.
              </p>
            </div>
          : data.map((booking) => (
              <UserBookingCard key={booking._id} booking={booking} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MyBookingPage;
