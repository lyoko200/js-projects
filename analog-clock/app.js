const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

function getTime(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;
    const hourInterval = 30;

    secondsHand.style.transform = `rotate(${seconds * timeInterval}deg)`;
    minutesHand.style.transform = `rotate(${minutes * timeInterval + (seconds / 10)}deg)`;
    hoursHand.style.transform = `rotate(${hours * hourInterval + (minutes / 2)}deg)`;
}


setInterval(getTime, 1000);