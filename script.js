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

let noseX;
let noseY;
let noseSize = 6;

 let Altitude = 300;
 let SpeedX = 3;
 let SpeedY = 3;
 let AverageSpeed;
let dirX = 1;
let dirY = 1;
let changeAltitude = 0;
var Direction = 1;
let landing = false;
let getCloser = true;

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
    Direction--;
   
    if(Direction < 1){
       Direction = 8
    }
    
   }
   
   function right(){
       Direction++;
       if(Direction > 8){
           Direction = 1
        }
       
      }

      

     






function speedup(){
    SpeedX = SpeedX + 1;
    SpeedY = SpeedY + 1;
}
function speeddown(){
    SpeedX = SpeedX - 1;
    SpeedY = SpeedY - 1;
}


function altup(){
    Altitude+=10;

}
function altdown(){
    Altitude-=10;
}


function fly(){
//grid

ctx.fillStyle = "rgb(11, 11, 79)"
ctx.fillRect(0,0, cd,cd);



//aeroport
//runway
ctx.fillStyle = "yellow";
ctx.fillRect(203,150,3,110);
//landing field
ctx.fillStyle = "green";
ctx.fillRect(200,260,10,40);


switch (Direction) {
        
    case 1:
      dirX = 1;
      dirY = -1;
      noseX = PlaneX +10 + SpeedX;
      noseY = PlaneY -5 - SpeedY;
      break;
    case 2:
        dirX = 1;
      dirY = 0;
      noseX = PlaneX +11 + SpeedX;;
      noseY = PlaneY +2 ;
      break;
    case 3:
        dirX = 1;
        dirY = 1;
        noseX = PlaneX +10 +SpeedX;
      noseY = PlaneY +10 + SpeedY;
      break;
    case 4:
        dirX = 0;
        dirY = 1;
        noseX = PlaneX +2 ;
      noseY = PlaneY +12 + SpeedY;
      break;
    case 5:
        dirX = -1;
        dirY = 1;
        noseX = PlaneX -6 - SpeedX;
      noseY = PlaneY +12 +SpeedY ;
      break;
    case 6:
        dirX = -1;
        dirY = 0;
        noseX = PlaneX -8 - SpeedX;
        noseY = PlaneY +2;

        break;
      case 7:
        dirX = -1;
        dirY = -1;
        noseX = PlaneX -8 - SpeedX;
        noseY = PlaneY -8 - SpeedY;
        break;
      case 8:
        dirX = 0;
        dirY = -1;
        noseX = PlaneX  +2;
        noseY = PlaneY -8 - SpeedY;
  }

PlaneX = PlaneX + (dirX* (SpeedX));
PlaneY = PlaneY + (dirY* (SpeedY));
AverageSpeed = (SpeedX + SpeedY)/2;



if(changeAltitude< -40){
    ctx.font = "12px Arial";
ctx.fillStyle = "red"
ctx.fillText(`you go down fast!`, PlaneX+20, PlaneY+30);
}

if(getCloser == true){
ctx.font = "12px Arial";
ctx.fillStyle = "yellow"
ctx.fillText(`try to get on yellow line with Alt less than 100 and with Speed 1`, 20, 30);
}

if(PlaneX == 200 && PlaneY >150 && PlaneY < 260 && Altitude < 100 && dirY >0){
    getCloser = false;
Direction = 4;
ctx.font = "12px Arial";
ctx.fillStyle = "yellow"
ctx.fillText(`going to land, on landing field, go lower than 50`, PlaneX+20, PlaneY+30);

}

if(PlaneX == 200 && PlaneY >150 && PlaneY >260 && dirY >0 && SpeedX < 3 && Altitude < 100 && changeAltitude <30){
 landing = true;
    ctx.font = "12px Arial";
ctx.fillStyle = "yellow"
ctx.fillText(`landing, go lower than 50, reduce speed to 0`, PlaneX+20, PlaneY+30);
    }

    if(PlaneX == 200 && PlaneY >150 && PlaneY >260  && PlaneY <300 && dirY >0 && SpeedX == 0 && Altitude < 50 && changeAltitude <30){

Altitude = 10;
AverageSpeed = 0.01;
SpeedY = 0;



        ctx.font = "40px Arial";
    ctx.fillStyle = "yellow"
    ctx.fillText(`You are good!`, PlaneX+20, PlaneY+30);
        }
        

        if(AverageSpeed == 0 && landing == false){
            Altitude = Altitude - 50;
        
        ctx.font = "12px Arial";
        ctx.fillStyle = "red"
        ctx.fillText(`you go down fast!`, PlaneX+20, PlaneY+30);
        }

        if(Altitude < 0 && landing == false ){
            Altitude = 0;
            ctx.font = "40px Arial";
            ctx.fillStyle = "red"
            ctx.fillText(`you crashed!`, PlaneX+20, PlaneY+30);
            SpeedX = 0;
            SpeedY = 0;
        
        }


Altitude = Altitude + changeAltitude;

//plane itself
ctx.fillStyle = "orange";
ctx.fillRect(PlaneX,PlaneY,10,10);
ctx.fillRect(noseX, noseY, noseSize,noseSize);

//plane info text
ctx.font = "12px Arial";
// ctx.fillText(`x:${PlaneX} y:${PlaneY}`, PlaneX+20, PlaneY+10);
ctx.fillText(`Alt:${Altitude} Speed:${AverageSpeed}`, PlaneX+20, PlaneY+20);
// ctx.font = "10px Arial";
// ctx.fillStyle = "orange"
// ctx.fillText(`Direction: ${Direction}`, PlaneX+20, PlaneY+40);

};

setInterval(fly, 1000);
