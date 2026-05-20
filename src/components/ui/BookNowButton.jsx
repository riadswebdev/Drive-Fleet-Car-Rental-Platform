"use client";

import { bookingCar } from "@/app/lib/action";
import RoundedLoading from "@/app/loading";
import { authClient } from "@/lib/auth-client";
import { Button, Label, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";

const BookingModal = ({ car }) => {
  const router = useRouter();
  const {
    _id,
    availability = "",
    carName = "",
    brand = "",
    dailyRentPrice = 0,
    imageUrl,
    bookingCount,
  } = car || {};

  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <RoundedLoading />;
  }

  const handleBookingBtn = async (e) => {
    if (!session?.user) return router.replace("/login");
    const carData = Object.fromEntries(e.entries());
    const bookingData = {
      userId: session?.user?.id,
      carId: _id,
      carName,
      bookingCount,
      availability,
      imageUrl,
      dailyRentPrice,
      driverNeeded: carData?.driverNeeded,
      specialNote: carData?.specialNote,
      bookingDate: new Date(),
    };
    const result = await bookingCar(bookingData);
    if (result.success) {
      alert("success ");
      router.refresh();
    } else {
      alert(result.message);
    }
  };
  return (
    <Modal>
      <Button className="h-12 px-7 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold">
        Book Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-lg rounded-3xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <div className="bg-blue-50 w-fit rounded-full">
                <h4 className="px-4 py-3.5 font-black text-xl">
                  D<span className="text-blue-600">F</span>
                </h4>
              </div>

              <Modal.Heading>Book Your Car</Modal.Heading>

              <p className="text-sm text-zinc-500 mt-1">
                Complete your booking details and reserve your luxury ride.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <form action={handleBookingBtn} className="flex flex-col gap-5">
                <div className="w-full">
                  <Label>Driver Needed</Label>

                  <select
                    required
                    name="driverNeeded"
                    className="w-full h-11 px-3 rounded-xl border border-zinc-200 bg-white text-sm outline-none mt-2"
                  >
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="w-full">
                  <Label>Special Note</Label>

                  <textarea
                    name="specialNote"
                    rows={4}
                    placeholder="Write any special requirements..."
                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none resize-none mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  slot="close"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                >
                  Confirm Booking
                </Button>
              </form>
            </Modal.Body>

            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModal;

{
  carId: "6a0b8141f87b62e4dbeaf083";
  carName: "Huracán EVO";
  dailyRentPrice: 950;
  driverNeeded: "Yes";
  specialNote: "fffff";
  userId: "";
}
