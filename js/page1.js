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
    let imageInside = document.getElementById("currentWeatherImage");
    let tempToday = document.getElementById("tempToday");
    let feelsLike = document.getElementById("feelsLike");
    let otherInfo = document.getElementById("otherInfo");
    imageInside.setAttribute("src",'https://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png');
    tempToday.innerHTML = `${(Math.floor(data.main.temp + 0.5))}&#8451;`
    feelsLike.innerHTML = `Känns som: ${Math.floor(data.main.feels_like + 0.5)}&#8451`
    otherInfo.innerHTML = `Vindhastighet: ${data.wind.speed}m/s Tryck: ${data.main.pressure}hPa Fuktighet: ${data.main.humidity}% Synlighet: ${Math.floor((data.visibility/1000)+.5)}km`

}


fetch("https://api.openweathermap.org/data/2.5/forecast?q=Huddinge&appid=cfdeb26907457c26a1360e06821fc8b8&cnt=45&units=metric")
.then(foreRes => foreRes.json())
// .then(data => console.log(data))
.then(data => {
    data.list.forEach(info => {
        fillTmrwDiv(info)
    })
});


const fillTmrwDiv = (data) =>{
    if(data.dt_txt.slice(11) == "15:00:00"){
        
        // all the elements needed
        let fillDiv = document.getElementById("tomorrowDiv");
        let mainFill = document.createElement("div");
        let dDivDiv = document.createElement("div");
        let imgAndPDiv = document.createElement("div");
        let dateP = document.createElement("div");
        let img = document.createElement("img");
        let minMax = document.createElement("div");
        let weatherType = document.createElement("div");


        // Structure
        imgAndPDiv.append(img,minMax);
        dDivDiv.append(imgAndPDiv,weatherType);
        mainFill.append(dateP,dDivDiv);
        fillDiv.append(mainFill);

        //Attributes
        weatherType.setAttribute("class","weatherType");
        img.setAttribute("class", "smallImg")
        img.setAttribute('src','https://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png')

        //contentNodes
        let weatherTypeContent = document.createTextNode(data.weather[0].description);
        let minMaxContent = document.createTextNode(`${Math.floor(data.main.temp_max + .5)}/${Math.floor(data.main.temp_min + .5)}`);
        let datePContent = document.createTextNode(data.dt_txt.slice(0,-8));

        //append Nodes
        weatherType.appendChild(weatherTypeContent);
        minMax.appendChild(minMaxContent);
        dateP.appendChild(datePContent);
    }
}
fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GAAJ35pHq420JJRdBIWRTOCi78kSDlQW")
.then(res=>res.json())
.then(data => {
    data.results.books.slice(0,5).forEach(info => {
        fillBookDiv(info)
    })
});
const fillBookDiv = (data)=>{

    // Ids
    let bookDiv = document.getElementById("bookDiv")
    //Create element
    let mainFill = document.createElement("div");
    let bookPlace = document.createElement("div");
    let bookContainer = document.createElement("div");
    let bookTitle = document.createElement("div");
    let bookPub = document.createElement("div");

    //Attributes
    bookPlace.setAttribute("class","bookPlace");
    bookContainer.setAttribute("class","bookContainer");
    bookTitle.setAttribute("class","bookTitle");
    bookPub.setAttribute("class","bookPub");

    //TextNodes
    console.log(data)

    let bookPlaceText = document.createTextNode(data.rank);
    let bookTitleText = document.createTextNode(data.title);
    let bookPubText = document.createTextNode(data.publisher);

    //Append texts
    bookPlace.appendChild(bookPlaceText);
    bookTitle.appendChild(bookTitleText);
    bookPub.appendChild(bookPubText);

    //Apend elements
    bookDiv.append(mainFill);
    mainFill.append(bookPlace, bookContainer);
    bookContainer.append(bookTitle,bookPub);
}