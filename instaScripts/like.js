var btn_like = document.getElementsByClassName("coreSpriteHeartOpen _0mzm- dCJp8");
var btn_right_arrow = document.getElementsByClassName("HBoOv coreSpriteRightPaginationArrow");
var span_like=document.getElementsByClassName("glyphsSpriteHeart__outline__24__grey_9 u-__7");

var limit = 200; //Limite de post à liker 

var cpt = 0;
doLike();

function doLike()
{
    btn_like[0].click();
    var nextTime = Math.random() * (30000 - 4000) + 4000;
    console.log("Like ok " + cpt);
    if(cpt<limit){
        btn_right_arrow[0].click();
        cpt ++;
        setTimeout(doLike, nextTime);
    }
    else{
        console.log("Limite atteinte " + cpt);
    }
}