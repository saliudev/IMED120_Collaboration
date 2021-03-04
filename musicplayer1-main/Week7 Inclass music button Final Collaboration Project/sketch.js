let OPMsong;
let Narutoimg;
let OPMimg;
let OPMopButton;
let NarutoOpButton;
let Narutosong;
let AOTsong;
let AOTimg;
let AOTopButton;


function preload(){
    //Preloaded Images
    Narutoimg = loadImage('Images/Narutocover.jpg');
    OPMimg = loadImage('Images/Ok.jpg');
    AOTimg = loadImage('Images/Aot.jpg');
    
    //preloaded Songs
    AOTsong = loadSound('Songs/AOTop2.mp3');
    Narutosong = loadSound('Songs/BlueBird.mp3');
    OPMsong = loadSound("Songs/OnePunchManOP.mp3");
    }
    
function setup() {
  // put setup code here
    createCanvas(3840, 2160);
    background(200);
    
    //One Punch Man Opening Button Code
    OPMopButton = createButton('Play One Punch Man Opening!');
    OPMopButton.size(150,50);
    OPMopButton.position(900,500);
    OPMopButton.style('background:orange');
    OPMopButton.mousePressed(playOPMmusic);
    
    //Naruto Opening Button Code
    NarutoOpButton = createButton('Play Naruto Opening!');
    NarutoOpButton.size(150,50);
    NarutoOpButton.position(60,500);
    NarutoOpButton.style('background:orange');
    NarutoOpButton.mousePressed(playNarutomusic);
    
    //AOT Season 2 Opening Button Code
    AOTopButton = createButton('Play AOT Opening!');
    AOTopButton.size(150,50);
    AOTopButton.position(60,1025);
    AOTopButton.style('background:orange');
    AOTopButton.mousePressed(playAotmusic);
    
    //All Images for the song Buttons
    image(Narutoimg, 60, 60, 720, 400);
    image(OPMimg, 900, 60, 720, 400);
    image(AOTimg,60,600, 720,400);
}

function playNarutomusic(){
      if(Narutosong.isPlaying()){
        Narutosong.stop();
    }
    Narutosong.play();
}
function playOPMmusic(){
      if(OPMsong.isPlaying()){
        OPMsong.stop();
    }
    OPMsong.play();
}
function playAotmusic(){
      if(AOTsong.isPlaying()){
        AOTsong.stop();
    }
    AOTsong.play();
}

function draw() {
   
}

/* 
function mousePressed(){
     if(song.isPlaying()){
        song.stop();
    }
    song.play();
}
*/