document.querySelectorAll("button").forEach(function (button) {
    // Add click event listener to buttons
    button.addEventListener("click", function () {
        var id = this.innerHTML; // Get button's inner HTML
        playSound(id); // Call playSound function
        animationButton(id);
    });
});

// Add keyboard event listener
document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase(); // Get the pressed key
    playSound(key); // Call playSound function
    animationButton(key);
});

// Function to play sound based on the key or button
function playSound(id) {
    if (id === "w") {
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
    } else if (id === "a") {
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
    } else if (id === "s") {
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
    } else if (id === "d") {
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    } else if (id === "j") {
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
    } else if (id === "k") {
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
    } else if (id === "l") {
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
    }

}

function animationButton(currentkey){
    var activeButton= document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed");
    setTimeout(
        function(){ activeButton.classList.remove("pressed")}, 200
    );
    

}
