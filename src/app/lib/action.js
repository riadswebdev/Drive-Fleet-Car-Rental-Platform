"use server";

import { BASE_URL } from "./config";

export const addCars = async (addCarData) => {
  try {
    const res = await fetch(`${BASE_URL}/car/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCarData),
    });
    return res.json();
  } catch (error) {
    console.log(error.message);

    return {
      success: false,
      message: error.message,
    };
  }
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

export const cancelBookingCar = async (carId) => {
  try {
    const res = await fetch(`${BASE_URL}/booking/${carId}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const onUpdateCar = async (updateData, id) => {
  try {
    const res = await fetch(`${BASE_URL}/updateCar/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const deleteAddedCar = async (carId) => {
  try {
    const res = await fetch(`${BASE_URL}/added/${carId}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};
