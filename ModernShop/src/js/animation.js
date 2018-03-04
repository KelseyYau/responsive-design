
var navobj = {
    tabwidth:75,
    tabheight:45,
    row:5,
    col:8,
    content:[6,10,11,13,14,16,20,26,28,29,30,36,37],
    blings:[5,9,12,15,18,19,27,38]
}
var navlist = [
    {"title":"停车服务社团服务","url":"./sernavigation.html"},
    {"title":"一站式","url":"./sernavigation.html"}, 
    {"title":"退货活动24小时","url":"./sernavigation.html"}, 
    {"title":"车场礼宾","url":"./sernavigation.html"},
    {"title":"客服热线","url":"./sernavigation.html"},
    {"title":"VIP会员","url":"./sernavigation.html"},
    {"title":"俱乐部会员中心","url":"./sernavigation.html"},
    {"title":"无障碍","url":"./sernavigation.html"},
    {"title":"设施服务","url":"./sernavigation.html"},
    {"title":"顾客休息区","url":"./sernavigation.html"},
    {"title":"国际代购","url":"./sernavigation.html"},
    {"title":"VIP服务","url":"./sernavigation.html"},
    {"title":"双语接待","url":"./sernavigation.html"},
    {"title":"在线购物","url":"./sernavigation.html"},
    {"title":"在线客服","url":"./sernavigation.html"}
]
function calRowCol(num){
    var row = Math.floor((num-1)/8);
    var col = (num-1)%8;
    return{
        'row':row,
        'col':col
    }
}

for(var i = 0;i < navobj.col;i++){
    for(var j = 0;j < navobj.row;j++){
        var pleft = (navobj.tabwidth + 6) * i  + 6 +'px';
        var ptop =  (navobj.tabheight + 6) * j  + 6 + 'px' ;
        
        $(".nav-box").append('<div class = "box"'+ ' id = box-' + j + '-' + i + '></div>');
        $('#box-' + j +'-' + i).css('left',pleft).css('top',ptop);
    }
}

for(var m = 0;m<navobj.content.length;m++){
    var calrl = calRowCol(navobj.content[m]);
    var r = calrl.row;
    var l = calrl.col;
    $('#box-' + r +'-' + l).append('<a href=" '+navlist[m].url + '" id="boxlist">' + navlist[m].title + '</a>');
}

for(var n = 0;n<navobj.blings.length;n++){
    var calrl = calRowCol(navobj.blings[n]);
    var r = calrl.row;
    var l = calrl.col;
    $('#box-' + r +'-' + l).addClass('anilist');
}

function boxAnimate(arr){
    var random = Math.floor(Math.random() * arr.length);
    var posrl = calRowCol(navobj.blings[random]);
    $('#box-' + posrl.row+'-' + posrl.col).fadeOut(500);
    var random = Math.floor(Math.random() * arr.length);
    var posrl = calRowCol(navobj.blings[random]);
    $('#box-' + posrl.row+'-' + posrl.col).fadeIn(500);
}
var time = setInterval('boxAnimate(navobj.blings)',1000);