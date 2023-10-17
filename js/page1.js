let timeOnPage = document.getElementById("timeSpan");

let dayArray=["sön","mån","tis","ons","tor","fre","lör"];

const timeUpdate = ()=>{
    let now = new Date();
    let day = now.getDay();
    let timeRn = now.toLocaleTimeString();

    timeOnPage.innerText = `${dayArray[day]} ${timeRn}`

}
timeUpdate();
setInterval(timeUpdate , 900);


const hudRes = fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7000&timewindow=30")
.then(hudRes => hudRes.json())
.then(hudRes => console.log(hudRes));

fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7006&timewindow=30")
.then(flemRes => flemRes.json())
.then(flemRes => fillDivBus(flemRes));

console.log(slFillDiv);

const trainIcon = '<i class="fa-solid fa-train"></i>'

let slFillDivBus = document.getElementById("slFillDivBus");
const fillDivBus = ()=>{
    
}

console.log(slFillDiv);
