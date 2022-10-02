export function msToTime(duration) {
    var minutes = Math.floor((duration / (1000 * 60)) % 60),
     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
 
   hours = (hours < 10) ? "0" + hours : hours;
   minutes = (minutes < 10) ? "0" + minutes : minutes;      
   return hours + "h : " + minutes + "m";
 }