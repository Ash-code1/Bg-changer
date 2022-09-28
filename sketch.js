
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("brown");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("lightblue");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightgreen");
  }

  if(keyIsDown(RIGHT_ARROW))
  {

    background("lime");
  }

  if(keyDown("d")){
    background("purple");
  }


  
  drawSprites();
}

