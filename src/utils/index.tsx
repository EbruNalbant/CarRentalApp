const options = {
  headers: {
    "X-RapidAPI-Key": "6891b1e5fdmshfa921e7cae49f65p1d4e64jsn5b5b876c6bbd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars() {
  const make = "bmw";
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}`,
    options
  );
  return await res.json();
}
