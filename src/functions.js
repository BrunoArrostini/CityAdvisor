import { inputText, btnSumbit, errorBox} from "./dom";

let errorMessage = document.createElement("p");
errorBox.append(errorMessage);
errorMessage.innerText = "Please type in a city";

btnSumbit.addEventListener("submit" function(e){
    return inputText.value;
}

export async function getCity(city){
    if(inputText.value == " "){
    return errorBox;
    } return inputText.value.toLowerCase().trim().replaceAll(' ', '-');    
}
export function showError(err){
    if (getCity == true){
        errorBox.style.display= "none";
    } else {
        return errorMessage;
    }
}

