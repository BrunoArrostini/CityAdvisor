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
        cityScore.innerHTML = "City Score: " + res.data.teleport_city_score.toFixed(2);       
        cityInfo.innerHTML =  res.data.summary;
        cityInfo.style.display="flex";
        cityInfo.style.flexDirection="column"
        cityInfo.style.paddingLeft="100px";
        cityInfo.style.paddingRight="100px";
        
        res.data.categories.forEach((e, i) => {
            const elem = document.createElement("div");
            elem.id = `cat${i}`;
            elem.textContent = `${e.name}: ${e.score_out_of_10.toFixed(2)}`;
            cityCategories.appendChild(elem);
            cityCategories.style.paddingTop="20px";
            cityCategories.style.paddingBottom="10px";

            window.scrollTo(300,600);
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
