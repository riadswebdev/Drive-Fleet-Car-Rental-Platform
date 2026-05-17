import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import LogOutButton from "./LogOutButton";

const DropdownMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar size="sm">
          <Avatar.Image
            alt="Junior Garcia"
            src="https://ik.imagekit.io/i455l48ls/Logo.png"
            className="bg-[#bebebe] object-cover p-1"
          />
          <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Item className="md:hidden">
            <Link href="/explore-car">
              <Label>Explore Car</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link href="/my-added-car">
              <Label>My Added Cars</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link href="/my-booking">
              <Label>My Bookings</Label>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link href="/add-car">
              <Label>Add Car</Label>
            </Link>
          </Dropdown.Item>

          <LogOutButton />
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default DropdownMenu;
