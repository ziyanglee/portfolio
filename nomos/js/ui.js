window.onload = function(){

var htmlElem = document.querySelector("html");
var headerTab = htmlElem.querySelector("header");
var navTab = htmlElem.querySelector(".nav_tab");

headerMove();
subScribe();


// 스크롤 여부에 따라 header 노출여부
function headerMove(){

  var wheelEvnt;

  document.addEventListener("wheel", function(event){
   
    clearTimeout(wheelEvnt);
    wheelEvnt = setTimeout(scrollWork(event), 150);
  });

  function scrollWork(ev){
    var value = ev.deltaY;        
    var topValue = htmlElem.scrollTop;
    console.log(ev);
    
    
    //스크롤 내렸을 때
    if(value > 0){
      navTab.classList.remove("on");
      headerTab.classList.remove("on");
    
    //스크롤 올렸을 때
    } else {
      navTab.classList.add("on");
      headerTab.classList.add("on");
    }

    if(topValue < 400){
  
      headerTab.classList.remove("on");
    }
  }
}


// email input란에 포커스되면 정보기입란 보이기 
function subScribe(){

  var footerElem = document.querySelector("footer");
  var persnInfo = footerElem.querySelector(".persn_info");
  var inputEmail = footerElem.querySelector(".email");

  inputEmail.addEventListener("click",function(){
    persnInfo.classList.add("active");
  });

}


}
