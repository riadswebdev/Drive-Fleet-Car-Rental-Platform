export const getAllCars = async () => {
  try {
    const res = await fetch("http://localhost:5000/cars");

    const AllCars = await res.json();
    return AllCars.data;
  } catch (error) {
    throw error;
  }
};

export const getAvailableCars = async () => {
  try {
    const res = await fetch("http://localhost:5000/cars/available");

    const AvailableCars = await res.json();
    return AvailableCars.data;
  } catch (error) {
    throw error;
  }
};

export const getSingleCar = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/cars/${id}`);

    const singleCar = await res.json();
    console.log(singleCar.data);
    return singleCar
  } catch (error) {
    throw error;
  }
};
