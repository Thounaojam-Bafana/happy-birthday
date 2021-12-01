song = "";
function preload(){
    song = loadSound('song.mp3');
}
function draw(){}
function play(){
    song.stop();
    song.play();
    song.setVolume(1);
    song.rate(1);  
}
