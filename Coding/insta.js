var btn_follow = document.getElementsByClassName("oW_lN _0mzm- sqdOP yWX7d        ");
var btn_right_arrow = document.getElementsByClassName("HBoOv coreSpriteRightPaginationArrow");
var limit = 3;

var followCount = 0
var cpt = 0;
doFollow();

function doFollow()
{
    if(btn_follow[0].innerHTML == "S’abonner" ){
        btn_follow[0].click();
        var nextTime = Math.random() * (30000 - 4000) + 4000;
        console.log("Follow ok " + cpt);
        followCount ++;
    }
    else{
        var nextTime = 0
        console.log ("No follow " + cpt);
    }
    if(cpt<limit){
        btn_right_arrow[0].click();
        cpt ++;
        setTimeout(doFollow, nextTime);
    }
    else{
        console.log("Limite atteinte " + followCount);
    }
}

function doLike(){

}

function doLikeAndFollow(){

}
