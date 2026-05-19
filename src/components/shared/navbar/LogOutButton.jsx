"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Button, Dropdown, Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const LogOutButton = () => {
  const router = useRouter();
  const handleLogoutBtn = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <Dropdown.Item id="logout" textValue="Logout" variant="danger">
      <Button onPress={handleLogoutBtn} className="flex w-full items-center justify-between gap-2">
        <Label>Log Out</Label>
        <ArrowRightFromSquare className="size-3.5 text-danger" />
      </Button>
    </Dropdown.Item>
  );
};

export default LogOutButton;
