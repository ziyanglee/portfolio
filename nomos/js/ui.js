window.onload = function(){

const htmlElem = document.querySelector("html");
const headerTab = htmlElem.querySelector("header");
const navTab = htmlElem.querySelector(".nav_tab");

headerMove();
subScribe();


//휠 방향여부에 따라 header 노출여부
function headerMove(){

  var wheelEvnt;

  window.addEventListener("wheel", wheelCheck)

  function wheelCheck(ev){

    clearTimeout(wheelEvnt);

    wheelEvnt = setTimeout(scrollWork, 100);


    //휠 방향 파악하기
    function scrollWork(){
      var value = ev.deltaY;        
      var topValue = htmlElem.scrollTop;
      
      
      //휠 내렸을 때
      if(value > 0){
        navTab.classList.remove("on");
        headerTab.classList.remove("on");
      
      //휠 올렸을 때
      } else {
        navTab.classList.add("on");
        headerTab.classList.add("on");
      }

      if(topValue < 400){
    
        headerTab.classList.remove("on");
      }
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

} // end
