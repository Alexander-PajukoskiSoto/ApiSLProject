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