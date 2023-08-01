const BASE_URL = "http://185.255.89.163:8000/";

const addProduct = async (data) => {
    const res = await fetch(`${BASE_URL}store/product/all/`, data);
    const dataF = await res.json();
   
    return dataF;
    
  };

  const getAllProduct = async () => {
    const res = await axios(`${BASE_URL}store/product/all/`);
    return res.data;
  };
  const InsertOrder = async (data) => {
    const res = await axios.post(`${BASE_URL}store/all/`,data);
    return res.data;
  };
  export { addProduct , getAllProduct ,InsertOrder};
  