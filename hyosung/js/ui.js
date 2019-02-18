window.onload = function(){

prod();
lang(); 
menuTab();


// 클래스 on추가
function attachOn(target){
    if(target.classList.contains("on")){
        target.classList.remove("on")
    } else {
        target.classList.add("on")
    }
}

// product 전체메뉴 열림
function prod (){
    var prodElem = document.querySelector(".prod");
    var prodBtn = prodElem.querySelector(".prod > a");

    prodBtn.addEventListener("click", function(ev){
        ev.preventDefault();
        attachOn(prodElem);

    });
}

// language 메뉴열림 
function lang(){

    var langDiv = document.querySelector(".lang");
    var langUl = langDiv.querySelector(".lang > ul");

    langDiv.addEventListener("click",function(ev){ev.preventDefault()});

    langDiv.addEventListener("mouseenter",function(){
        if(langDiv){
            langDiv.classList.add("on")
        }

        setTimeout(function(){
            langUl.classList.add("on")
        },400);

    });

    langDiv.addEventListener("mouseleave",function(){
        langUl.classList.remove("on");

        setTimeout(function(){

            langDiv.classList.remove("on")
        },200);
    });
} 

    

    
// 메인메뉴 열림 
function menuTab (){
    var header = document.querySelector(".header");
    var tabDiv = document.querySelector(".menu_tab");
    var tabUl = tabDiv.querySelector(".menu_tab > ul");

    tabDiv.addEventListener("click",function(ev){ev.preventDefault()});

    tabDiv.addEventListener("mouseenter",function(){
       
        if(tabDiv){
            tabUl.classList.add("on");
            header.classList.add("on");
        }
    });

    tabDiv.addEventListener("mouseleave",function(){
        
        tabUl.classList.remove("on");
        header.classList.remove("on");
    });
}

} // window