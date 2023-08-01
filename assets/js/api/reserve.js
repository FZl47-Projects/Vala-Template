const BASE_URL = "http://185.255.89.163:8000/";


const getAllReserve = async() => {
    const res = await fetch(`${BASE_URL}reserve/all/`)
    const data = await res.json()

    return data
}
const getAllmoshaverehReserve = async() => {
    const res = await fetch(`${BASE_URL}reserve/reserve/all/`)
    const data = await res.json()

    return data
}
const sendReserve = async(data) => {
    const res = await fetch(`${BASE_URL}reserve/all/` , {
        method : 'POST',
        body : JSON.stringify(data),
        headers :{
            "Content-Type" : "application/json"
        }
    })
    const dataF = await res.json()

    return dataF
}
const sendReserveMoshavereh = async(data) => {
    const res = await fetch(`${BASE_URL}reserve/reserve/all/` , {
        method : 'POST',
        body : JSON.stringify(data),
        headers :{
            "Content-Type" : "application/json"
        }
    })
    const dataF = await res.json()

    return dataF
}

export {getAllReserve,sendReserve,getAllmoshaverehReserve,sendReserveMoshavereh};