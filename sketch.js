let monster;
let myFont;

function preload() {
monster = loadImage('assets/monster.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  imageMode(CENTER);
  
  //star button to go to the 2nd page
  button = createImg('./assets/stella.png');  
  button.size(150, 150); 
  button.position(width/2, height/2);
  button.mousePressed(goToDrawPage); //callback
  
}

function draw() {
  
    background('purple');
    image(monster, width/2, height/2, 400, 400);

    
 let h1 = createElement('h1', 'THE WORLD IS <br/> FULL OF AMAZING MONSTERS!');
  h1.style('color', 'white');
  h1.style(
    "position:absolute; padding: 16px; font-weight: 500; text-align:left;font-style: normal; font-family:'Gothic A1'; font-size:30px;"
  );
  h1.position(0,0);
  

  let h2 = createElement('h2', 'CLICK THE STAR <br/> TO DRAW ONE');
  h2.style('color', 'white');
  h2.style(
    "position:absolute; padding: 16px; font-weight: 500; text-align:left;font-style: normal; font-family:'Gothic A1'; font-size:20px;"
  );
  h2.position(0, height/1.3);
  
}

function goToDrawPage() { 
  window.open("draw.html", "_self");
} 


