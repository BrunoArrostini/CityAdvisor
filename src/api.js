import axios from "axios";

//get data from api
export async function fetchCity(city) {
    try {
    let res =  await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.replace(/ /g, "-").toLowerCase()}/scores/`);
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err));
}
