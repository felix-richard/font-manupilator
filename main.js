function setup(){
create= createCapture(VIDEO);
create.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotposes); 
}
function modelLoaded()
{console.log("poseNet is Initiallized")
}
function gotposes(results)
{
    if (results.length>0)
    {
        console.log(results)

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log('leftWristX = ' + leftWristX + "rightWristX = " + rightWristX+"difference ="+difference);
    }
}
function draw()
{
    background("#edf2f4")
     textSize(34)
     fill()
}
function textSize()
{
    textSize(Felix,30,40)
}