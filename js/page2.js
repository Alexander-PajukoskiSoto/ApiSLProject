let date = new Date();
let today = date.toLocaleDateString();
const timeDiv = document.getElementById("timeDiv");
const timeDivText = document.createTextNode("Date today: " + today);
timeDiv.appendChild(timeDivText)


fetch("https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyCvxwWO4TIHz_KnRn1EwKh6YoQlkNTIRGs")
.then(res=>res.json())
.then(data => {
    data.items.forEach(info => {
        sortArray(info)
    })
    calendarArray.forEach(item => fillCalendar(item))
});

let calendarArray = [];
let counter = 0;

const sortArray = (data)=> {
    let date = new Date();

    
    if(date.toLocaleDateString() == data.start.dateTime.slice(0,-15)){
        let date = new Date();
        
        counter ++;
        calendarArray.push(`${data.start.dateTime.slice(11,-9)} ${data.summary}`);
        calendarArray.sort();
    }
    

}

const fillCalendar = ()=>{
    //Ids
    let fillDiv = document.getElementById("fillCalendar");

    //create elemnts
    let div = document.createElement("div");

    //create text node
    let divText = document.createTextNode(calendarArray);

    //apend text
    div.append(divText);

    //apend element
    fillDiv.append(div);
}
