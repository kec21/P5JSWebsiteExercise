function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(200);
  quad(1500, 700, 100, 50, 25, 12, 30, 1000)
  fill("red")
  stroke("black")
  strokeWeight(20)
  quad(400, 100, 500, 240, 560, 420, 160, 180)
  fill("blue")
  strokeWeight(10)
  quad(200, 700, 450, 120, 250, 200, 100, 100)
  
}
