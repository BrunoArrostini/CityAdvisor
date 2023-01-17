import axios from "axios";
import { inputText, btnSubmit, errorBox, form, cityScore, cityInfo, cityCategories} from "./dom";

form.addEventListener("submit", function(e){
    e.preventDefault();
    cityInfo.innerHTML = "";
    cityCategories.innerHTML = "";
    getCity();
})

export function getCity(city){
    try{
        const res = await axios.get(`https://api.teleport.org/api/urban_areas/slug:${getCity}/scores/`)
    }
    } return inputText.value.toLowerCase().trim().replaceAll(' ', '-');
        
}

export function showError(err){
    let errorMessage = document.createElement("p");
    errorBox.append(errorMessage);
    

    if (inputText.value = ""){
        errorBox.style.display= "none";
    } else {
        errorBox.style.display= "block";
    }
}


