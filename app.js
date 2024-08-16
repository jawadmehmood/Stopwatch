let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

function startWatch(){
    if(timer !== undefined){
        clearInterval(timer);
    }
    timer = setInterval(function(){
        seconds += 1;
        if(seconds === 60){
            seconds = 0;
            minutes += 1;
            if(minutes === 60){
                minutes = 0;
                hours += 1;
                if(hours === 24){
                    hours = 0;
                }
            }
        }
        if(seconds < 10){
            second.innerHTML = `: 0${seconds}`;
        }
        else{
            second.innerHTML = `: ${seconds}`;
        }
        if(minutes < 10){
            minute.innerHTML = `: 0${minutes}`;
        }
        else{
            minute.innerHTML = `: ${minutes}`;
        }
        if(hours < 10){
            hour.innerHTML = `0${hours}`;
        }
        else{
            hour.innerHTML = `${hours}`;
        }
    } , 1000)
}

function stopWatch(){
    clearInterval(timer);    
}

function resetWatch(){
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    second.innerHTML = `: 0${seconds}`;
    minute.innerHTML = `: 0${minutes}`;
    hour.innerHTML = `0${hours}`;
}