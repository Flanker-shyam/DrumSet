var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        makeAnimation(buttoninnerHTML);

    });
}

// const log = document.getElementById('log');

document.addEventListener('keypress', logKey);

function logKey(e) {
  makeSound(e.key);
  makeAnimation(e.key);
}


function makeSound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttoninnerHTML);
    }
}
// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();

function makeAnimation(currentKey)
{
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function()
    {
        activeKey.classList.remove("pressed");
    }, 100);
}