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

hrTime=addZero(hrTime);

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

const d= new Date();

var hrt= d.getHours();

function realTimeFun(){

    if(hrt>=5 && hrt<12){  
    
      morning();
    
      }else if(hrt>=12 && hrt<18){
      
        noonAfter();
    
      }else if(hrt>=18 && hrt<24){
      
           nightFun();
       
      }else{
        
     
          good.innerText ="Chill Karo";
          bgimage.style.backgroundImage = "url('./chillout.jpg')";
    
      }
    };
    realTimeFun()






