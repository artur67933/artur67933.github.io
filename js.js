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
//Variable
var offSwitch = document.getElementById("lightSwitchOff"); //Targets div with ID lightSwitchOff
var onSwitch = document.getElementById("lightSwitchOn"); //Targets div with ID lightSwitchOn
var style = document.getElementById("pageStyle"); //Targets stylsheet
offSwitch.innerHTML = "Turn On Night Mode";
onSwitch.innerHTML = "Turn Off Night Mode";
onSwitch.style.display = "none";

//Event Listener
offSwitch.addEventListener("click", lightsOff); //When clicked this action is performed
onSwitch.addEventListener("click", lightsOn); //When clicked this action is performed

//Function
function lightsOff() { /*This changes the background colour to black and makes text white*/
    style.setAttribute('href', 'css/darkStyle.css');
    onSwitch.innerHTML = "Turn Off Night Mode";
    onSwitch.style.display = "inline";
    offSwitch.style.display = "none";
    setCookie("lights", "", 30);
}

function lightsOn() { /*This changes the background colour to a white and makes text black*/
    style.setAttribute('href', 'css/lightStyle.css');
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