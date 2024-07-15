var buttonHTML;
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        buttonHTML= this.innerHTML;
        makesound(buttonHTML);
        buttonAnimation(buttonHTML)

    });
}
document.addEventListener("keypress", function(event){
    makesound(event.key)
    buttonAnimation(event.key)
});
function makesound(key){
    switch(key){
        case "a":
            var audio = new Audio('d1.mp3');
            audio.play()
            break
        case "b":
            var audio = new Audio('d2.mp3');
            audio.play()
            break
        case "c":
            var audio = new Audio('d3.mp3');
            audio.play()
            break
        case "d":
            var audio = new Audio('d4.mp3');
            audio.play()
            break
        case "e":
            var audio = new Audio('d5.mp3');
            audio.play()
            break
        case "f":
            var audio = new Audio('d6.mp3');
            audio.play()
            break
        case "g":
            var audio = new Audio('d7.mp3');
            audio.play()
            break
            default:
                console.log(buttonHTML)
    }

}
function buttonAnimation(currentkey){
    var a=document.querySelector("." +currentkey)
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove('pressed')
    }, 200)
}