fetch("https://www.googleapis.com/calendar/v3/calendars/c_d9aaaa6aa5b776b23b57ec82ab49a0b39b34177b8390aa055f926d10033e3648@group.calendar.google.com/events?key=AIzaSyCvxwWO4TIHz_KnRn1EwKh6YoQlkNTIRGs")
.then(res=>res.json())
.then(data => {
    data.items.forEach(info => {
        console.log(info)
    })
});

