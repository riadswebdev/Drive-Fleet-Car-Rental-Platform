import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import LogOutButton from "./LogOutButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DropdownMenu = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const activeUser = session?.user;

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar size="sm">
          <Avatar.Image
            alt="Junior Garcia"
            src={activeUser?.image}
            className="bg-[#bebebe] object-cover"
          />
          <Avatar.Fallback delayMs={600}>
            {activeUser?.name.charAt(0)}
          </Avatar.Fallback>
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
