//Make date object
let date = new Date();
//get today
let today = date.toLocaleDateString();
//get the element that is to be changed
const timeDiv = document.getElementById("timeDiv");
//Textnode with today's date
const timeDivText = document.createTextNode("Date today: " + today);
//appends it to HTML page
timeDiv.appendChild(timeDivText)

//fetch
fetch("https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyCvxwWO4TIHz_KnRn1EwKh6YoQlkNTIRGs")
//json convert
.then(res=>res.json())
//calls function with foreach-loop that first sorts items with info from API, then appends them once(after foreachloop)
.then(data => {
    data.items.forEach(info => {
        sortArray(info)
    })
    calendarArray.forEach(item => fillCalendar(item))
});
//Array with all the lessons
let calendarArray = [];
//function that sorts everything
const sortArray = (data)=> {
    //I don't know why it's defined twice, vut too scared to remove it now
    let date = new Date();

    //if to make sure you only get today's lessons
    if(date.toLocaleDateString() == data.start.dateTime.slice(0,-15)){
        //I don't know why it's defined twice, vut too scared to remove it now
        let date = new Date();
        //pushes them all into an array with the time it start, and the lesson name
        calendarArray.push(`${data.start.dateTime.slice(11,-9)} ${data.summary}`);
        //sorts it(very cool)
        calendarArray.sort();
    }
}
//The function that appends the values
const fillCalendar = ()=>{
    //Ids
    let fillDiv = document.getElementById("fillCalendar");

    //create elemnts
    let div = document.createElement("div");

    //create text node
    let divText = document.createTextNode(calendarArray[counter-1]);

    //apend text
    div.append(divText);

    //apend element
    fillDiv.append(div);
}
