# smart-interval
A smart version of the setInterval function in javascript.

##usage:
```javascript
var timer_1 = new timer();
timer_1.start(function(){
    //magic here
}, 2000, false);

var timer_2 = new timer();
timer_2.start(function(){
    //more magic here
}, 3000, true);

//change the interval
timer_2.set_interval(4000);

//stop the timer
timer_1.stop();
```

The last parameter of the start function is a boolean if the function needs to be run at 0.
