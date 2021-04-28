var canvas = new fabric.Canvas("myCanvas");
var Player_x = 10;
var Player_y = 10;
var blockWidth = 30;
var blockHeight = 30;
var playerObject = "";
var blockObject = "";
function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top : Player_y,
            left : Player_x
        });
        canvas.add(playerObject);
    });
}