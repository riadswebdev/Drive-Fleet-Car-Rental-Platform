export const addCars = async (FormData) => {
  const carData = Object.fromEntries(FormData.entries());
  console.log(carData);
  try {
    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });
  } catch (error) {}
};
