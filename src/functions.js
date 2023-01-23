import axios from "axios";
import { inputText, errorBox, form, cityScore, cityInfo, cityCategories, main} from "./dom";

form.addEventListener("submit", function(e){
    e.preventDefault();
    cityInfo.innerHTML = "";
    cityCategories.innerHTML = "";
    getCity(inputText.value);
});

export async function getCity(city){
    const res = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().trim().replaceAll(' ', '-')}/scores/`)
    .then (res =>{
        //console.log(res);

        cityScore.innerHTML = res.data.teleport_city_score.toFixed(2);        
        cityInfo.innerHTML = res.data.summary;
        res.data.categories.forEach((e, i) => {
            const elem = document.createElement("div");
            elem.id = `cat${i}`;
            elem.textContent = `${e.name}: ${e.score_out_of_10.toFixed(2)}`;
            cityCategories.appendChild(elem);
        })     
       // cityCategories.innerHTML = res.data[categories.name];
    })
    .catch (err =>{ 
        errorBox.innerHTML= "Please retry <br> city name must be in english";
    });  
}

