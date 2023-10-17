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


const hudRes = fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7006&timewindow=30")
.then(hudRes => hudRes.json())
.then(data => console.log(data));

fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7000&timewindow=30")
.then(flemRes => flemRes.json())

.then(data => {
    data.ResponseData.Buses.forEach(info => {
        fillDivBusFunc(info)
    })
    console.log(data)
});


const fillDivBusFunc = (data)=>{
    let fillDivBus = document.getElementById("slFillDivBus");
    let leftDiv= document.createElement('div');
    let rightDiv= document.createElement('div');
    let div = document.createElement('div');
    let numDiv = document.createElement('div');
    let desDiv = document.createElement('div');
    let dTimeDiv = document.createElement('div');
    let icon= document.createElement('i');

    //textNodes
    let lineNumber = document.createTextNode(data.LineNumber);
    let destination = document.createTextNode(data.Destination);
    let dTime = document.createTextNode(data.DisplayTime);

    //Classes
    icon.setAttribute('class', " fa-solid fa-bus");
    numDiv.setAttribute('class',data.GroupOfLine);

    //append text
    dTimeDiv.appendChild(dTime);
    desDiv.appendChild(destination);
    numDiv.appendChild(lineNumber);

    // append elem
    div.append(leftDiv,rightDiv);
    leftDiv.append(icon, numDiv, desDiv);
    rightDiv.append(dTimeDiv);
    fillDivBus.append(div);
}
