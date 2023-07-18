

var canvas=new fabric.Canvas('myCanvas')
var block_img_width=30
var block_img_height=30
var player_x=10
var player_y=10
var player_object=''
var block_object=''
function player_update() {
    fabric.Image.fromURL('player.png',function (img) {
        player_object=img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(146)
        player_object.set({top:player_y,left:player_x})
        canvas.add(player_object)
    })
    
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function (img) {
        block_object=img;
        block_object.scaleToWidth(block_img_width)
        block_object.scaleToHeight(block_img_height)
        block_object.set({top:player_y,left:player_x})
        canvas.add(block_object)
    })
    
}
window.addEventListener("keydown", my_keydown) 
 function my_keydown (e) {
    var KeyPress=e.keyCode
    console.log(KeyPress)
    if (e.shiftKey==true && KeyPress=='80') {
        block_img_width=block_img_width+10
        block_img_height=block_img_height+10
        document.getElementById("Current_Width").innerHTML=block_img_width
        document.getElementById("Current_Height").innerHTML=block_img_height
    }
    if (e.shiftKey==true && KeyPress=='77') {
        block_img_width=block_img_width-10
        block_img_height=block_img_height-10
        document.getElementById("Current_Width").innerHTML=block_img_width
        document.getElementById("Current_Height").innerHTML=block_img_height
    }
    if (KeyPress=="38") {
       up()
        
    }
    if (KeyPress=="40") {
       down()
         
     }
     if (KeyPress=="37") {
        left()
         
     }
     if (KeyPress=="39") {
       right()
         
     }
     if (KeyPress=="87") {
        new_image("wall.jpg")
         console.log("w")
     }
     if (KeyPress=="71") {
        new_image("ground.png")
         console.log("g")
     }
     if (KeyPress=="76") {
        new_image("light_green.png")
         console.log("l")
     }
     if (KeyPress=="84") {
        new_image("trunk.jpg")
         console.log("t")
     }
     if (KeyPress=="82") {
        new_image("roof.jpg")
         console.log("r")
     }
     if (KeyPress=="89") {
        new_image("yellow_wall.png")
         console.log("y")
     }
     if (KeyPress=="68") {
        new_image("dark_green.png")
         console.log("d")
     }
     if (KeyPress=="85") {
        new_image("unique.png")
         console.log("u")
     }
     if (KeyPress=="67") {
        new_image("cloud.jpg")
         console.log("c")
     }
 }   
function up () {
if(player_y>=0)
{
    player_y-=block_img_height
    canvas.remove(player_object)
    player_update()
}
}
function down () {
    if(player_y<=600)
    {
        player_y+=block_img_height
        canvas.remove(player_object)
        player_update()
    }
    }
    function left () {
        if(player_x>=0)
        {
            player_x-=block_img_width
            canvas.remove(player_object)
            player_update()
        }
        }
        function right () {
            if(player_x<=890)
            {
                player_x+=block_img_width
                canvas.remove(player_object)
                player_update()
            }
            }