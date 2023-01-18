import axios from "axios";
import { inputText, btnSubmit, errorBox, form, cityScore, cityInfo, cityCategories} from "./dom";

form.addEventListener("submit", function(e){
    e.preventDefault();
    cityInfo.innerHTML = "";
    cityCategories.innerHTML = "";
    getCity(inputText.value);
    /*if (getCity()=false){
        showError();
    }*/
});

export async function getCity(city){
    
        const res = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().trim().replaceAll(' ', '-')}/scores/`)
        .then (res =>{
          console.log(res)  
        })

}

cityCategories.forEach((e, i) => {
    const info = document.createElement("div");
    info.id = `cat${i}`;
    info.textContent = `${e.name}:${e.score_out_of_10.toFixed(2)}`;
    info.setAttribute("style",`color:${e.color}`);
    cityCategories.append(info);
});

cityScore.forEach((e)=>{
    const score = document.createElement("div");
    score.textContent = `${e.teleport_city_score.toFixed(2)}`;
    cityScore.append(score);
});

cityInfo.forEach((e)=>{
    const infos = document.createElement("div");
    infos.textContent = `${e.summary}`;
    cityInfo.append(infos);
});
/*export function showError(err){
    let errorMessage = document.createElement("p");
    errorBox.append(errorMessage);
    

    if (inputText.value = ""){
        errorBox.style.display= "none";
    } else {
        errorBox.style.display= "block";
    }
}*/



