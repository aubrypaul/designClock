function setup(){
  createCanvas(400,400);


function draw(){
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = seconde();

  fill(255);
  text(hr + ':' + mn + ':' + sc, 10,200);

}
