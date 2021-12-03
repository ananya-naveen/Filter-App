mouth_x="0";
mouth_y="0";

function preload(){
img=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.position(625,325);

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        mouth_x=results[0].pose.nose.x-20;
        mouth_y=results[0].pose.nose.y+10;
        console.log("Nose x = "+mouth_x);
        console.log("Nose y = "+mouth_y);
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    image(video,0,0,300,300);
    image(img,mouth_x,mouth_y,45,45);
}

function snapshot(){
    save("lipstck.png");
}