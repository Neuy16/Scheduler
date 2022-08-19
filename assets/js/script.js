// let now = moment();
// now = document.getElementById('currentDay').innerHTML;
//  create rows for days of the month
let hour = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm']

function dayOfMonth() {
    var responseDate = moment().format('DD/MM/YYYY');
    let today = document.getElementById('currentDay');
    today.textContent = responseDate;
}
dayOfMonth();

for (t=0; t<hour.length; t++) {
    let timeSlot = document.getElementById(t);
    timeSlot.innerHTML = hour[t];
};

let dailyEvent = document.getElementsByTagName('textarea');

// Current day is always on top of the list

// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
