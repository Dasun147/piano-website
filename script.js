
for(var i = 0; i < document.querySelectorAll(".key").length; i++){


document.querySelectorAll(".key")[i].addEventListener("click", function(){
    var getId = this.id;
    
    var audio = new Audio(`white_keys/INSPiano_Vel04_${getId}_01.ogg`);
    audio.play();

})

}
