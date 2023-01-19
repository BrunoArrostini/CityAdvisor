import axios from "axios";
import { inputText, errorBox, form, cityScore, cityInfo, cityCategories} from "./dom";

form.addEventListener("submit", function(e){
    e.preventDefault();
    cityInfo.innerHTML = "";
    cityCategories.innerHTML = "";
    getCity(inputText.value);
});

export async function getCity(city){
    const res = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().trim().replaceAll(' ', '-')}/scores/`)
    .then (res =>{
        cityScore.innerHTML = res.data.teleport_city_score.toFixed(2);
        cityInfo.innerHTML = res.data.summary;
        //cityCategories.innerHTML = res.data.categories;
        }) 
    .catch (err =>{ 
        errorBox.innerHTML= "Please retry <br> city name must be in english";
    });  
}