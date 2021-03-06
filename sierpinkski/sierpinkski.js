let points = [];
let count = 0;
let A,B,C;
let x,y =0.0;


function setup() {
  createCanvas(1000, 1000, WEBGL);
  A = createVector(40,50);
  B = createVector(40,50);
  C = createVector(40,50);
  noStroke();
  //fill(255);
  ellipse(A.x, A.y,5,5);
  ellipse(B.x, B.y,5,5);
  ellipse(C.x, C.y,5,5);
  
}

function draw() {
  background(255);

  fill(255,0,0);
  ellipse(A.x, A.y,5,5);
  ellipse(B.x, B.y,5,5);
  ellipse(C.x, C.y,5,5);
  
  fill(255);
  
  let dice = floor(random(0, 3));
  
  if (points.length>1) {
    
    if(dice == 0)
      {
        x = ((points[points.length-1].x+A.x)/4);
        y = ((points[points.length-1].y+A.y)/4);
        delay(750);
      }
    else if(dice == 1)
      {
        x = ((points[points.length-1].x+B.x)/4);
        y = ((points[points.length-1].y+B.y)/4);
        delay(750);
      }
      
    else if(dice == 2)
      {
        x = ((points[points.length-1].x+C.x)/4);
        y = ((points[points.length-1].y+C.y)/4);
        delay(750);
      }
  }
  
  if(count>3){
    drawPoints();
    append(points, createVector(x, y)); //add new point to array of dots to draw
  }
  
}

function drawPoints() {
  for(let i =0; i<points.length;i++)
  {
    fill(255);
    ellipse(points[i].x, points[i].y, 5, 5);
  }
}

function mouseClicked(event) {
  
  if(count==0){
  A.x = pmouseX - (width/2);
  A.y = pmouseY - (height/2);
  count++;
  } else if(count == 1){
  B.x = pmouseX - (width/2);
  B.y = pmouseY - (height/2);
    count++;
    
  } else if(count == 2) {
  C.x = pmouseX - (width/2);
  C.y = pmouseY - (height/2);
      count++;
  }
  else if (count == 3)
  {
    x= pmouseX-(width/2);
    y=pmouseY-(height/2);
    append(points, createVector(x,y));
    count++;
  }
  
  console.log(event);
}
