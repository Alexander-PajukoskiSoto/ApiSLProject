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
.then(data => console.log(data));

fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7006&timewindow=30")
.then(flemRes => flemRes.json())

.then(data => {
    data.ResponseData.Buses.forEach(info => {
        fillDivBusFunc(info)
    });
});


const fillDivBusFunc = (data)=>{
    let fillDivBus = document.getElementById("slFillDivBus");
    let leftDiv= document.createElement('div');
    let rightDiv= document.createElement('div');
    let div = document.createElement('div')
    let icon= document.createElement('i');


    //Classes
    icon.setAttribute('class',data.GroupOfLine)
    let redBus = document.querySelector(".null");
    let blueBus =document.querySelector(".blåbuss");
    let eBus =document.querySelector(".Ersättningsbuss");

    //append
    div.append(leftDiv,rightDiv)
    leftDiv.append(icon)
    fillDivBus.append(div);
 
    redBus.setAttribute('class','fa-solid fa-bus');
    blueBus.setAttribute('class','fa-solid fa-bus');
    eBus.setAttribute('class','fa-solid fa-bus');
    
}
