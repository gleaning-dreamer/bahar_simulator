//at the top set up the things that you need
//remember to declare, initize variableuse strict

let newFont, sound, amplitude, nb, mb, hb, lb, tc1, tc2, blt, bdf, bw, bis, baharFace, baharType; //tc, etc is text color 1 and 2

//preparing for the arrays
let babyText = '';
let babyArray = undefined;
let clearSayings = 1;



//filling the arrays with bahars thoughts
let baharLicks = [
  'wow, lickable',
  'licky',
  'flavorful',
  'best treat for bahar',
  'so good',
  'love this licky treat',
  'purring',
  'you have purchased my love',
  'more licky treats',
  'yummy',
];

let baharDislikes = [
  'nft means not for touching',
  'do not financialize bahar',
  'vectoral capitalism much',
  'get your invisble hand off me',
  'hissing',
  'bite the invisible hand',
  'disappointed in u',
  'i used to live in zucotti park',
  'mad at u',
  'is nothing sacred',
  '*angry yowling*',
];

let baharEats = [
  'ahahah, yummo',
  'these circles are acceptable',
  'crunchies',
  'nutritionally complete',
  'makes my coat so shiny',
  'totally fine',
  'nice and full',
  'you have bought my respect',
  'prefer licky treat',
  '*inhales food*',
];

let baharNip = [
  'like c a t n i p',
  'gonna roll on the floor',
  'rolling rolling rolling',
  'enjoying this nip',
  'i overindulge',
  'lick and eat the catnip',
  'its drugs for cats',
  'cat drugs',
  'dont smoke my catnip',
  'smells nice',
  'your floor is covered in catnip now',
  '*purring*',
];

let baharWaits = [
  'what',
  'feed me',
  'my love is for sale',
  'kinda hongry',
  'can u give me treats',
  'waiting on u',
  'human',
  'i am baby',
  'i am the baby cat',
  'ill settle for crunchies',
  'i dislike capitalism',
  'judging',
];


function preload() {
  //load the font
  //wFont = loadFont('assets/chiby.ttf');
  //load the song
  sound = loadSound('assets/bahar-loop.mp3');
  //load pictures
  nb = loadImage('assets/nbs.png');
  mb = loadImage('assets/mbs.png');
  hb = loadImage('assets/hbs.png');
  lb = loadImage('assets/lbs.png');
  blt = loadImage('assets/blt.png');
  bdf = loadImage('assets/bdf.png');
  bw = loadImage('assets/bw.png');
  bis = loadImage('assets/baharmarket.png');
}

function drawBackground () {
  background(140, 176, 110);
}

function setup() { //comes first and happens once
  let cnv = createCanvas(800, 800); //make iiit
  background(140,176,110); //pretty colors
  button = createButton('click for bahar sounds');
  button.position (650, 720);
  button.mousePressed(toggleSound);
  sound.amp(0.2);
  button = createButton(`click to clear bahar's comments`);
  button.position (300, 640);
  button.mousePressed(drawBackground);
  sound.amp(0.2);  
}

//bahartext is an object for the texts !!
  let baharText = {
  x: 1,
  y: 1,
  type: 0,
  shade: 255,
  totalSayings: 10,
  size: 20
  }
  
function draw(){//draw is always looping
  print(mouseX,mouseY);
  frameRate (1);
  
  
  baharText.x = random(0, 800);
  baharText.y = random(300, 550);
  let previousType = baharText.type

  //response is based on mouse location
  //location determines which array will be used

  if (mouseX > 350 && mouseY > 200) {
  baharFace = hb;
  baharText.type = 2;
  babyArray = baharEats;
  }
  else if (mouseX < 250 && mouseY > 500) {
  baharFace = lb;
  baharText.type = 3;
  babyArray = baharLicks;
  }
  else if (mouseX >500 && mouseY < 300) {
  baharFace = mb;
  baharText.type = 4;
  babyArray = baharDislikes;
  }
  else if (mouseX < 260 && mouseY < 260) {
  baharFace = hb;
  baharText.type = 1;  
  babyArray = baharNip;
  }

  else {
  baharFace = nb;
  baharText.Type = 0;
  babyArray = baharWaits;
  }
  
//the images
    
  push();
  textSize(30);
  text('financialize petting', 500, 100);
  pop();
//choosing which text
  if (baharType === 0) {
    babyText = ``;
  }
  else {
    if (baharType !== previousType) { //somewhere in here make it so that it 
      drawBackground();
      babyText = random(babyArray);
    }
  }
  push();
  image(bw, 100, 100);
  image(bdf, 500, 500);
  image(blt, 100, 500);
  image(bis, 550, 100);
  noStroke();
  fill(120,150,96);
  circle(400, 400, 255);
  image (baharFace, 300, 300);
  pop();

  
  //starting context for number of sayings 
  //condition that the number of sayings drawn should be 10
  //increasing sayingsDrawn by 1
  push();
  textSize(baharText.size);
  fill(baharText.shade);
  text(babyText, baharText.x, baharText.y);
  pop();
  
  
}

function toggleSound() {
  
  if (sound.isPlaying() ){
    sound.stop();
  } else {
    sound.loop();
  }
}




{}
  


//make the initial sketch
//figure out how to use scenes to get the next scene
//next scene will have lots of clickable objects
