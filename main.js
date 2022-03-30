function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

    tint_color=""
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    circle(30, 30, 20);
describe('white circle with black outline in mid of gray canvas');
}

function take_snapshot(){
    save('Nikhil.png')
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}