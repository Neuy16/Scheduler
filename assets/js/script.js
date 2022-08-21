// let now = moment();
//  create rows for days of the month
let hour = [moment().set({"hour": 9}).format('ha'), moment().set({"hour": 10}).format('ha'), moment().set({"hour": 11}).format('ha'), moment().set({"hour": 12}).format('ha'), moment().set({"hour": 13}).format('ha'), moment().set({"hour": 14}).format('ha'), moment().set({"hour": 15}).format('ha'), moment().set({"hour": 16}).format('ha'), moment().set({"hour": 17}).format('ha')];
let dailyEvent = '';
let checkTime = moment().format('ha');
let timeSlot = '';
let timeColor = '';

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