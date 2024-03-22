document.addEventListener("DOMContentLoaded", function() {
    var countDownDate = new Date("Mar 25, 2024 11:00:00").getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();
        
        var distance = countDownDate - now;
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
        
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").style.display = "none";
            document.getElementById("headline").style.display = "none";
            document.getElementById("content").style.display = "block";
            document.getElementById("headline2").style.display = "block";

        }
    }, 1000);
});
