function setup(){
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw(){
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();
  translate(width/2,height/2);
  rotate(-90);


  strokeWeight(8);
  noFill();

  stroke(255,100,150);
  let end1 = map(sc, 0,60, 0,360);
  arc(0,0,300,300,0,end1);

  line(0,0,100*cos(end1),100*sin(end1))

  stroke(150,100,255);
  let end2 = map(mn, 0,60, 0,360);
  arc(0,0,280,280,0,end2);

  line(0,0,75*cos(end2),75*sin(end2))

  stroke(150,255,100);
  let end3 = map(hr % 12,0,12, 0,360);
  arc(0,0,260,260,0,end3);

  line(0,0,50*cos(end3),50*sin(end3))

  stroke(255);
  point(0,0);

}
