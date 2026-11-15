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
      var audioZ = new Audio("./white_keys/INSPiano_Vel04_C4_01.ogg");
      audioZ.play();
      setSmoothSoundEnding(audioZ);
      break;
    case "x":
      var audioX = new Audio("./white_keys/INSPiano_Vel04_D4_01.ogg");
      audioX.play();
      setSmoothSoundEnding(audioX);
      break;
    case "c":
      var audioC = new Audio("./white_keys/INSPiano_Vel04_E4_01.ogg");
      audioC.play();
      setSmoothSoundEnding(audioC);
      break;
    case "v":
      var audioV = new Audio("./white_keys/INSPiano_Vel04_F4_01.ogg");
      audioV.play();
      setSmoothSoundEnding(audioV);
      break;
    case "b":
      var audioB = new Audio("./white_keys/INSPiano_Vel04_G4_01.ogg");
      audioB.play();
      setSmoothSoundEnding(audioB);
      break;
    case "n":
      var audioN = new Audio("./white_keys/INSPiano_Vel04_A4_01.ogg");
      audioN.play();
      setSmoothSoundEnding(audioN);
      break;
    case "m":
      var audioM = new Audio("./white_keys/INSPiano_Vel04_B4_01.ogg");
      audioM.play();
      setSmoothSoundEnding(audioM);
      break;
    case "q":
      var audioQ = new Audio("./white_keys/INSPiano_Vel04_C5_01.ogg");
      audioQ.play();
      setSmoothSoundEnding(audioQ);
      break;
    case "w":
      var audioW = new Audio("./white_keys/INSPiano_Vel04_D5_01.ogg");
      audioW.play();
      setSmoothSoundEnding(audioW);
      break;
    case "e":
      var audioE = new Audio("./white_keys/INSPiano_Vel04_E5_01.ogg");
      audioE.play();
      setSmoothSoundEnding(audioE);
      break;
    case "r":
      var audioR = new Audio("./white_keys/INSPiano_Vel04_F5_01.ogg");
      audioR.play();
      setSmoothSoundEnding(audioR);
      break;
    case "t":
      var audioT = new Audio("./white_keys/INSPiano_Vel04_G5_01.ogg");
      audioT.play();
      setSmoothSoundEnding(audioT);
      break;
    case "y":
      var audioY = new Audio("./white_keys/INSPiano_Vel04_A5_01.ogg");
      audioY.play();
      setSmoothSoundEnding(audioY);
      break;
    case "u":
      var audioU = new Audio("./white_keys/INSPiano_Vel04_B5_01.ogg");
      audioU.play();
      setSmoothSoundEnding(audioU);
      break;

    case "s":
      var audioS = new Audio("./white_keys/INSPiano_Vel04_Cs4_01.ogg");
      audioS.play();
      setSmoothSoundEnding(audioS);
      break;
    case "d":
      var audioD = new Audio("./white_keys/INSPiano_Vel04_Ds4_01.ogg");
      audioD.play();
      setSmoothSoundEnding(audioD);
      break;
    case "g":
      var audioG = new Audio("./white_keys/INSPiano_Vel04_Fs4_01.ogg");
      audioG.play();
      setSmoothSoundEnding(audioG);
      break;
    case "h":
      var audioH = new Audio("./white_keys/INSPiano_Vel04_Gs4_01.ogg");
      audioH.play();
      setSmoothSoundEnding(audioH);
      break;
    case "j":
      var audioJ = new Audio("./white_keys/INSPiano_Vel04_As4_01.ogg");
      audioJ.play();
      setSmoothSoundEnding(audioJ);
      break;

    case "2":
      var audio2 = new Audio("./white_keys/INSPiano_Vel04_Cs5_01.ogg");
      audio2.play();
      setSmoothSoundEnding(audio2);
      break;
    case "3":
      var audio3 = new Audio("./white_keys/INSPiano_Vel04_Ds5_01.ogg");
      audio3.play();
      setSmoothSoundEnding(audi3);
      break;
    case "5":
      var audio5 = new Audio("./white_keys/INSPiano_Vel04_Fs5_01.ogg");
      audio5.play();
      setSmoothSoundEnding(audio5);
      break;
    case "6":
      var audio6 = new Audio("./white_keys/INSPiano_Vel04_Gs5_01.ogg");
      audio6.play();
      setSmoothSoundEnding(audio6);
      break;
    case "7":
      var audio7 = new Audio("./white_keys/INSPiano_Vel04_As5_01.ogg");
      audio7.play();
      setSmoothSoundEnding(audio7);
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
