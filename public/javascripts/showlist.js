var imgMonsterARun = new Image();
var numberOfImagesLoaded = 0;


function init() {
    console.log("hello now");
    var stage = new createjs.Stage("demoCanvas");


    createjs.Ticker.setFPS(60);//frame per second of the animation
    createjs.Ticker.addEventListener("tick", stage);//start the animation


    imgMonsterARun.onload = handleImageLoad;
    imgMonsterARun.onerror = handleImageError;
    imgMonsterARun.src = "images/MonsterARun.png";


    // create spritesheet and assign the associated data.
    var spriteSheet = new createjs.SpriteSheet({
        // image to use
        images: [imgMonsterARun],
        // width, height & registration point of each sprite
        frames: {width: 64, height: 64, regX: 32, regY: 32},
        animations: {
            walk: [0, 9, "walk"]
        }
    });


// create a BitmapAnimation instance to display and play back the sprite sheet:
    bmpAnimation = new createjs.BitmapAnimation(spriteSheet);

// start playing the first sequence:
    bmpAnimation.gotoAndPlay("walk");     //animate

// set up a shadow. Note that shadows are ridiculously expensive. You could display hundreds
// of animated rats if you disabled the shadow.
    bmpAnimation.shadow = new createjs.BitmapAnimation("#454", 0, 5, 4);

    bmpAnimation.name = "monster1";
    bmpAnimation.direction = 90;
    bmpAnimation.vX = 4;
    bmpAnimation.x = 16;
    bmpAnimation.y = 32;

// have each monster start at a specific frame
    bmpAnimation.currentFrame = 0;
    stage.addChild(bmpAnimation);

}

function handleImageError(e) {
    console.log(e);
}

function handleImageLoad(e) {
    numberOfImagesLoaded++;

    // We're not starting the game until all images are loaded
    // Otherwise, you may start to draw without the resource and raise
    // this DOM Exception: INVALID_STATE_ERR (11) on the drawImage method
    if (numberOfImagesLoaded == 2) {
        numberOfImagesLoaded = 0;
        //startGame();
    }
}