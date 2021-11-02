import { formatError } from "./common.js";
const input = document.getElementById('input');
const blockTime = document.querySelector('.time');
let interval;
//import { Howl } from "https://raw.githubusercontent.com/goldfire/howler.js/master/dist/howler.core.min.js"
let audio = new Howl({
    src: ['./audio/notification.mp3']
})

 
blockTime.innerHTML = 0;
input.value = 0;
const end = () => {
    alert('end');
}

document.getElementById('start').addEventListener('click', () => {
    if (input.value < 0) {
        input.value = 0;
        blockTime.innerHTML = 0; 
        
    } else {
        clearInterval(interval);

    }
    blockTime.innerHTML = input.value;
    interval = setInterval(subtractTime, 1000,);
    
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);

});

document.querySelectorAll('reset').addEventListener('click', () => {
    input.value = 0;
    blockTime.innerHTML = 0;
});

function subtractTime() {
    if (blockTime.innerHTML > 0) {
        blockTime.innerHTML--;
        input.value--;
        if (input.value < 0 || blockTime.innerHTML == 0) {
            input.value = 0;
            blockTime.innerHTML = 0;
        }
    } else {
        clearInterval(interval);
        audio.play();
        timer__err.innerHTML = formatError("Время закончилось!")  
    }
}
