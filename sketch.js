let birdX = -50;
function setup() {
  createCanvas(700, 500);
}

function draw() {
  // Golden sunset sky
  background(255, 170, 95);

  // Setting sun
  noStroke();
  fill(255, 220, 90);
  ellipse(350, 230, 140, 140);

  // Distant hills
  fill(110, 145, 85);
  ellipse(180, 390, 550, 250);

  fill(75, 120, 75);
  ellipse(540, 410, 550, 250);

  // Foreground grass
  fill(45, 105, 60);
  rect(0, 420, 700, 80);

  // Winding river
  fill(85, 155, 190);
  beginShape();
  vertex(300, 420);
  vertex(420, 420);
  vertex(520, 455);
  vertex(650, 500);
  vertex(150, 500);
  vertex(270, 460);
  endShape(CLOSE);

  // Golden reflections
  stroke(255, 210, 100);
  strokeWeight(3);
  line(330, 435, 390, 435);
  line(310, 455, 420, 455);
  line(280, 480, 460, 480);
  noStroke();
  
  // LEFT PALM TREE
  fill(105, 65, 40);
  rect(85, 310, 18, 115);

  // Left palm leaves
  fill(35, 95, 45);
  ellipse(60, 315, 95, 20);
  ellipse(125, 315, 95, 20);
  ellipse(95, 285, 22, 95);

  // RIGHT PALM TREE
  fill(105, 65, 40);
  rect(595, 290, 18, 135);

  // Right palm leaves
  fill(30, 85, 40);
  ellipse(570, 295, 100, 20);
  ellipse(635, 295, 100, 20);
  ellipse(605, 265, 22, 100);
  
  // Small flowers on the left
  fill(240, 80, 65);
  ellipse(45, 455, 18, 18);
  ellipse(65, 455, 18, 18);
  ellipse(55, 445, 18, 18);
  ellipse(55, 465, 18, 18);

  // Yellow flower center
  fill(255, 220, 80);
  ellipse(55, 455, 12, 12);

  // Small flowers on the right
  fill(255, 140, 175);
  ellipse(635, 455, 18, 18);
  ellipse(655, 455, 18, 18);
  ellipse(645, 445, 18, 18);
  ellipse(645, 465, 18, 18);

  // Yellow flower center
  fill(255, 220, 80);
  ellipse(645, 455, 12, 12);

  // Grass blades
  stroke(85, 155, 65);
  strokeWeight(3);

  line(130, 480, 120, 460);
  line(130, 480, 135, 450);
  line(130, 480, 145, 460);

  line(560, 480, 550, 460);
  line(560, 480, 565, 450);
  line(560, 480, 575, 460);

  noStroke();
  
  // Flying bird animation
  fill(55, 45, 40);
  noStroke();

  // Bird body
  ellipse(birdX, 130, 35, 15);

  // Bird head
  ellipse(birdX + 18, 125, 15, 15);

  // Bird wings
  triangle(
    birdX - 5, 130,
    birdX - 25, 105,
    birdX + 5, 125
  );

  triangle(
    birdX - 5, 130,
    birdX - 15, 150,
    birdX + 8, 130
  );

  // Bird beak
  fill(255, 190, 50);
  triangle(
    birdX + 25, 125,
    birdX + 35, 129,
    birdX + 25, 132
  );

  // Move the bird across the screen
  birdX = birdX + 2;

  // Restart when bird leaves the screen
  if (birdX > width + 50) {
    birdX = -50;
  }
  
  // Butterfly follows the mouse
  push();
  translate(mouseX, mouseY);

  noStroke();

  // Upper wings
  fill(255, 150, 40);
  ellipse(-15, -10, 30, 35);
  ellipse(15, -10, 30, 35);

  // Lower wings
  fill(255, 210, 70);
  ellipse(-12, 12, 25, 25);
  ellipse(12, 12, 25, 25);

  // Wing decorations
  fill(255, 240, 160);
  ellipse(-18, -12, 10, 10);
  ellipse(18, -12, 10, 10);

  // Butterfly body
  fill(60, 45, 40);
  ellipse(0, 0, 9, 35);

  // Butterfly head
  ellipse(0, -20, 12, 12);

  // Antennae
  stroke(60, 45, 40);
  strokeWeight(2);
  line(-3, -24, -10, -35);
  line(3, -24, 10, -35);

  pop();

}
