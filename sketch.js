//at the top set up the things that you need
//remember to declare, initize variableuse strict;

let newFont, sound, amplitude, nb, mb, hb, lb, tc1, tc2, blt, bdf, bw, baharFace, baharType; //tc, etc is text color 1 and 2

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
  'purr purr purr',
];

let baharDislikes = [
  'nft means not for touching',
  'do not financialize bahar',
  'vectoral capitalism much',
  'dislike',
  'hissing',
  'billionaires shouldnt exist',
  'nope nope nope',
  'disappointed in u',
  'i used to live in zucotti park',
  'mad at u',
  'is nothing sacred',
  '*angry yowling*',
  'have u learned nothing',
  'wall street gives me rash',
  'can we move away from wall street',
];

let baharEats = [
  'ahahah, yummo',
  'these circles are acceptable',
  'crunchies',
  'nutritionally complete',
  'makes my coat so shiny',
  'totally fine',
  'nice and full',
  'could go for some more',
  'you have bought my respect',
  'crunch crunch crunch',
  'you bought the diet one didnt u',
  'diet catfood is ok',
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
  'what are you going to do',
  'are you going to feed me',
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
}


function setup() { //comes first and happens once
  let cnv = createCanvas(800, 800); //make iiit
  background(140,176,110); //pretty
  button = createButton('click for bahar sounds');
  button.position (650, 720);
  button.mousePressed(toggleSound);
  sound.amp(0.2); 
}


  let baharText = {
  x: 1,
  y: 1,
  type: 0,
};

  
function draw(){  //draw is always looping
  
  baharText.x = random(0, 800);
  baharText.y = random(300, 550);

  if (mouseX < 350 && mouseY < 350) {
  baharFace = hb;
  baharType = 1;  
  }
  else if (mouseX > 350 && mouseY > 350) {
  baharFace = hb;
  baharType = 2;
  }
  else if (mouseX < 350 && mouseY > 350) {
  baharFace = lb;
  baharType = 3;
  }
  else if (mouseX >250 && mouseY < 250) {
  baharFace = mb;
  baharType = 4;
  }
  else {
  baharFace = nb;
  baharType = 0
    
  };
  

  push();
  image(bw, 100, 100);
  image(bdf, 500, 500);
  image(blt, 100, 500);
  circle(400, 400, 255);
  image (baharFace, 300, 300);
  textSize(30);
  text('financialize petting', 500, 100);
  pop();
  text('test', baharText.x, baharText.y);
  
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
