"use client";

import { ListBox, Select } from "@heroui/react";
import { useRouter } from "next/navigation";

const popularCategories = [
  "Luxury SUV",
  "Supercar",
  "Luxury Sedan",
  "Grand Tourer",
  "Hypercar",
];

const otherCategories = [
  "Convertible Supercar",
  "Sports Coupe",
  "Luxury Coupe",
  "Performance Sedan",
  "Ultra Luxury Sedan",
  "Ultra Luxury SUV",
  "Hybrid Hypercar",
  "Electric Luxury Sedan",
];

const CarsCategory = () => {
  const router = useRouter();

  const handleCategory = (category) => {
    router.push(`/explore-car?query=${category}`);
  };

  return (
    <Select className="w-[256px]" placeholder="Select Category">
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>

      <Select.Popover>
        <ListBox aria-label="Car Categories">
         

          {popularCategories.map((category) => (
            <ListBox.Item
              key={category}
              id={category}
              textValue={category}
              onPress={() => handleCategory(category)}
            >
              {category}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}

          <ListBox.Section title="Other">
            {otherCategories.map((category) => (
              <ListBox.Item
                key={category}
                id={category}
                textValue={category}
                onPress={() => handleCategory(category)}
              >
                {category}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox.Section>
        </ListBox>
      </Select.Popover>
    </Select>
  );
};

export default CarsCategory;
