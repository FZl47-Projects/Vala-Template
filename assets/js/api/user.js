const BASE_URL = "http://185.255.89.163:8000/";

const getAllUsers = async () => {

  const res = await fetch(`${BASE_URL}user/all/`);
  const data = await res.json();

  return data;
};

const getUserWithId = async (id) => {
  const res = await axios(`${BASE_URL}user/GetId/${id}/`);

  return res.data;
};
const getOperatorWithId = async (id) => {
  const res = await axios(`${BASE_URL}manager/GetId/${id}/`);

  return res.data;
};
const updateUser = async (id, data) => {
  const res = await fetch(`${BASE_URL}user/GetId/${id}/`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dataF = await res.json();

  return dataF;
};


const deleteUser = async(id) => {
  const res = await fetch(`${BASE_URL}user/GetId/${id}/`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dataF = await res.json();

  return dataF;
}


export { getUserWithId, getAllUsers, updateUser ,deleteUser ,getOperatorWithId};
