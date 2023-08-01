const BASE_URL = "http://185.255.89.163:8000/";

const getAllFoods = async () => {
  const res = await fetch(`${BASE_URL}food/all/`);
  const data = await res.json();
  return data;
};

const addFood = async (data) => {
  fetch(`${BASE_URL}program/food/all/`, data)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return res.data;
};

const getAllFood = async () => {
  const res = await fetch(`${BASE_URL}program/food/all/`);

  const data = await res.json();

  return data;
};

export { addFood, getAllFoods, getAllFood };
