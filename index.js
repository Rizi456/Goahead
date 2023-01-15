let a = document.getElementById("boll");
let bottom = parseInt(window.getComputedStyle(boll).getPropertyValue("bottom"));
let right = parseInt(window.getComputedStyle(boll).getPropertyValue("right"));
let width = parseInt(window.getComputedStyle(boll).getPropertyValue("width"));
let b = document.getElementById("ground"); 
let groundbottom = parseInt(window.getComputedStyle(ground).getPropertyValue('bottom'));
let groundheight = parseInt(window.getComputedStyle(ground).getPropertyValue('height'));
var btn = document.getElementById("btn");
function play(){
btn.play();
}
function pause(){
    btn.pause();
}

let jumping = false;
let uptime;
let downtime;
let displayscore = document.getElementById("score");
let score =0 ;
function jump(){
if(jumping) return;
uptime = setInterval(() => {
    if(bottom >= groundheight + 250){
        clearInterval(uptime);
    
    downtime = setInterval(() => {
        if(bottom <= groundheight + 10){
            clearInterval(downtime);
            jumping = false;
        }
        bottom -= 10;
        boll.style.bottom = bottom + 'px';
    }, 10);         
    }
    bottom += 10;
    boll.style.bottom = bottom + 'px';
    jumping = true;
}, 20);
}
function showscore(){
    score++;
    displayscore.innerText = score;
}
setInterval(showscore, 1000);
function generateobstacles(){
    let c = document.querySelector('.obstacles');
    let d = document.createElement('div');
    d.setAttribute('class', 'd');
    c.appendChild(d);
    let randomtimeout = Math.floor(Math.random() * 1000) + 1000;
 let dRight = -30;
 let dBottom = 150;
 let dWidth = 30;
 let dHeight = Math.floor(Math.random() * 50) + 50;
 d.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
 ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  function moved(){
    dRight += 5;
    d.style.right = dRight + 'px';
    d.style.bottom = dBottom + 'px';
    d.style.width = dWidth + 'px';
    d.style.height = dHeight + 'px';
    if(right >= dRight - width && right <= dRight +  dWidth && bottom <= dBottom + dHeight){
        alert('Game over! Your score is: '+score);
        clearInterval(dInterval);
        clearTimeout(dTimeout);
        location.reload();
    }
}
let dInterval = setInterval(moved, 20);
let dTimeout = setTimeout(generateobstacles, 1000);
}
generateobstacles();
function control(e){
    if(e.key == 'Arrowup' || e.key == ' '){
        jump();
    }
}
document.addEventListener('keydown', control);

