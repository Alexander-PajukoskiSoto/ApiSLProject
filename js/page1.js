let timeOnPage = document.getElementById("timeSpan");

let dayArray=["sön","mån","tis","ons","tor","fre","lör"];

const timeUpdate = ()=>{
    let now = new Date();
    let day = now.getDay();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    timeOnPage.innerText = `${dayArray[day]} ${hours}:${minutes}:${seconds}`

}
timeUpdate();
setInterval(timeUpdate , 900);

fetch("https://api.sl.se/api2/typeahead.json?key=57dcc022c3a741a69222d78e5a189749&searchstring=flemmingsberg")
.then(res => res.json())
.then(res => console.log(res.ResponseData));

fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7000&timewindow=30")
.then(hudRes => hudRes.json())
.then(hudRes => console.log(hudRes));

fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7006&timewindow=30")
.then(flemRes => flemRes.json())
.then(flemRes => console.log(flemRes));