$(document).ready(function(){


headerMove();
tabMove();
windowPop();

    
//스크롤이 일어나면 헤더 높이와 main마진값 변경 
function headerMove(){
    $(window).scroll(function(){

        if($(this).scrollTop() > 0){
            $('.wrap').addClass("active");

        } else {
            $('.wrap').removeClass("active");
        }
    });
}


// 포트폴리오위치로 스크롤
function tabMove(){
    $('.btn_portfolio').on('click', function(){

        var mainSet = $('main').offset();

        $('html, body').animate({scrollTop : mainSet.top}, 400);
        return false;
    });

    $('.btn_cover').on('click',function(){

        var coverSet = $('.cover_letter').offset();

        $('html,body').animate({scrollTop : coverSet.top}, 400);
        return false;
    });
}



// view버튼 클릭하면 새 창 열리기 
function windowPop(){
    $('.open_btn').on('click',function(ev){

        var addr = $(this).attr('href');

        window.open(addr,"width= 1500, height=1000");       
        return false;
        
    });
}

});