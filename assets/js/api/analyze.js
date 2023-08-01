const BASE_URL = "http://185.255.89.163:8000/";


const analyze = async (data) => {
    const res = await fetch(`${BASE_URL}analyze/all/`, data);
    const dataF = await res.json();
    return dataF;
    
  };

  const getAllanalyze = async () => {
    const res = await axios(`${BASE_URL}analyze/all/`);
    return res.data;
  };

  export { analyze , getAllanalyze };


