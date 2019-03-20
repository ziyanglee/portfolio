window.onload = function(){


const bodyElem = document.querySelector("body");
const openBtn = bodyElem.querySelector(".mobile_btn_wrap > .btn_open");


scrollWork();
resizeWork();
mobileMenu();
slider();
counter();

// 스크롤 이벤트
function scrollWork(){
    var scrollCheck;

    headerFix();

    window.addEventListener("scroll", function(){
        clearTimeout(scrollCheck);
        scrollCheck = setTimeout(headerFix, 100);
    });

    // header 고정시키기 
    function headerFix(){
        var currentY = window.scrollY; //현재 스크롤위치 측정
        var fixed = true;

        if(bodyElem.classList.contains("active")){ //모바일메뉴가 열린상태에선 종료
            return
        }
        if(currentY > 10){ //스크롤내렸을 때
            bodyElem.classList.add("fix");
            mobileMenu(fixed); //모바일메뉴 동작
        } 
        if(currentY === 0){
            bodyElem.classList.remove("fix");
        }
    }
}





// 리사이즈 이벤트 
function resizeWork(){
    var sizeCheck;

    window.addEventListener("resize", function(){ 
        clearTimeout(sizeCheck);
        sizeCheck = setTimeout(headerActive, 150);
    });

    function headerActive(){ // 모바일 메뉴 닫힘
        var innerWidth = window.innerWidth;
        
        if(innerWidth > 767 && bodyElem.classList.contains("active")){ //모바일메뉴가 열린상태에서 PC크기로 리사이즈되면 모바일 메뉴 닫힘
            bodyElem.classList.remove("active");            
        } else {
            return
        }
    }       
}


// 모바일 메뉴열림
function mobileMenu(fixed){
    
    openBtn.addEventListener("click", function(ev){
        ev.preventDefault();
        
        if (fixed === true) { //스크롤이 된 상태에서 메뉴를 클릭했을 때

            bodyElem.classList.remove("fix"); 

            if(bodyElem.classList.contains("active")){ //body에 active를 주면 메뉴열림
                bodyElem.classList.remove("active");
            } else {
                bodyElem.classList.add("active");
            }
        }        

        if(bodyElem.classList.contains("active")){ 
            bodyElem.classList.remove("active");
        } else {
            bodyElem.classList.add("active");
        }
    });
}


// visual_slider 배경전환
function slider(){
    var sliderElem = bodyElem.querySelector(".visual_slider");
    var sliderInner = sliderElem.querySelector(".visual_inner");
    var sliderUrl = ["images/bg_slider_1.jpg","images/bg_slider_2.jpg","images/bg_slider_3.jpg","images/bg_slider_4.jpg","images/bg_slider_5.jpg"]; // 변경될 배경 주소

    var value = 0;
   
    setInterval(function(){

            if(value == sliderUrl.length -1 ){
                value = 0;
            } else {
            value = value + 1
            }
            ani(value);
        }, 5000);
            

    // 배경전환과 fade 효과
    function ani(value){

        sliderElem.style.backgroundImage = "url("+ sliderUrl[value] +")";
        sliderInner.style.backgroundImage = "url("+ sliderUrl[value] +")";
        sliderInner.style.opacity = "1";
        sliderInner.style.transform = "translateX(0%)";
        
        setTimeout(function(){
            sliderInner.style.opacity = "0";
            sliderInner.style.transform = "translateX(100%)";
        }, 2000);
    }
}

// summary 숫자올라가는 카운터
function counter(){
    $(window).on('load', function(){
         $('.counter').counterUp({
            delay: 10,
            time: 1500
         });
    });
}


} //window