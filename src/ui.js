// Shorthand for $( document ).ready()
$(function () {
    console.log("ready!");
    // A $( document ).ready() block.

    // Typing Animation
    var typeString = ["👨‍💻, - Software Dev.", "Python", "JavaScript", "🖖 - Vue.js", "Solidity", "🔥 - Firebase", "HTML5 & CSS3", "❤️ - A little Love", "✌️ - A little Peace", "🥊 - A little Passion"];
    var i = 0;
    var count = 0
    var selectedText = '';
    var text = '';
    (function type() {
        if (count == typeString.length) {
            count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('typing').innerHTML = text;
        if (text.length === selectedText.length) {
            count++;
            i = 0;
        }
        setTimeout(type, 210);
    }());

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }


});


//Clock;
function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var shortDays = [
            'Sun', //Sunday starts at 0
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
    ];
    var longDays = [
            'Sunday', //Sunday starts at 0
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
    ];
    var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    d = new Date(); //This returns Wed Apr 02 2014 17:28:55 GMT+0800 (Malay Peninsula Standard Time)
    m = d.getMonth();
    month = (months[m]);
    date = d.getDate();
    year = d.getFullYear();
    x = d.getDay(); //This returns a number, starting with 0 for Sunday

    var day = (shortDays[x]);
    var longDay = (longDays[x]);

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours === 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = day + " " + currentHours + ":" + currentMinutes + " " + timeOfDay;
    var longTimeString = longDay + ", " + month + " " + date + ", " + year;
    $("#clock").html(currentTimeString);
    $("#date").html(longTimeString);

}

$(document).ready(function() {
    updateClock();
    setInterval('updateClock()', 1000);
});


// Volume Logic





// Anime.js 

// * * Loader  Animation * * //

$(document).ready(function() {
var maxElements = 250;
var duration = 1500;
var toAnimate = [];
var radius = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
var distance = radius / 4 <= 150 ? 150 : radius / 4; 
var colors = ['#FFF', '#101', '#101', '#FFF'];

var createElements = (function() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < maxElements; i++) {
    var el = document.getElementById('lil-lodder');
    el.classList.add('particule');
    el.style.color = colors[anime.random(0, 3)];
    toAnimate.push(el);
    fragment.appendChild(el);
  }
  document.body.appendChild(fragment);
})();

var animate = function(el, i) {
  var angle = Math.random() * Math.PI * 2;
  anime({
    targets: el,
    translateX: [0, Math.cos(angle) * distance],
    translateY: [0, Math.sin(angle) * distance],
    scale: [
      {value: [0, 1], duration: 400, easing: 'easeOutBack'},
      {value: 0, duration: 400, delay: duration - 800, easing: 'easeInBack'}
    ],
    offset: (duration / maxElements) * i,
    duration: duration,
    easing: 'easeOutSine',
    loop: true
  });
}

toAnimate.forEach(animate);

});