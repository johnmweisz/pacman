function random(min, max){
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
var playerX = 5; playerY = 5;
var worldX = 16; worldY = 11;
var world = [];

var blockType = {
    0: 'empty',
    1: 'block',
    2: 'coin',
    3: 'player'
}

function generateWorld(columns, rows){
    for(var i = 0; i < rows; i++){
        world[i] = [];
        for(var j = 0; j < columns; j++){
            world[i][j] = random(0, 2);
        }
    }
}
generateWorld(worldX, worldY);

function drawPlayer(x, y){
    world[y][x] = 3;
    drawWorld();
}
drawPlayer(playerX, playerY);

function drawWorld(){
    var content = '';
    for(var i = 0; i < world.length; i++){
        for(var j = 0; j < world[i].length; j++){
            content += "<div class=\"" + blockType[world[i][j]] +"\"></div>"
        }
    }
    $('.game_box').html(content);
}
drawWorld();

$(document).keydown(function(e){
    world[playerY][playerX] = 0;
    if(e.code == 'ArrowUp' && playerY > 0 && world[playerY - 1][playerX] != 1){
        playerY --;
    }
    if(e.code == 'ArrowDown' && playerY < worldY && world[playerY + 1][playerX] != 1){
        playerY ++;
    }
    if(e.code == 'ArrowLeft' && playerX > 0 && world[playerY][playerX - 1] != 1){
        playerX --;
    }
    if(e.code == 'ArrowRight' && playerX < worldX && world[playerY][playerX + 1] != 1){
        playerX ++;
    }
drawPlayer(playerX, playerY);
});