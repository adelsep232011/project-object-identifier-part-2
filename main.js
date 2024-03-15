img = "";
status = "";
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
    img = loadImage('dog_cat.jpg') ;
    img = loadImage('eggs.png') ;
    img = loadImage('family.jpg') ;
    img = loadImage('mouses.jpg') ;
    img = loadImage('living room.jpg') ;
 }

 function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
       console.log(error);
    }
    console.log(results);
}