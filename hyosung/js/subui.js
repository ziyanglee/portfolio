window.onload = function(){

prod();
lang();
menuTab();
subTabMenu();
prodTable();

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
    
// 서브메뉴 열림
function subTabMenu(){

    var engTab = document.querySelector(".eng_tab");

    document.addEventListener("scroll",function(){

        var target = document.querySelector("html");
        var targetTop = target.scrollTop;

        if(targetTop > 400){

            engTab.classList.add("active");

        } else {

            engTab.classList.remove("active");

        }
    });
}

// 에너지 해당컨텐츠 열림 
function prodTable() {
    var prodList = document.querySelector(".prodlist");
    var tabBtns = prodList.querySelectorAll(".prodlist > ul > li");
    var targetElems = prodList.querySelectorAll(".prod_table");
    
    for(var i = 0; i < tabBtns.length; i++){
        tabBtns[i].onclick = (function(j){
            return function(ev){
                ev.preventDefault();
                
                for(var i = 0; i < targetElems.length; i++){
                    targetElems[i].classList.remove("on");
                    tabBtns[i].classList.remove("on");
                }
                targetElems[j].classList.add("on");
                tabBtns[j].classList.add("on");
            }
        })(i)
    };
}

} // window


