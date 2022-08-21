// let now = moment();
//  create rows for days of the month
let hour = [moment().set({"hour": 9}).format('ha'), moment().set({"hour": 10}).format('ha'), moment().set({"hour": 11}).format('ha'), moment().set({"hour": 12}).format('ha'), moment().set({"hour": 13}).format('ha'), moment().set({"hour": 14}).format('ha'), moment().set({"hour": 15}).format('ha'), moment().set({"hour": 16}).format('ha'), moment().set({"hour": 17}).format('ha')];
let dailyEvent = '';
let checkTime = moment().format('ha');
let timeSlot = '';
let timeColor = '';
console.log(checkTime)
console.log(hour)
// Current date
function setup() {
    var responseDate = moment().format('DD/MM/YYYY');
    let today = document.getElementById('currentDay');
    today.textContent = responseDate;
    
    // Hour in the day (9-5)
    for (let t = 0; t < hour.length; t++) {
        timeSlot = document.getElementById(t);
        timeSlot.innerHTML = hour[t];
        timeColor = $('#dailyEvent' + t);
        if (hour[t] == checkTime) {
            timeColor.addClass('present');
        } else if (moment(hour[t], 'ha') < checkTime) {
            timeColor.addClass('past');
        } else {
            timeColor.addClass('future');
        }
    };
}

// Button to save daily events
function saveBtn() {
    for (let i = 0; i < hour.length; i++) {
        dailyEvent = $('#dailyEvent' + i).val();
        localStorage.setItem(i, dailyEvent);
    }
}

function displayEvent() {
    for (let i = 0; i < hour.length; i++) {
        dailyEvent = $('#dailyEvent' + i).val(localStorage[i]);
    }
}

document.getElementById('saveBtn0').addEventListener('click', saveBtn);
document.getElementById('saveBtn1').addEventListener('click', saveBtn);
document.getElementById('saveBtn2').addEventListener('click', saveBtn);
document.getElementById('saveBtn3').addEventListener('click', saveBtn);
document.getElementById('saveBtn4').addEventListener('click', saveBtn);
document.getElementById('saveBtn5').addEventListener('click', saveBtn);
document.getElementById('saveBtn6').addEventListener('click', saveBtn);
document.getElementById('saveBtn7').addEventListener('click', saveBtn);
document.getElementById('saveBtn8').addEventListener('click', saveBtn);

setup();
displayEvent();



// grab current time check against every block of time.... change color for time (put in setup)

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
