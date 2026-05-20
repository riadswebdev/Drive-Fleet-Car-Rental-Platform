import { headers } from "next/headers";
import { getBookingCarsByUserId } from "../lib/dataFetch";
import { auth } from "@/lib/auth";
import UserBookingCard from "@/components/ui/BookingCard";


const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  const bookingCarsData = await getBookingCarsByUserId(userId);
  const data = bookingCarsData?.data;
  
  return (
    <div className="w-full max-w-7xl mx-auto mb-5">
      my booking
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
  );
};

export default MyBookingPage;
