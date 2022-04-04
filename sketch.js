
function setup() {
  createCanvas(400,400);
  background(51);
  var box = createSprite(200,200,30,30);
  box.shapeColor = "white"
}

function draw() 
{
  
  // escreva o código para alterar a cor de fundo
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  if (keyIsDown(RIGHT_ARROW))
  {
    background("red")
    box.x= box.x+2
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.x= box.x-2
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("purple");
    box.y= box.y-2
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.y= box.y+2
  }


  
  drawSprites();
}

