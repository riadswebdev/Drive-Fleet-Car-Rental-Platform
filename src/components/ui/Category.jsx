"use client";

import { ListBox, Select } from "@heroui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  const [showOthers, setShowOthers] = useState(false);

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

          <ListBox.Item
            id="others"
            textValue="Others"
            onPress={() => setShowOthers(!showOthers)}
          >
            <div className="flex items-center justify-between w-full">
              <span>Others</span>

              {showOthers ?
                <ChevronUp size={16} />
              : <ChevronDown size={16} />}
            </div>
          </ListBox.Item>

          {showOthers &&
            otherCategories.map((category) => (
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
        </ListBox>
      </Select.Popover>
    </Select>
  );
};

export default CarsCategory;
