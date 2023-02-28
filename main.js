function preload(){

}
function setup(){
    canvas=createCanvas(690,470);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,150,80,400,300);
    fill("green");
    rect(30,27,610,10);
    rect(30,408,610,10);
    rect(630,35,10,390);
    rect(30,35,10,390);
   
    fill("red");
    circle(40, 408, 50);
    circle(630, 40, 50);
    circle(40, 40, 50);
    circle(630,408,50);
}
function takesnapshot(){
    save("image.png");
}
