"use client";

import { Button, SearchField } from "@heroui/react";
import { useRouter } from "next/navigation";

const SearchCars = () => {
  const router = useRouter();

  const handleSearchBtn = async (formData) => {
    const search = formData.get("search");
    router.push(`/explore-car?query=${search}`);
  };

  return (
    <form action={handleSearchBtn} className="flex items-center">
      <SearchField
        name="search"
        type="search"
        classNames={{
          base: "!rounded-none",
          mainWrapper: "!rounded-none",
          inputWrapper: "!rounded-none",
        }}
      >
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input className="w-[280px]" placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Button className="rounded-none" type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchCars;
