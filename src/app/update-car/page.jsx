"use client";

import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
import { useState } from "react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import { onUpdateCar } from "../lib/action";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Update Car | Drive Fleet",
  description: "Update the details of a car listing in the Drive Fleet car rental platform.",
};

const carTypes = [
  "SUV",
  "Sedan",
  "Luxury",
  "Sports",
  "Convertible",
  "Electric",
  "Supercar",
];

const availabilityOptions = ["Available", "Unavailable"];

const UpdateCarModal = ({ car }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  console.log(car);
  const handleUpdateCar = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const updatedCarData = {
        dailyRentPrice: formData.get("dailyRentPrice"),
        description: formData.get("description"),
        availability: formData.get("availability"),
        imageUrl: formData.get("imageUrl"),
        carType: formData.get("carType"),
        pickupLocation: formData.get("pickupLocation"),
      };

      const result = await onUpdateCar(updatedCarData, car?._id);

      if (result?.success) {
        toast.success("Car updated successfully");
        router.refresh()
      } else {
        toast.error(result?.message || "Failed to update car");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button className="rounded-2xl bg-blue-600 text-white flex items-center gap-1">
        <Icon icon="solar:pen-bold" className="text-lg" /> Update Car
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="max-w-2xl rounded-3xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <div>
                <Modal.Heading className="text-2xl font-black">
                  Update Car
                </Modal.Heading>

                <p className="text-sm text-zinc-500 mt-1">
                  Edit your listed car information
                </p>
              </div>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleUpdateCar} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                  {/* Price */}
                  <TextField
                    isRequired
                    name="dailyRentPrice"
                    defaultValue={car?.dailyRentPrice}
                  >
                    <Label>Price Per Day</Label>

                    <Input
                      type="number"
                      placeholder="Enter price"
                      className="rounded-xl"
                    />

                    <FieldError />
                  </TextField>

             
                  <div className="w-full">
                    <Label>Car Type</Label>

                    <select
                      name="carType"
                      defaultValue={car?.carType}
                      className="w-full h-11 px-3 rounded-xl border border-zinc-200 bg-white outline-none"
                    >
                      {carTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

         
                  <div className="w-full">
                    <Label>Availability</Label>

                    <select
                      name="availability"
                      defaultValue={car?.availability}
                      className="w-full h-11 px-3 rounded-xl border border-zinc-200 bg-white outline-none"
                    >
                      {availabilityOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

            
                  <TextField
                    isRequired
                    name="pickupLocation"
                    defaultValue={car?.pickupLocation}
                  >
                    <Label>Pickup Location</Label>

                    <Input
                      placeholder="Enter location"
                      className="rounded-xl"
                    />

                    <FieldError />
                  </TextField>
                </div>

               
                <TextField
                  isRequired
                  name="imageUrl"
                  defaultValue={car?.imageUrl}
                >
                  <Label>Image URL</Label>

                  <Input
                    type="url"
                    placeholder="Enter image URL"
                    className="rounded-xl"
                  />

                  <FieldError />
                </TextField>

                <div className="w-full">
                  <Label>Description</Label>

                  <textarea
                    name="description"
                    rows={5}
                    defaultValue={car?.description}
                    placeholder="Write car description..."
                    className="w-full rounded-xl border border-zinc-200 p-4 outline-none resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 w-full mt-2">
                  <Button
                    type="button"
                    variant="bordered"
                    className="rounded-2xl"
                  >
                    Cancel
                  </Button>

                  <Button
                    slot="close"
                    type="submit"
                    isDisabled={loading}
                    className="rounded-2xl bg-blue-600 text-white"
                  >
                    {loading ? "Updating..." : "Save Changes"}
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateCarModal;
