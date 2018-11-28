var btn_follow = document.getElementsByClassName("oW_lN _0mzm- sqdOP yWX7d        ");
var btn_like = document.getElementsByClassName("coreSpriteHeartOpen _0mzm- dCJp8");
var btn_right_arrow = document.getElementsByClassName("HBoOv coreSpriteRightPaginationArrow");
var span_like=document.getElementsByClassName("glyphsSpriteHeart__outline__24__grey_9 u-__7");

var limit = 75; //Limite de comptes à suivre

var followCount = 0;
doFollowAndLike();

function doFollowAndLike()
{
    btn_like[0].click();
    var nextTime = Math.random() * (30000 - 4000) + 4000;
    console.log("Like ok " + followCount);
    if(btn_follow[0].innerHTML == "S’abonner" ){
        btn_follow[0].click();
        console.log("Follow ok " + followCount);
        followCount ++;
    }
    else{
        console.log ("No follow");
    }
    if(followCount<limit){
        btn_right_arrow[0].click();
        setTimeout(doFollowAndLike, nextTime);
    }
    else{
        console.log("Limite atteinte " + followCount);
    }
}