window.onload = function (){

var main = document.querySelector("main")
var portfolio = document.querySelector(".portfolio");
var liElems = document.querySelectorAll(".portfolio li");

//포트폴리오 화면전환
portfolio.addEventListener("click", function(ev){
    ev.preventDefault();
    
    main.style.transform = "translateY(-640px)"

});




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