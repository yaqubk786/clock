const hrTime = document.querySelector(".time-hour");
const minTime = document.querySelector(".time-min");
const secTime = document.querySelector(".time-sec");
const ampm = document.getElementById("pm");

function addZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}



function currentTime()
{
    
const d= new Date();

var hrt= d.getHours();
var mint= d.getMinutes();
var sect= d.getSeconds();


hrTime.innerHTML=`${addZero(hrt%12 || 12)}`;
minTime.innerHTML=`${addZero(mint)}`;
secTime.innerHTML=`${addZero(sect)}`;
ampm.innerHTML =    `${hrt >= 12 ? 'PM' : 'AM'}`;

// hrTime=addZero(hrTime);

}


setInterval(currentTime, 1000);

const bgimage= document.querySelector("#lunch");
const good= document.querySelector("#div3");



function noonAfter(){

    good.innerText ="Good Afternoon !!";
    bgimage.style.backgroundImage = "url('./lunch.jpg')";
}

function morning(){

    good.innerText ="Good Morning !!";
    bgimage.style.backgroundImage = "url('./wake.jpeg')";
}

function nightFun(){

    good.innerText ="Good Night !!";
    bgimage.style.backgroundImage = "url('./night.jpeg')";
}

let d= new Date();

let hrt= d.getHours();

function chillKaro(){
    good.innerText ="keep calm !!";
      bgimage.style.backgroundImage = "url('./constant.jpg')";
    }
    chillKaro();


    //time slot - morning
const morningSlot = document.querySelector('.day-slot');



morningSlot.addEventListener("change", function (){ 


  console.log(hrt);
  console.log(this.value);

  if (this.value==hrt) {     
      morning();}

   else{
   chillKaro();
   }
});


//time slot - noon
const noonSlot = document.querySelector('.noon-slot');
noonSlot.addEventListener("change", function (){
  if (this.value==hrt) {     
   noonAfter();}

 else{
 chillKaro();
 }

});

//time slot-night
const nightSlot = document.querySelector('.night-slot');

nightSlot.addEventListener("change", function (){
  if (this.value==hrt) {    
    nightFun();}

 else{
 chillKaro();
 }
});


// function realTimeFun(){

//     if(hrt>=5 && hrt<12){  
    
//       morning();
    
//       }else if(hrt>=12 && hrt<18){
      
//         noonAfter();
    
//       }else if(hrt>=18 && hrt<24){
      
//            nightFun();
       
//       }else{
        
     
//           good.innerText ="Chill Karo";
//           bgimage.style.backgroundImage = "url('./chillout.jpg')";
    
//       }
//     };
//     realTimeFun()
let isParty = false;

function party()
{
    if (!isParty) {
        partybutton.innerText="End Party"
        good.innerText ="IT'S PARTY TIME";
        bgimage.style.backgroundImage = "url('party-dance.gif')";
    } else {
        chillKaro();
        partybutton.innerText="lets party"
    } isParty=!isParty;
}

const partybutton=document.getElementById("div4")


