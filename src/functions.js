import axios from "axios";
import { inputText, errorBox, form, cityScore, cityInfo,cityPic, cityCategories} from "./dom";

form.addEventListener("submit", function(e){
    e.preventDefault();
    cityInfo.innerHTML = "";
    cityCategories.innerHTML = "";
    errorBox.innerHTML="";
    cityPic.innerHTML="";
    getCity(inputText.value);
    showCityImg(inputText.value);
});

export async function getCity(city){
    const res = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().trim().replaceAll(' ', '-')}/scores/`)
    .then (res =>{
        cityScore.innerHTML = "City Score: " + res.data.teleport_city_score.toFixed(2);       
        cityInfo.innerHTML = "<p id=about>ABOUT THIS CITY...</p> <br>" + res.data.summary;
        cityInfo.style.display="flex";
        cityInfo.style.flexDirection="column"
        cityInfo.style.paddingLeft="100px";
        cityInfo.style.paddingRight="100px";
        cityInfo.style.textAlign="center";
        
        const title = document.createElement("p");
            title.innerHTML = "LIFESTYLE... <br>";
            cityCategories.prepend(title);
            title.style.color="rgb(52, 138, 244)";
            title.style.fontWeight="700";
            title.style.marginBottom="10px";


        res.data.categories.forEach((e, i) => {
            const elem = document.createElement("div");
            elem.id = `cat${i}`;
            elem.textContent = `${e.name}: ${e.score_out_of_10.toFixed(2)}`;
            cityCategories.appendChild(elem);
            cityCategories.style.paddingTop="20px";
            cityCategories.style.paddingBottom="10px";
            
            window.scrollTo(250,500);
        });           
    })
    .catch (err =>{ 
        errorBox.innerHTML= "Please retry <br> City name must be in english or ...<br> maybe your city is not in the list";
    });  
}

export async function showCityImg(city){
    const response = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().trim().replaceAll(' ', '-')}/images/`)
    .then (response=>{
       cityPic.innerHTML = `<img src="${response.data.photos[0].image.web}" class="pic">`;
       cityPic.style.backgroundColor= "lightgray";
       cityPic.style.textAlign= "center";
    });
}