let isDobOpen = false;
let dateOfBirth; 
const settingIcon = document.getElementById('settingIcon');
const settingContent = document.getElementById('settingContent')
const initialText = document.getElementById('initialText')
const afterDOBbtnText = document.getElementById('afterDOBbtnText')
const dobButton = document.getElementById('dobButton')
const dobInput = document.getElementById('dobInput')

//age states
const yearEl = document.getElementById('years');
const monthEl = document.getElementById('months');
const dayEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');

const makeTwoDigitNumber = (number)=>{
    return number > 9 ? number : `0${number}`
}

const toggleDateOfBirthSelector = ()=>{
    if(isDobOpen){
        settingContent.classList.add('hide');
    }else{
        settingContent.classList.remove('hide')
    }
    isDobOpen = !isDobOpen;
    console.log('Toggle', isDobOpen);
};

const updateAge = ()=>{

    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;

    console.log("dateDiff-->", dateDiff);

    const year = Math.floor(dateDiff/ (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff/(1000 * 60 * 60 * 24 * 365)) % 12);
    console.log("month-->",month);
    const day = Math.floor(dateDiff/(1000 * 60 * 60 * 24)) % 30; 
    const hour = Math.floor(dateDiff/(1000 * 60 * 60)) % 24;  
    const minute = Math.floor(dateDiff/(1000 * 60)) % 60; 
    const second = Math.floor(dateDiff/1000) % 60;

    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month);
    dayEl.innerHTML = makeTwoDigitNumber(day);
    hourEl.innerHTML = makeTwoDigitNumber(hour);
    minuteEl.innerHTML = makeTwoDigitNumber(minute);
    secondEl.innerHTML = makeTwoDigitNumber(second);

}
const setDobHandler = ()=>{

    const dateString = dobInput.value;
    dateOfBirth =  dateString ? new Date(dateString) : null;

    if(dateOfBirth){
        initialText.classList.add('hide');
        afterDOBbtnText.classList.remove('hide')
        // updateAge(); | this way seconds remains constant | we have to set it to work | for that we used seInterval()
        setInterval(()=>updateAge(), 1000);
    }else{
        afterDOBbtnText.classList.add('hide');
        initialText.classList.remove('hide');
    }
}
setDobHandler();
settingIcon.addEventListener('click', toggleDateOfBirthSelector );
dobButton.addEventListener('click',setDobHandler );