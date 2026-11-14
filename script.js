for (var i = 0; i < document.querySelectorAll(".key").length; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    var getId = this.id;
    var getclasskey = this.classList[2];
    keyAnimation(getclasskey);

    var audio = new Audio(`white_keys/INSPiano_Vel04_${getId}_01.ogg`);
    audio.play();
    setSmoothSoundEnding(audio);
  });
}

document.addEventListener("keypress", function (event) {
  var keypress = event.key;
  keypressPlaySound(keypress);
  keyAnimation(keypress);
});

function keypressPlaySound(key) {
  switch (key) {
    case "z":
      var audio = new Audio("./white_keys/INSPiano_Vel04_C4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "x":
      var audio = new Audio("./white_keys/INSPiano_Vel04_D4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "c":
      var audio = new Audio("./white_keys/INSPiano_Vel04_E4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "v":
      var audio = new Audio("./white_keys/INSPiano_Vel04_F4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "b":
      var audio = new Audio("./white_keys/INSPiano_Vel04_G4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "n":
      var audio = new Audio("./white_keys/INSPiano_Vel04_A4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "m":
      var audio = new Audio("./white_keys/INSPiano_Vel04_B4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "q":
      var audio = new Audio("./white_keys/INSPiano_Vel04_C5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "w":
      var audio = new Audio("./white_keys/INSPiano_Vel04_D5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "e":
      var audio = new Audio("./white_keys/INSPiano_Vel04_E5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "r":
      var audio = new Audio("./white_keys/INSPiano_Vel04_F5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "t":
      var audio = new Audio("./white_keys/INSPiano_Vel04_G5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "y":
      var audio = new Audio("./white_keys/INSPiano_Vel04_A5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "u":
      var audio = new Audio("./white_keys/INSPiano_Vel04_B5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;

    case "s":
      var audio = new Audio("./white_keys/INSPiano_Vel04_Cs4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "d":
      var audio = new Audio("./white_keys/INSPiano_Vel04_Ds4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "g":
      var audio = new Audio("./white_keys/INSPiano_Vel04_Fs4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "h":
      var audio = new Audio("./white_keys/INSPiano_Vel04_Gs4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "j":
      var audio = new Audio("./white_keys/INSPiano_Vel04_As4_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;

    case "2":
      var audio = new Audio("./white_keys/INSPiano_Vel04_Cs5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "3":
      var audio = new Audio("./white_keys/INSPiano_Vel04_Ds5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "5":
      var audio = new Audio("./white_keys/INSPiano_Vel04_Fs5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "6":
      var audio = new Audio("./white_keys/INSPiano_Vel04_Gs5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
    case "7":
      var audio = new Audio("./white_keys/INSPiano_Vel04_As5_01.ogg");
      audio.play();
      setSmoothSoundEnding(audio);
      break;
  }
}

function keyAnimation(key) {
  var pressKeyAnimation;

  if (key == 2 || key == 3 || key == 5 || key == 6 || key == 7) {
    pressKeyAnimation = document.querySelector(".b" + key);
  } else {
    pressKeyAnimation = document.querySelector("." + key);
  }

  pressKeyAnimation.classList.add("pressed");

  setTimeout(function () {
    pressKeyAnimation.classList.remove("pressed");
  }, 100);
}

function setSmoothSoundEnding(audio) {
  var fadeInterval = setInterval(function () {
    if (audio.volume > 0.05) {
      audio.volume -= 0.05;
    } else {
      clearInterval(fadeInterval);

      audio.pause();
      audio.currentTime = 0;
      audio.volume = 1;
    }
  }, 20);
}






document.querySelector(".naming").addEventListener("click", function () {
  this.classList.toggle("changeBtnColor1");

  document.querySelectorAll(".name").forEach(function (element) {
    element.classList.toggle("hidden");
  });
});

document.querySelector("#cpBtn1").addEventListener("click", function () {
  this.classList.toggle("changeBtnColor2");
  document.querySelector(".piano-container").classList.toggle("bgColor1");
  document.querySelector("h1").classList.toggle("borderBottomColor1");

  document.querySelector(".piano-container").classList.remove("bgColor2");
  document.querySelector("#cpBtn2").classList.remove("changeBtnColor3");
  document.querySelector("h1").classList.remove("borderBottomColor2");

  document.querySelector(".piano-container").classList.remove("bgColor3");
  document.querySelector("#cpBtn3").classList.remove("changeBtnColor4");
  document.querySelector("h1").classList.remove("borderBottomColor3");
});

document.querySelector("#cpBtn2").addEventListener("click", function () {
  this.classList.toggle("changeBtnColor3");
  document.querySelector(".piano-container").classList.toggle("bgColor2");
  document.querySelector("h1").classList.toggle("borderBottomColor2");

  document.querySelector(".piano-container").classList.remove("bgColor1");
  document.querySelector("#cpBtn1").classList.remove("changeBtnColor2");
  document.querySelector("h1").classList.remove("borderBottomColor1");

  document.querySelector(".piano-container").classList.remove("bgColor3");
  document.querySelector("#cpBtn3").classList.remove("changeBtnColor4");
  document.querySelector("h1").classList.remove("borderBottomColor3");
});

document.querySelector("#cpBtn3").addEventListener("click", function () {
  this.classList.toggle("changeBtnColor4");
  document.querySelector(".piano-container").classList.toggle("bgColor3");
  document.querySelector("h1").classList.toggle("borderBottomColor3");

  document.querySelector(".piano-container").classList.remove("bgColor1");
  document.querySelector("#cpBtn1").classList.remove("changeBtnColor2");
  document.querySelector("h1").classList.remove("borderBottomColor1");

  document.querySelector(".piano-container").classList.remove("bgColor2");
  document.querySelector("#cpBtn2").classList.remove("changeBtnColor3");
  document.querySelector("h1").classList.remove("borderBottomColor2");
});

