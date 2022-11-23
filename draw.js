 let whiteButton;
 let saveButton;
 let homeButton;
 let canvas;
 let monstereyes;
 let mySfondi = 0;
 let myColor = ("black");

 function preload() {
   monstereyes = loadImage('assets/monstereyes.png');
   sfondo1 = loadImage('assets/sfondi-09.png');
   sfondo2 = loadImage('assets/sfondi-10.png');
   sfondo3 = loadImage('assets/sfondi-11.png');
   sfondo4 = loadImage('assets/sfondi-12.png');

 }

 function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
   setMoveThreshold(12);

   background('white');

   imageMode(CENTER);

   //to clean the page and make the background white again (lol)
   whiteButton = createImg('./assets/icone-21.png'); 
   whiteButton.position(width/1.4, height/1.2); 
   whiteButton.size(60, 60); 
   whiteButton.style(
     "position:absolute; padding: 28px;"
   );
   whiteButton.mousePressed(whiteCanvas); //callback


   saveButton = createImg('./assets/icone-19.png'); 
   saveButton.position(0, height/1.2); 
   saveButton.size(60, 60); 
   saveButton.style(
     "position:absolute; padding: 28px 22px;"
   );
   saveButton.mousePressed(saveMonster); 



   homeButton = createImg('./assets/icone-20.png'); 
   homeButton.position(0, 32); 
   homeButton.size(60, 60); 
   homeButton.style(
     "position:absolute; padding: 16px 22px;"
   );
   homeButton.mousePressed(goToHomePage); 

   shake = createImg('./assets/shake-21.png');
   shake.position(width/1.4, 32); 
   shake.size(60,60); 
   shake.style(
    "position:absolute; padding: 16px 22px;"
   );
  


   push();
 	let blue = createImg("./assets/colori-14.png");
   blue.position(24, height/1.25); 
   blue.size(40, 40); 
   blue.style(
     "position:absolute; margin-bottom: 0px;"
   );
 	blue.mousePressed(changeBlue);
   pop();


   push();
 	let green = createImg("./assets/colori-15.png");
   green.position(24, height/1.25); 
   green.size(40, 40); 
   green.style(
     "position:absolute; margin-top: -45px;"
   );
 	green.mousePressed(changeGreen);
   pop();


   push();
 	let violet = createImg("./assets/colori-16.png");
   violet.position(24, height/1.25); 
   violet.size(40, 40); 
   violet.style(
     "position:absolute; margin-top: -90px;"
   );
 	violet.mousePressed(changeViolet);
   pop();


   push();
 	let purple = createImg("./assets/colori-17.png");
   purple.position(24, height/1.25); 
   purple.size(40, 40); 
   purple.style(
     "position:absolute; margin-top: -135px;"
   );
 	purple.mousePressed(changePurple);
   pop();


   push();
 	let black = createImg("./assets/colori-18.png");
   black.position(24, height/1.25); 
   black.size(40, 40); 
   black.style(
     "position:absolute; margin-top: -180px;"
   );
 	black.mousePressed(changeBlack);
   pop(); 
 }

 function whiteCanvas() {
   background('white');
 }

 function changeBlue() {
 	myColor = ("#006ED0");
 }

 function changeGreen() {
 	myColor = ('rgb(0,255,0)');
 }

 function changeViolet() {
 	myColor = ("#B48CFC");
 }

 function changePurple() {
 	myColor = ("purple");
 }

 function changeBlack() {
 	myColor = ("black");
 }

 function deviceShaken() {
   mySfondi+=1;

   if (mySfondi === 1) {
     image(sfondo1, width/2, height/2,windowWidth, windowHeight);
   }
   if (mySfondi === 2) {
     image(sfondo2, width/2, height/2,windowWidth, windowHeight );
   } else if (mySfondi === 3) {
     image(sfondo3, width/2, height/2,windowWidth, windowHeight);
   } else if (mySfondi === 4) {
     image(sfondo4, width/2, height/2,windowWidth, windowHeight );
   } else if (mySfondi>= 4) {
     mySfondi=0;
   }
 }


 function draw() {
   image(monstereyes, width/2, height/2, 300, 300);
   if (mouseIsPressed) {
     strokeWeight(10);
     stroke(myColor);
     line(pmouseX, pmouseY, mouseX, mouseY);
   }
 }

 function goToHomePage() {
   window.open("index.html", "_self");
 }

 function saveMonster() {
   save("myMonster.png");
 }

 function touchMoved() {
 	return false;
 }

 // request permissions on iOS
 function touchEnded(event) {
 	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
 		DeviceOrientationEvent.requestPermission()
 	}
 }