var Clock = function(hours, minutes, seconds){

    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    
    this.time = function(){
      var newHour = this.hours;
      var newMinutes = this.minutes;
      var newSeconds = this.seconds;
        
        if (newHour < 10) {
            newHour = "0" + newHour;
        } if (newMinutes < 10) {
            newMinutes = "0" + newMinutes;
        } if (newSeconds < 10) {
            newSeconds = "0" + newSeconds;
        }
        return newHour + ":" + newMinutes+ ":" + newSeconds;
    };
        
   this.tick = function() {  
     this.seconds ++;
           if (this.seconds > 59) {
               this.minutes ++;
               this.seconds = 0;
           } if (this.minutes > 59) {
               this.hours++;
               this.minutes = 0;
           } if (this.hours > 23) {
               this.hours = 0;
           } for (var i = 0; i < this.alarm.length; i++) {
               if (this.alarm[i] === this.time()) {
               console.log(this.time() + " snozze");
               }
           }
};
   
     
    this.alarm = [];
    this.addAlarm = function(alarm) {
    this.alarm.push(alarm);
        };
                   
};
var time1 = new Clock(23, 11, 59);
time1.addAlarm("23:12:00");
time1.addAlarm("00:00:00");
time1.addAlarm("06:00:00");

     console.log(time1.time());
   time1.tick();
console.log(time1.time());
        
        for(var i = 0; i < 86400; i++) {
          time1.tick();
        }
        console.log(time1.time());

