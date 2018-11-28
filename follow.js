var btn_follow = document.getElementsByClassName("oW_lN _0mzm- sqdOP yWX7d        ");
var btn_right_arrow = document.getElementsByClassName("HBoOv coreSpriteRightPaginationArrow");

var limit = 150; //Limite de comptes à suivre

var followCount = 0;
doFollow();

function doFollow()
{
    if(btn_follow[0].innerHTML == "S’abonner" ){
        btn_follow[0].click();
        var nextTime = Math.random() * (30000 - 4000) + 4000;
        console.log("Follow ok " + followCount);
        followCount ++;
    }
    else{
        var nextTime = 0
        console.log ("No follow");
    }
    if(followCount<limit){
        btn_right_arrow[0].click();
        setTimeout(doFollow, nextTime);
    }
    else{
        console.log("Limite atteinte " + followCount);
    }
}