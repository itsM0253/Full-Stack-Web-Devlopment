// grabs the length of how many buttons with the class drum
var size = document.querySelectorAll(".drum").length;

for(var i = 0; i < size; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// what to do when click detected
function handleClick() {
    alert("I got clicked");
}