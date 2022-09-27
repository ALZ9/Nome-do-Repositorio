var box;
function setup() {
  box = createSprite(200, 200, 100, 100)
  
  createCanvas(400,400);
}

function draw() 
{
  background(30);
drawSprites()
if (keyIsdow("d")) {
box.position.x = box.position.x +2

}


}




