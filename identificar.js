objects=[];
status="";
function preload(){
    video=createVideo("short.mp4");

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    canvas.position(200,200);
    video.hide()
}
function identificar(){
    objectDetector=ml5.objectDetector("cocossd",identi);
    document.getElementById("identifico").innerHTML="el objeto deesta identificando"
}
function identi(){
    console.log("cargado");
    status=true;
    video.loop();
    video.speed(1);
    video.volumen(0.5);

}
function gotResult(error,results){
if (error) {
  console.log(error)  
}
else {
    console.log(results);
    objects=results
}}
function draw(){
    image(video,0,0,500,500);


if(status != "")
{
  objectDetector.detect(video, gotResult);
  for (i = 0; i < objects.length; i++) {
    document.getElementById("identifico").innerHTML = "Status : Objects Detected";
    document.getElementById("cargar").innerHTML = "Number of objects detected are : "+ objects.length;

    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  }
}
}


