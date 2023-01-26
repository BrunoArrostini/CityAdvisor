import axios from "axios";
import { inputText, errorBox, form, cityScore, cityInfo, cityCategories, imgContainer, resultsContainer, main} from "./dom";

form.addEventListener("submit", function(e){
    e.preventDefault();
    cityInfo.innerHTML = "";
    cityCategories.innerHTML = "";
    getCity(inputText.value);
});

export async function getCity(city){
    const res = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().trim().replaceAll(' ', '-')}/scores/`)
    .then (res =>{
        cityScore.innerHTML = "City score: " + res.data.teleport_city_score.toFixed(2);       
        cityInfo.innerHTML =  res.data.summary;
        res.data.categories.forEach((e, i) => {
            const elem = document.createElement("div");
            elem.id = `cat${i}`;
            elem.textContent = `${e.name}: ${e.score_out_of_10.toFixed(2)}`;
            cityCategories.appendChild(elem);
            cityCategories.style.overflow="scroll";
            cityCategories.style.borderColor="rgb(249, 255, 127)";
        });           
    })
    .catch (err =>{ 
        errorBox.innerHTML= "Please retry <br> City name must be in english";
    });  
}

export async function showCityImg(){
    const img = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().trim().replaceAll(' ', '-')}/images/`)
    .then (img=>{
        console.log(img.data.photos[1]);
    });
}
