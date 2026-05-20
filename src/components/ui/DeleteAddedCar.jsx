"use client";

import { deleteAddedCar } from "@/app/lib/action";
import { AlertDialog, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteCar = ({ id }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const result = await deleteAddedCar(id);
    console.log(id, "delete ", result, "deleleelelell");
    if (result.success) {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <Button
        variant="bordered"
        color="danger"
        className="h-11 w-full sm:w-auto rounded-2xl px-5 font-semibold"
      >
        <Icon icon="solar:trash-bin-trash-bold" className="text-lg" />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onPress={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteCar;
