import { BASE_API_URL } from "./base.js";



const getAllCartex = async() => {
    const res = await fetch(`${BASE_API_URL}cortex/all/`)
    const data = await res.json()
console.log(data)
    return data
}


const addCartex = async (data) => {
  const res = await fetch(`${BASE_API_URL}cortex/all/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dataF = await res.json();
  console.log(dataF)
  return dataF;
};
const addDistrict= async (data) => {
  const res = await fetch(`${BASE_API_URL}cortex/district/all/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dataF = await res.json();
  console.log(dataF)
  return dataF;
};

const getAllDistrict= async() => {
  const res = await fetch(`${BASE_API_URL}cortex/district/all/`)
  const data = await res.json()
console.log(data)
  return data
}

export {addCartex , getAllCartex,addDistrict,getAllDistrict}