import axios from "axios";

//get data from api
function getCity(city) {
    axios.get("https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/")
    .then(res=> console.log(res.data))
    .catch(err=> console.log(err));
}


