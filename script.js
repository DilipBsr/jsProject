let date;let start;
let enterDate=document.getElementById("enterDate");
let stop=document.getElementById("stop");
function addDate(){
    inputDate=document.getElementById("date");
    inputTime=document.getElementById("time");
    let dateInmm=inputDate.valueAsNumber+inputTime.valueAsNumber;
    date=new Date(dateInmm);
    if(date){
        start=setInterval(()=>{
            clock();
        },1000)
    }
}
enterDate.addEventListener('click',addDate);
stop.addEventListener('click',()=>{
    clearInterval(start);
})

function clock(){
    let ActualDate=new Date();
    let diff=0;
    if(date>ActualDate){
        diff=date-ActualDate-(330*60*1000);
    }else{
        diff=ActualDate-date-(330*60*1000);
    }
    day=(Math.floor(diff/1000/3600/24));
    hour=Math.floor(diff/1000/3600)%24;
    min=Math.floor(diff/1000/60)%60;
    sec=Math.floor(diff/1000)%60;
    year=(diff/1000/3600/24/365).toFixed(2);
    if(sec>=0){
        display()
    }
    function display(){
        document.getElementById("hour").innerHTML=`<div id="day">
        <div class="input"><input type="text" readonly placeholder="${hour}"><br><label for="">HOUR</label></div>
        </div>`
        document.getElementById("min").innerHTML=`<div id="min">
        <div class="input"><input type="text" readonly placeholder="${min}"><br><label for="">MIN</label></div>
        </div>`
        document.getElementById("sec").innerHTML=`<div id="sec">
        <div class="input"><input type="text" readonly placeholder="${sec}"><br><label for="">SEC</label></div>
        </div>`
        document.getElementById("day").innerHTML=`<div id="day">
        <div class="input"><input type="text" readonly placeholder="${day}"><br><label for="">DAY</label></div>
        </div>`
        document.getElementById("year").innerHTML=`<div id="day">
        <div class="input"><input type="text" readonly placeholder="${year}"><br><label for="">YEAR</label></div>
        </div>`
    }
}

