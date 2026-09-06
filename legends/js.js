document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function handleDocumentLoad() {

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('l');

var imageUrl = "https://raw.githubusercontent.com/artur67933/artur67933.github.io/main/legends/images/legend_"+myParam+".png"; // Replace with your image URL
var imgElement = document.getElementById("id1"); // Get the image element by its ID
var image = document.getElementById("id1"); 
image.onload = function() {
fetch(imageUrl)
    .then(response => response.blob()) 
    .then(blob => {
        let imgURL = URL.createObjectURL(blob);
        imgElement.src = imgURL;
    })
    .catch(error => console.error("Error fetching image:", error));

}

//Variable
var onSwitch = document.getElementById("lightSwitchOn"); //Targets div with ID lightSwitchOn
var style = document.getElementById("pageStyle"); //Targets stylsheet
onSwitch.innerHTML = myParam;
onSwitch.style.display = "none";

//Event Listener
onSwitch.addEventListener("click", lightsOn); //When clicked this action is performed

//Function


function lightsOn() { /*This changes the background colour to a white and makes text black*/
    style.setAttribute('href', 'style.css');
    offSwitch.innerHTML = "Turn On Night Mode";
    onSwitch.style.display = "none";
    offSwitch.style.display = "inline";
    setCookie("lights", "on", 30);
}


if (getCookie("lights") == "on") {
        lightsOn();
    } else {
        lightsOff();
    }

}