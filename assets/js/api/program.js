const BASE_URL = "http://185.255.89.163:8000/";

const addProgram = async (data) => {

    const res = await fetch(`${BASE_URL}program/program/all/` , {
        method :"POST",
        body :JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json"
        }
    })

    const dataF = await res.json()

    console.log(dataF)

    return dataF

};

export { addProgram };
