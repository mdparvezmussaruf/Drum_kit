document.querySelectorAll("button").forEach(function(button) {button.addEventListener("click", function(){
    var audio= new Audio("./sound/crash.mp3");
    audio.play();
});



