const time_picker_element = document.querySelector(".time-picker");

const hour_element = document.querySelector(".time-picker .hour .hr");
const minute_element = document.querySelector(".time-picker .minute .min");

const hour_up = document.querySelector(".time-picker .hour .hour-up");
const hour_down = document.querySelector(".time-picker .hour .hour-down");

const minute_up = document.querySelector(".time-picker .minute .minute-up");
const minute_down = document.querySelector(".time-picker .minute .minute-down");

let d = new Date();

let hour = d.getHours();
let minute = d.getMinutes();
setTime();

// let hour = 0;
// let minute = 0;

//EVENT LISTENERS
hour_up.addEventListener("click", hr_up);
hour_down.addEventListener("click", hr_down);

minute_up.addEventListener("click", min_up);
minute_down.addEventListener("click", min_down);

hour_element.addEventListener("change", hour_change);
minute_element.addEventListener("change", minute_change);

function hour_change(e)
{
    if(e.target.value > 23)
    {
        e.target.value = 23;
    }
    else if(e.target.value < 0)
    {
        e.target.value = "00";
    }

    if(e.target.value == "")
    {
        // e.target.value = formatTime(hour);
        //e.target.value = e.target.value;
        e.target.value = "";
    }

    if(e.target.value >= 0 && e.target.value <= 9)
    {
        e.target.value = "0" + e.target.value;
    }

    hour = e.target.value;
}

function minute_change(e)
{
    if(e.target.value > 59)
    {
        e.target.value = 59;
    }
    else if(e.target.value < 0)
    {
        e.target.value = "00";
    }

    if(e.target.value == "")
    {
        // e.target.value = formatTime(minute);
        e.target.value = "";
    }

    if(e.target.value >= 0 && e.target.value <= 9)
    {
        e.target.value = "0" + e.target.value;
    }

    minute = e.target.value;
}

function hr_up()
{
    hour++;
    if(hour > 23)
    {
        hour = 0;
    }
    setTime();
}

function hr_down()
{
    hour--;
    if(hour < 0)
    {
        hour = 23;
    }
    setTime();
}

function min_up()
{
    minute++;
    if(minute > 59)
    {
        minute = 0;
        if(hour < 23)
        {
            hour++;
        }
        else
        {
            hour = 0;
        }
    }
    setTime();
}

function min_down()
{
    minute--;
    if(minute < 0)
    {
        minute = 59;
        if(hour > 0)
        {
            hour--;
        }
        else
        {
            hour = 23;
        }
    }
    setTime();
}

function setTime()
{
    hour_element.value = formatTime(hour);
    minute_element.value = formatTime(minute);
    time_picker_element.dataset.time = formatTime(hour) + ":" + formatTime(minute);
}

function formatTime(time)
{
    if(time < 10)
    {
        time = "0" + time;
    }
    return time;
}