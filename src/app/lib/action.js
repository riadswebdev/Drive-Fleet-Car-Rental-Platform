"use server";

import { BASE_URL } from "./config";



export const addCars = async (FormData) => {
  const carData = Object.fromEntries(FormData.entries());
  try {
    const res = await fetch(`${BASE_URL}/car/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });
  } catch (error) {}
};

export const bookingCar = async (bookingCarData) => {
  try {
    const res = await fetch(`${BASE_URL}/car/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingCarData),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to add car");
    }
    return data;
  } catch (error) {
    console.log(error.message);

    return {
      success: false,
      message: error.message,
    };
  }
};
