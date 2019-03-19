window.onload = function(){


const bodyElem = document.querySelector("body");
const openBtn = bodyElem.querySelector(".mobile_btn_wrap > .btn_open");


scrollWork();
resizeWork();
mobileMenu();
slider();
counter();

// 스크롤 되었을 때
function scrollWork(){
    var scrollCheck;

    headerFix();

    window.addEventListener("scroll", function(){
        clearTimeout(scrollCheck);
        scrollCheck = setTimeout(headerFix, 100);
        // headerFix();
    });

    function headerFix(){
        var currentY = window.scrollY; //현재위치 측정
        var fixed = true;

        if(currentY > 10){ //스크롤내림
            bodyElem.classList.add("fix");
            
            mobileMenu(fixed);
        } 

        if(currentY === 0){
            bodyElem.classList.remove("fix");
        }
        
    }


}





// 리사이즈 되었을때 
function resizeWork(){
    var sizeCheck;

    window.addEventListener("resize", function(){ 
        clearTimeout(sizeCheck);
        sizeCheck = setTimeout(headerActive, 150);
    });

    function headerActive(){ // 모바일 메뉴 닫힘
        var innerWidth = window.innerWidth;
        
        if(innerWidth > 767 && bodyElem.classList.contains("active")){ 
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
            console.log(fixed);
            
            bodyElem.classList.remove("fix"); 

            if(bodyElem.classList.contains("active")){ //body에 active를 주면 메뉴열림
                bodyElem.classList.remove("active");
            } else {
                bodyElem.classList.add("active");
            }
        }        

        if(bodyElem.classList.contains("active")){ //body에 active를 주면 메뉴열림
            bodyElem.classList.remove("active");
        } else {
            bodyElem.classList.add("active");
        }
    });
}


function slider(){
    var sliderElem = bodyElem.querySelector(".visual_slider");
    var sliderInner = sliderElem.querySelector(".visual_inner");
    var sliderUrl = ["images/bg_slider_1.jpg","images/bg_slider_2.jpg","images/bg_slider_3.jpg","images/bg_slider_4.jpg","images/bg_slider_5.jpg"]

    var value = 0;
   
    setInterval(function(){

            if(value == sliderUrl.length -1 ){
                value = 0;
            } else {
            value = value + 1

            }

            ani(value);
            

        }, 5000);
            


    function ani(value){

        sliderElem.style.backgroundImage = "url("+ sliderUrl[value] +")";
        
        sliderInner.style.backgroundImage = "url("+ sliderUrl[value] +")";
        sliderInner.style.opacity = "1";
        sliderInner.style.transform = "translateX(0%)";
        
        setTimeout(function(){
            sliderInner.style.opacity = "0";
            sliderInner.style.transform = "translateX(100%)";
        }, 2000)
    
    }

}

function counter(){
    $(window).on('load', function(){
         $('.counter').counterUp({
            delay: 10,
            time: 1500
         });

    });
   
}





} //window