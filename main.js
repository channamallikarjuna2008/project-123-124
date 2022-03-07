function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560, 150);

    posenet=ml5.posenet(video,modelLoaded);
 posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is intialized!');
}
function gotPoses(results)
    {
if(results.length>0){
    console.log(results);
}
 }

 function draw(){
     background('grey');
 }
