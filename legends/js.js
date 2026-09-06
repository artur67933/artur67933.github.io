document.addEventListener ("DOMContentLoaded", handleDocumentLoad);

function setCookie(cname, cvalue) {
  var exdays = 365;
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

function setowncolor(own) {
    if (own=="") {
      image.style.backgroundColor = "red";}
    else{
      image.style.backgroundColor = "green";}
    }
    
function handleDocumentLoad() {

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('l');

  var imageUrl = "images/legend_"+myParam+".png"; // Replace with your image URL
  var image = document.getElementById("id1");
  image.src = imageUrl; // Set the image source to the URL
  image.alt = imageUrl;

  var text = document.getElementById("text1");
  getlegendname();

  var increaseButton = document.getElementById("increaseButton"); //Targets div with ID increaseButton
  var decreaseButton = document.getElementById("decreaseButton"); //Targets div with ID decreaseButton

  decreaseButton.innerHTML = "<";
  increaseButton.innerHTML = ">";
  increaseButton.style.display = "inline";
  decreaseButton.style.display = "inline";
  //Event Listener
  increaseButton.addEventListener("click", incriese); //When clicked this action is performed
  decreaseButton.addEventListener("click", decrease); //When clicked this action is performed
  image.addEventListener("click", own); //When clicked this action is performed
  //Function
  if (myParam === null) {var l=getCookie("l");if(l==""){l=1;}else{l=parseInt(l);}urlParams.set('l', l);window.location.search = urlParams.toString();}

  var ownv=getCookie("own"+myParam);
  setowncolor(ownv);
  
  


function own() {if (ownv=="") {ownv="true";}else{ own="";}setowncolor(ownv);setCookie("own"+myParam, ownv);}




function incriese() { /*This changes the background colour to a white and makes text black*/
  if (parseInt(myParam) < 70) { 
   urlParams.set('l', parseInt(myParam) + 1);
   window.location.search = urlParams.toString();
  setCookie("l", parseInt(myParam) + 1);
  }
}

function decrease() {
  if (parseInt(myParam) > 1) { 
   urlParams.set('l', parseInt(myParam) - 1);
   window.location.search = urlParams.toString();
   setCookie("l", parseInt(myParam) - 1);

  }
}


function getlegendname() {
switch (myParam) {
case "1":  text.innerHTML = "Bödvar"; break;
case "2":  text.innerHTML = "Cassidy"; break;
case "3":  text.innerHTML = "Orion"; break;
case "4":  text.innerHTML = "Lord Vraxx"; break;
case "5":  text.innerHTML = "Gnash"; break;
case "6":  text.innerHTML = "Queen Nai"; break;
case "7":  text.innerHTML = "Hattori"; break;
case "8":  text.innerHTML = "Sir Roland"; break;
case "9":  text.innerHTML = "Scarlet"; break;
case "10":  text.innerHTML = "Thatch"; break;
case "11":  text.innerHTML = "Ada"; break;
case "12":  text.innerHTML = "Sentinel"; break;
case "13":  text.innerHTML = "Lucien"; break;
case "14":  text.innerHTML = "Teros"; break;
case "15":  text.innerHTML = "Brynn"; break;
case "16":  text.innerHTML = "Asuri"; break;
case "17":  text.innerHTML = "Barraza"; break;
case "18":  text.innerHTML = "Ember"; break;
case "19":  text.innerHTML = "Azoth"; break;
case "20":  text.innerHTML = "Koji"; break;
case "21":  text.innerHTML = "Ulgrim"; break;
case "22":  text.innerHTML = "Diana"; break;
case "23":  text.innerHTML = "Jhala"; break;
case "24":  text.innerHTML = "Kor"; break;
case "25":  text.innerHTML = "Wu Shang"; break;
case "26":  text.innerHTML = "Val"; break;
case "27":  text.innerHTML = "Ragnir"; break;
case "28":  text.innerHTML = "Cross"; break;
case "29":  text.innerHTML = "Mirage"; break;
case "30":  text.innerHTML = "Nix"; break;
case "31":  text.innerHTML = "Mordex"; break;
case "32":  text.innerHTML = "Yumiko"; break;
case "33":  text.innerHTML = "Artemis"; break;
case "34":  text.innerHTML = "Caspian"; break;
case "35":  text.innerHTML = "Sidra"; break;
case "36":  text.innerHTML = "Xull"; break;
case "37":  text.innerHTML = "Kaya"; break;
case "38":  text.innerHTML = "Isaiah"; break;
case "39":  text.innerHTML = "Jiro"; break;
case "40":  text.innerHTML = "Lin Fei"; break;
case "41":  text.innerHTML = "Zariel"; break;
case "42":  text.innerHTML = "Rayman"; break;
case "43":  text.innerHTML = "Dusk"; break;
case "44":  text.innerHTML = "Fait"; break;
case "45":  text.innerHTML = "Thor"; break;
case "46":  text.innerHTML = "Petra"; break;
case "47":  text.innerHTML = "Vector"; break;
case "48":  text.innerHTML = "Volkov"; break;
case "49":  text.innerHTML = "Onyx"; break;
case "50":  text.innerHTML = "Jaeyun"; break;
case "51":  text.innerHTML = "Mako"; break;
case "52":  text.innerHTML = "Magyar"; break;
case "53":  text.innerHTML = "Reno"; break;
case "54":  text.innerHTML = "Munin"; break;
case "55":  text.innerHTML = "Arcadia"; break;
case "56":  text.innerHTML = "Ezio"; break;
case "57":  text.innerHTML = "Tezca"; break;
case "58":  text.innerHTML = "Thea"; break;
case "59":  text.innerHTML = "Red Raptor"; break;
case "60":  text.innerHTML = "Loki"; break;
case "61":  text.innerHTML = "Seven"; break;
case "62":  text.innerHTML = "Vivi"; break;
case "63":  text.innerHTML = "Imugi"; break;
case "64":  text.innerHTML = "King Zuva"; break;
case "65":  text.innerHTML = "Priya"; break;
case "66":  text.innerHTML = "Ransom"; break;
case "67":  text.innerHTML = "Lady Vera"; break;
case "68":  text.innerHTML = "Rupture"; break;
case "69":  text.innerHTML = "Aurus"; break;
case "70":  text.innerHTML = "Qinghua & Baobao"; break;


}
}
}