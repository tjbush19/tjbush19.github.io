var wiggle = 5;
var lastChecked = 0;
var buttX = 0;
 var buttY = 0;
var x = 0;
var speed = 7;
var directionx = 1;
var directiony= 1
var angle= 30
var colors=[0, 130, 100, 120]

function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background (108);
  background(220);
  colorMode(RGB, 255);
  fill (5, 102, 209)
  //ellipse(mouseX, mouseY, 50, 50);
  strokeWeight(50)
  //line (mouseX, mouseY, width/2, height)
  if (getQuadrant()  ==1) {
    background(66,134,24);
  }
  else if (mouseX > width/2 && mouseX<width && mouseY > 0 && mouseY < height/2) {
  	text("second quadrant", 20, 20);
  background(66,69, 244);
  }
  else if (mouseX < width/2 && mouseX<width && mouseY > 0 && mouseY > height/2) {
  	text("third quadrant", 40, 40);
  	background(244, 65, 211);
  
  }         
           
  else if (mouseX > width/2 && mouseX<width && mouseY > 0 && mouseY > height/2) {
  	text("fourth quadrant", 60, 60); 
  	background(244, 66, 66);
	}
  
  //line (mouseX, mouseY, width/2, height)
  ellipse(mouseX, mouseY, 10, 10)

  strokeWeight(2);
  // buttX+= directionx*speed;
  // buttY+= directiony*speed;
  buttX+=cos(radians(angle))*speed*directionx;
  buttY+=sin(radians(angle))*speed*directiony;
  if (buttX>width) {
  	directionx= -1 
	}
else if (buttX<0){
  directionx=1 
 }
  if (buttY>height) {
  	directiony=-1 
	}
else if (buttY<0){
  directiony=1 
 }

  
  for (var i = 0; i < 20; i++) {
    var x = map(i, 0, 20,  mouseX, buttX);
    var y = map(i, 0, 20, mouseY, buttY);
    if (i % 2 == 0 ) {
    	x+=wiggle;
    }
    colorMode(HSB, 255);
  	fill (colors[i%4], 255, 255)
    ellipse(x, y, 40, 40);
  
  }
  wiggles();
  drawface ("happy");
  
}

function getQuadrant() {  
if (mouseX > 0 && mouseX < width/2 && mouseY > 0 && mouseY < height/2) {
    return 1
  }
  else if (mouseX > width/2 && mouseX<width && mouseY > 0 && mouseY < height/2) {
  	return 2 
  
  }
  else if (mouseX < width/2 && mouseX<width && mouseY > 0 && mouseY > height/2) {
  
    return 3
  
  }         
           
  else if (mouseX > width/2 && mouseX<width && mouseY > 0 && mouseY > height/2) {
  	return 4 
	}
  
}

// this function changes "wiggle" from positive to negative every 
// 1/2 second
function wiggles() {
	if (millis() - lastChecked > 100) {
  	lastChecked = millis();
    wiggle*= -1; 
    console.log("should be wiggling");
  }
} 

function drawface (mood) {
if (mood=="happy") {
	// ellipse (mouseX,mouseY,55, 55)
	// line()

noStroke();
smooth();
  line(40,30, 85, 75);
  ellipse(mouseX,mouseY,60,60)
  fill (0)
  ellipse(mouseX, mouseY+5, 10, 10);
noSmooth();
ellipse(mouseX+20, mouseY+5,10,10)

}
  
  
}