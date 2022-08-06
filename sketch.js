var play,about,how,next,home
 var gameState="waitstate"
 var dropsGroup,drops,player,playerimg

function preload(){
bgwait=loadImage("images/SplashOut.gif")
dropimg=loadImage("images/waterdrop.png")
bg1=loadImage("images/level1bg.png")
popupimghow=loadImage("images/popup.png")
popupimgabout=loadImage("images/popup.png")
playerimg=loadImage("images/character.png")


}


function setup(){
createCanvas(windowWidth-20,windowHeight-20)

play= createImg("images/play2.png")
play.position(23,height-180)
play.size(150,150)

about= createImg("images/info.png")
about.position(30,height/3.7)
about.size(150,130)

how= createImg("images/how.png")
how.position(28,height/2)
how.size(140,130)

next= createImg("images/next.png")
next.position(200,100)
next.size(170,150)

home=createImg("images/home2.png")
home.position(10,10)
home.size(100,100)
home.hide()

infopop=createSprite(width/2,height/2)
infopop.visible=false
infopop.addImage(popupimgabout)
infopop.scale=1.65

invisibleground=createSprite(width/2,height-15,width,10)
invisibleground.visible =false

player=createSprite(70,height-80,50,50)
player.visible =false
player.addImage(playerimg)
player.scale=.25
player.debug=true
player.setCollider("circle",(player.width)+150,50,10)

dropsGroup= new Group()

}

function draw(){

    if(gameState==="waitstate"){
background(bgwait)
home.hide()
play.show()
about.show()
how.show()
next.hide()
infopop.visible=false
player.visible =false

}

//play button functioning

if(play.mousePressed(()=>{
    gameState="playLevel1"

}))
    


if(gameState==="playLevel1"){
    background(bg1)
    home.show()
    play.hide()
    about.hide()
    how.hide()
    next.hide()
    Level1()
    player.visible =true



for(i=0;i<dropsGroup.length;i++){
    if(dropsGroup.get(i).isTouching(invisibleground))
{
dropsGroup.get(i).visible=false
}
}

}

if(about.mousePressed(()=>{
    gameState="aboutstate"
infopop.visible=true
how.hide()
next.hide()

}))
    
if(home.mousePressed(()=>{
    gameState="waitstate"


}))
    

if(gameState==="aboutstate"){
   // background(180)
    home.show()
    play.hide()
    about.hide()
    player.visible =false
    
}


drawSprites()

}



// LEVEL 1

function Level1(){

if(frameCount% 60 === 0){
    drops=createSprite(width,20)
    drops.y=Math.round(random(10,40))
    drops.x=Math.round(random(width,20))

    drops.velocityX=-2
    drops.velocityY=Math.round(random(2,6))
    drops.addImage(dropimg)
    drops.scale=.05


dropsGroup.add(drops)

}


}