// create an html tag with JS
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const bgImage = new Image();
bgImage.src = "background.png"
const theHero = new Image();
theHero.src = "hero.png";
const theHeroLocation = {
    x: 100,
    y: 100,    
}
const theBadGuy = new Image();
theBadGuy.src = "monster.png";
const theBadGuyLocation = {
    x: 200,
    y: 200,    
}


addEventListener('keydown',function(e){
    console.log(e);
    if(e.key === "ArrowUp"){
        // console.log("use pused the up arrow!!");
        theHeroLocation.y = theHeroLocation.y - 10;
    }else if(e.key === "ArrowDown"){
        // console.log("use pused the up arrow!!");
        theHeroLocation.y = theHeroLocation.y + 10;
    }else if(e.key === "ArrowLeft"){
        // console.log("use pused the up arrow!!");
        theHeroLocation.x = theHeroLocation.x - 10;
    }else if(e.key === "ArrowRight"){
        // console.log("use pused the up arrow!!");
        theHeroLocation.x = theHeroLocation.x + 10;
    }
})

function draw(){
    context.drawImage(bgImage,0,0); 
    context.drawImage(theHero,theHeroLocation.x,theHeroLocation.y); 
    context.drawImage(theBadGuy,theBadGuyLocation.x,theBadGuyLocation.y); 
    requestAnimationFrame(draw);
}

draw();