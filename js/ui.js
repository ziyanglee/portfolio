window.onload = function (){

var liElems = document.querySelectorAll(".portfolio li");

tabMove();

// 포트폴리오위치로 스크롤
function tabMove(){
    $('.btn_portfolio').on("click", function(ev){
        var offset = $('.portfolio').offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
        return false;
    })
}



//새 창 팝업열기
liElems.forEach(function(item){

    item.addEventListener("click", function(ev){
        ev.preventDefault();
        if(ev.target.nodeName !== "A"){
            return
        }
        var address = ev.target.getAttribute("href");

        window.open(address,"width= 1500, height=1000");
    })
});

};// window