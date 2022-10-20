import {bgSVG, fgSVG} from './SVGJump.js';
import {botBoneSVG, topBoneSVG} from './bonesJump.js';
import {sprite1, sprite2} from './spritesJump.js'

var bg = new Image();
bg.src = "data:image/svg+xml," + encodeURIComponent(bgSVG);

var fg = new Image();
fg.src = "data:image/svg+xml," + encodeURIComponent(fgSVG);

var dinoGlide = new Image();
dinoGlide.src = "data:image/svg+xml," + encodeURIComponent(sprite1);

var dinoFlap = new Image();
dinoFlap.src = "data:image/svg+xml," + encodeURIComponent(sprite2);

var topBone = new Image();
topBone.src = "data:image/svg+xml," + encodeURIComponent(topBoneSVG);

var botBone = new Image();
botBone.src = "data:image/svg+xml," + encodeURIComponent(botBoneSVG);

var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var hitboxWidth = 60;
var hitboxHeight = 15;

var spriteOffset_X = -10;
var spriteOffset_Y = -25;

var fgPos_X = 0;

var dinoPos_X = 100;
var dinoPos_Y = 250;
var dinoAngle = 0;
var dinoState = dinoGlide;

var minBoneHeight = -330;
var maxBoneHeight = -160;

var scrollSpeed = -3;
var gravity = 0.4;
var lift = -8;
var velocity = 0;

var start = false;
var gameOver = false;
var score = 0;

var bonePtr = 0;
var boneStart = 400;
var flyGap = 180;
var boneGap = 280;
var bones = [
  { x: boneStart, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
  { x: boneStart + boneGap, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
  {
    x: boneStart + 2 * boneGap,
    y: getRandomHeight(minBoneHeight, maxBoneHeight)
  }
];

function getRandomHeight(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function playerInput() {
  if (!start) {
    start = true;
    velocity = lift;
    dinoAngle = -20;
    document.getElementById("ctrl-ctn").style.opacity = 0;
  } else {
    if (!gameOver) {
      velocity = lift;
      dinoAngle = -20;
    }
  }
}

function checkCollision() {
  // set upper bound
  if (dinoPos_Y <= -hitboxHeight) {
    velocity = 0;
  }

  // dino hit the ground
  if (dinoPos_Y + hitboxHeight >= canvas.height - fg.height) {
    velocity = 0;
    dinoPos_Y = canvas.height - fg.height - hitboxHeight;
    setGameOver();
  }

  // dino hit bone
  if (
    dinoPos_X + hitboxWidth >= bones[bonePtr].x &&
    dinoPos_X < bones[bonePtr].x + topBone.width &&
    (dinoPos_Y <= bones[bonePtr].y + topBone.height ||
      dinoPos_Y + hitboxHeight >= bones[bonePtr].y + topBone.height + flyGap)
  ) {
    setGameOver();
  }
}

function replay() {
  start = false;
  gameOver = false;

  score = 0;
  velocity = 0;

  dinoPos_X = 100;
  dinoPos_Y = 250;
  dinoAngle = 0;
  dinoState = dinoGlide;

  bonePtr = 0;
  bones = [
    { x: boneStart, y: getRandomHeight(minBoneHeight, maxBoneHeight) },
    {
      x: boneStart + boneGap,
      y: getRandomHeight(minBoneHeight, maxBoneHeight)
    },
    {
      x: boneStart + 2 * boneGap,
      y: getRandomHeight(minBoneHeight, maxBoneHeight)
    }
  ];

  document.getElementById("ctrl-ctn").style.opacity = 1;

  document.getElementById("gameover-screen").style.visibility = "hidden";
  document.getElementById("gameover-screen").style.opacity = 0;
}

function setGameOver() {
  gameOver = true;
  document.getElementById("gameover-screen").style.visibility = "visible";
  document.getElementById("gameover-screen").style.opacity = 1;
}

function update() {
  // foreground scroll
  if (!gameOver) {
    fgPos_X += scrollSpeed;

    if (fgPos_X <= -canvas.width) {
      fgPos_X = 0;
    }
  }

  // game started
  if (start) {
    velocity += gravity;
    dinoPos_Y += velocity;

    // if velocity is negative show dino flap sprite else show dino falling
    if (velocity < 0) {
      dinoState = dinoFlap;
    } else {
      dinoState = dinoGlide;
      dinoAngle = Math.min(dinoAngle + 2, 90);
    }

    checkCollision();

    if (!gameOver) {
      for (var i = 0; i < bones.length; i++) {
        // scroll bones across screen
        bones[i].x += scrollSpeed;

        // reassign bone object XY after it leaves screen
        if (bones[i].x <= -topBone.width) {
          if (i == 0) {
            bones[0].x = bones[bones.length - 1].x + boneGap;
          } else {
            bones[i].x = bones[i - 1].x + boneGap;
          }

          bones[i].y = getRandomHeight(minBoneHeight, maxBoneHeight);
        }
      }

      // if dino passed through the bone increase score
      if (dinoPos_X >= bones[bonePtr].x + topBone.width) {
        score++;

        if (bonePtr == 2) {
          bonePtr = 0;
        } else {
          bonePtr++;
        }
      }
    }
  }
  render();
}

function render() {
  document.getElementById("scoreboard").innerHTML = score;

  ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < bones.length; i++) {
    ctx.drawImage(topBone, bones[i].x, bones[i].y);
    ctx.drawImage(botBone, bones[i].x, bones[i].y + topBone.height + flyGap);
  }  

  ctx.save();
  ctx.translate(
    dinoPos_X + hitboxWidth / 2 + spriteOffset_X,
    dinoPos_Y + hitboxHeight / 2
  );
  ctx.rotate(dinoAngle * Math.PI / 180);
  ctx.drawImage(
    dinoState,
    -hitboxWidth / 2,
    -hitboxHeight / 2 + spriteOffset_Y
  );
  ctx.restore();

  // Show hitbox
  // ctx.fillStyle = "#ff00ff";
  // ctx.fillRect(dinoPos_X, dinoPos_Y, hitboxWidth, hitboxHeight);

  ctx.drawImage(fg, fgPos_X, canvas.height - fg.height);
  ctx.drawImage(fg, fgPos_X + fg.width, canvas.height - fg.height);

  window.requestAnimationFrame(update);
}

document.addEventListener("keydown", function(e) {
  var char = e.which || e.keyCode;
  if (char == 32 || char == 38) {
    e.preventDefault();
    playerInput();
  }
});

document.addEventListener("touchstart", function() {
  playerInput();
});

document.getElementById("replay").addEventListener("click", function() {
  replay();
});

update();