setInterval(()=>{
let Hours = document.getElementById('hours');
let Minutes = document.getElementById('minutes');
let Seconds = document.getElementById('seconds');

Hrs = new Date().getHours();
mins = new Date().getMinutes();
secs = new Date().getSeconds();
Hrs = (Hrs > 12) ? Hrs-12 : Hrs;

if(secs<10){
    secs = "0" + secs;
}
if(Hrs<10){
    Hrs = "0" + Hrs;
}
if(mins<10){
    mins = "0" + mins;
}
        
        
Hours.innerHTML = Hrs;
Minutes.innerHTML = mins;
Seconds.innerHTML = secs;
},1000)
        
