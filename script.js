var canvas = document.getElementById('mc');
let cd =500;
let cw = cd;
let ch = cd;
canvas.width = cd;
canvas.height = cd;
var ctx = canvas.getContext('2d');
 let xgrid=0;
 let ygrid = 0;

 let PlaneX = Math.floor(Math.random()*500);
 

 let PlaneY = Math.floor(Math.random()*500);

 let Altitude = 300;
 let SpeedX = 300;
 let SpeedY = 300;
 let AverageSpeed;
let dirX = 1;
let dirY = 1;
let changeAltitude = 0;

/* <button onclick="left()">left</button>
<button onclick="up()">up</button>
<button onclick="down()">down</button>
<button onclick="right()">right</button>
</div>
<div id="speed-buttons">
<button onclick="speedup()">speed+</button>
<button onclick="speeddown()">speed-</button></div>

<div id="alt-buttons">
<button onclick="altup()">alt+</button>
<button onclick="altdown()">alt-</button> */

function left(){
    if(dirX >0){
        dirX = -dirX;
    }
}

function right(){
    if(dirX <0){
        dirX = -dirX;
    }
}

function down(){
    if(dirY <0){
        dirY = -dirY;
    }
}

function up(){
    if(dirY >0){
        dirY = -dirY;
    }
}


function speedup(){
    SpeedX = SpeedX + 100;
    SpeedY = SpeedY + 100;
}
function speeddown(){
    SpeedX = SpeedX - 100;
    SpeedY = SpeedY - 100;
}


function altup(){
    changeAltitude+=10;

}
function altdown(){
    changeAltitude-=10;
}


function fly(){
//grid

ctx.fillStyle = "rgb(11, 11, 79)"
ctx.fillRect(0,0, cd,cd);



//aeroport
//runway
ctx.fillStyle = "green";
ctx.fillRect(203,150,2,110);
//landing
ctx.fillRect(200,260,10,40);



PlaneX = PlaneX + (dirX* (SpeedX/100));
PlaneY = PlaneY + (dirY* (SpeedY/100));
AverageSpeed = (SpeedX + SpeedY)/2;



if(changeAltitude< -40){
    ctx.font = "12px Arial";
ctx.fillStyle = "red"
ctx.fillText(`you go down fast!`, PlaneX+10, PlaneY+30);
}




if(PlaneX == 200 && PlaneY >150 && PlaneY < 260 && Altitude < 100 && dirY >0){
SpeedX = 0;
}

if(PlaneX == 200 && PlaneY >150 && PlaneY >260 && dirY >0 && SpeedX == 0 && Altitude < 100 && changeAltitude <30){
    ctx.font = "12px Arial";
ctx.fillStyle = "yellow"
ctx.fillText(`landing!`, PlaneX+10, PlaneY+30);
    }

    if(PlaneX == 200 && PlaneY >150 && PlaneY >260 && dirY >0 && SpeedX == 0 && Altitude < 50 && changeAltitude <30){

Altitude = 10;
AverageSpeed = 0.01;
SpeedY = 0;


        ctx.font = "50px Arial";
    ctx.fillStyle = "yellow"
    ctx.fillText(`You are good!`, PlaneX+10, PlaneY+30);
        }
        

        if(AverageSpeed == 0){
            Altitude = Altitude - 50;
        ctx.font = "12px Arial";
        ctx.fillStyle = "red"
        ctx.fillText(`you go down fast!`, PlaneX+10, PlaneY+30);
        }

        if(Altitude < 0){
            ctx.font = "50px Arial";
            ctx.fillStyle = "red"
            ctx.fillText(`you crashed!`, PlaneX+10, PlaneY+30);
            SpeedX = 0;
            SpeedY = 0;
        
        }


Altitude = Altitude + changeAltitude;

//plane itself
ctx.fillStyle = "orange";
ctx.fillRect(PlaneX,PlaneY,10,10);


//plane info text
ctx.font = "12px Arial";
ctx.fillText(`x:${PlaneX} y:${PlaneY}`, PlaneX+10, PlaneY+10);
ctx.fillText(`alt:${Altitude} Speed:${AverageSpeed}`, PlaneX+10, PlaneY+20);

};

setInterval(fly, 1000);
