let timeOnPage = document.getElementById("timeSpan");

let dayArray=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const timeUpdate = ()=>{
    let now = new Date();
    let day = now.getDay();
    let timeRn = now.toLocaleTimeString();

    timeOnPage.innerText = `${dayArray[day]} ${timeRn}`

}
timeUpdate();
setInterval(timeUpdate , 900);

//kan fixa tåg senare
const flemRes = fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7006&timewindow=30")
.then(flemRes => flemRes.json())
.then(data => console.log(data));


// för bussarna Huddinge Sjukhus
fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=70bdaec5bfac4a329b4e63101cce107d&siteid=7000&timewindow=15")
.then(hudRes => hudRes.json())

.then(data => {
    data.ResponseData.Buses.forEach(info => {
        fillDivBusFunc(info)
    })
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
    rightDiv.setAttribute('class', 'pushRight')
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

/////////////////////////////////////////////////////////////
//                      BUS END                            //
/////////////////////////////////////////////////////////////

fetch('https://api.openweathermap.org/data/2.5/weather?lat=59.2293827&lon=17.9748815&units=metric&appid=cfdeb26907457c26a1360e06821fc8b8')
.then(weathRes => weathRes.json())
.then(data => fillWeathBox(data));


const fillWeathBox = (data)=>{

    //element gets
    console.log(data);
    let todayDiv = document.getElementById("todayDiv");
    let tomorrowDiv = document.getElementById("tomorrowDiv");
    let imageInside = document.getElementById("currentWeatherImage");
    let tempToday = document.getElementById("tempToday");
    let feelsLike = document.getElementById("feelsLike");
    let otherInfo = document.getElementById("otherInfo");
    imageInside.setAttribute("src",'https://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png');
    tempToday.innerHTML = `${(Math.floor(data.main.temp + 0.5))}&#8451;`
    feelsLike.innerHTML = `Känns som: ${Math.floor(data.main.feels_like + 0.5)}&#8451`
    otherInfo.innerHTML = `Vindhastighet: ${data.wind.speed}m/s Tryck: ${data.main.pressure}hPa Fuktighet: ${data.main.humidity}% Synlighet: ${Math.floor((data.visibility/1000)+.5)}km`

}
