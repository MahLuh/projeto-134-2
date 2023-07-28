img = ""
function setup(){
   canvas = createCanvas(400, 400)
   canvas.center()
}
function preload(){
    img = loadImage("bebe-2.jpeg")
}
function draw(){
    image(img, 0, 0, 400, 400)

}
function modelLoaded(){
  canvas.log("modelo inicializado")
}