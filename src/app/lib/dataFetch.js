import { BASE_URL, getAToken } from "./config";

export const getAllCars = async () => {
  try {
    const res = await fetch(`${BASE_URL}/cars`);
    const AllCars = await res.json();
    return AllCars.data;
  } catch (error) {
    throw error;
  }
};

export const getAvailableCars = async () => {
  try {
    const res = await fetch(`${BASE_URL}/cars/available`);

    const AvailableCars = await res.json();
    return AvailableCars.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleCar = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/cars/${id}`);
    const singleCar = await res.json();
    return singleCar;
  } catch (error) {
    throw error;
  }
};

export const getBookingCarsByUserId = async (userId) => {
  try {
    const token = await getAToken();
    const res = await fetch(`${BASE_URL}/booking/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const bookingCar = await res.json();
    if (!res.ok) {
      return {
        success: false,
        data: [],
      };
    }
    return bookingCar;
  } catch (error) {
    throw error;
  }
};

export const searchValue = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search?query=${query}`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const getAddedCarsData = async (userId) => {
  try {
    const token = await getAToken();
    const res = await fetch(`${BASE_URL}/addedCar/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
       if (!res.ok) {
         return {
           success: false,
           data: [],
         };
       }
    return res.json();
  } catch (error) {
    throw error;
  }
};
