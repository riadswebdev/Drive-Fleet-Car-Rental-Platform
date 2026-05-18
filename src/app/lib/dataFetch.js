export const getAvailableCars = async () => {
  try {
    const res = await fetch("http://localhost:5000/cars/available");
    
    const AvailableCars = await res.json();
    return AvailableCars.data
  } catch (error) {
    throw error;
  }
};
