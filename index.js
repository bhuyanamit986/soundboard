var audio1 = new Audio("sounds/alarm.wav");
var audio2 = new Audio("sounds/alien.mp3");
var audio3 = new Audio("sounds/applause.wav");
var audio4 = new Audio("sounds/meow.mp3");
var audio5 = new Audio("sounds/smash.mp3");
var audio6 = new Audio("sounds/tanoy.mp3");
let element = document.querySelector('.container');
element.addEventListener('click', (e) => {
    if(e.target.id === 'meow'){
        audio4.play();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio5.pause();
        audio6.pause();
    }
    if(e.target.id === 'applause'){
        audio3.play();
        audio1.pause();
        audio2.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
    }
    if(e.target.id === 'alarm'){
        audio1.play();
        audio4.pause();
        audio2.pause();
        audio3.pause();
        audio5.pause();
        audio6.pause();
    }
    if(e.target.id === 'alien'){
        audio2.play();
        audio1.pause();
        audio4.pause();
        audio3.pause();
        audio5.pause();
        audio6.pause();
    }
    if(e.target.id === 'smash'){
        audio5.play();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio6.pause();
    }
    if(e.target.id === 'tanoy'){
        audio6.play();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio5.pause();
        audio4.pause();
    }

})
