var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerScore=0;
var compScore=0;
var gameState="serve";
var gameState="play";

var playerPaddle = createSprite(200, 40, 70,10);
playerPaddle.shapeColor="Blue";

var computerPaddle = createSprite(200, 360, 70,10);
computerPaddle.shapeColor="purple";

var ball = createSprite(200, 200,10,10);

var goal1=createSprite(200,390,180,30);
goal1.shapeColor="lightblue";

var goal2=createSprite(200,10,180,30);
goal2.shapeColor="lightblue";




ball.shapeColor="lightblue";

function draw() {
  background("black");
 textSize(18);
  fill("white");
  text("Pontos="+playerScore, 25,390);
  text("Pontos="+compScore, 25,25);

if (ball.isTouching(goal1))
{compScore=compScore+1}
if (ball.isTouching(goal2))  
{playerScore=playerScore+1}

if(keyDown("ENTER"))
{ball.velocityX=-4;
ball.velocityY=5} 


if(ball.isTouching(goal1))
{ball.y=200;
ball.x=200;}

if(ball.isTouching(goal2))
{ball.y=200;
ball.x=200;}





if (gameState=="serve")
{text("aperte ENTER para começar",120,180)}



if(gameState=="play")
{if (keyDown("left")) 
{playerPaddle.x=playerPaddle.x-5}

if (keyDown("right")) 
{playerPaddle.x=playerPaddle.x+5}  
computerPaddle.x=ball.x-4 ;  

if(playerScore==5) 
{(gameState="end");
}
if(keyDown(ENTER))
{gameState=="play"}}


if  (gameState=="end"){
ball.velocityX=0;
ball.velocityY=0;
if(playerScore==5)
{text("Fim de jogo!",150,180)}
if(compScore==5)
{text("Fim de jogo!",150,180)}
}






drawSprites();
createEdgeSprites();
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(computerPaddle);
ball.bounceOff(playerPaddle);  
ball.bounceOff(edges);  
ball.collide(goal1);
ball.collide(goal2);

  
  
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
