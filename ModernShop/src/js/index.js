function boxHover(boxname,presen,over,out){
    $(boxname).hover(function(){
        var _this = $(this);

        timeId = setTimeout(function(){
            curboxcss = _this.attr("class");
            
            _this.css('transform',over);
            $(presen).css('display','block');
    
        },600);
    }).mouseout(function(){
        console.log(curboxcss);
        $(boxname).css('transform',out);
        $(presen).css('display','none');
        clearTimeout(timeId);
    });
}
boxHover('#right','.boxpresen1',"rotateY(90deg) translateZ(140px)","rotateY(90deg) translateZ(125px)");
boxHover('#bottom','.boxpresen3',"rotateX(-90deg) translateZ(140PX) rotateZ(180deg)","rotateX(-90deg) translateZ(125PX) rotateZ(180deg)");
boxHover('#front','.boxpresen2',"translateZ(140px)","translateZ(125px)");