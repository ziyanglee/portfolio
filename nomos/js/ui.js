window.onload = function(){

var htmlElem = document.querySelector("html");
var headerTab = document.querySelector("header");
var navTab = document.querySelector(".nav_tab");
var prevScroll = document.documentElement.scrollTop;

document.addEventListener("scroll", headerOn)
document.addEventListener("touchmove",touch);

function touch(ev){
  ev.preventDefault();
  var y = ev.clientY
  if(y > 100){
    navTab.style.backgroundColor = "red"
  };



}

function headerOn(ev){
  
  var currentScroll = document.documentElement.scrollTop;
  var htmlScroll = htmlElem.scrollTop;
  if(prevScroll > currentScroll){
    navTab.classList.remove("on")
    headerTab.classList.remove("on")
    // headerTab.classList.add("on");
  } else if (prevScroll < currentScroll){
    navTab.classList.add("on");
    // headerTab.classList.remove("on");
    headerTab.classList.add("on");
  }

  if(htmlScroll == 0) {
    headerTab.classList.remove("on");     
  }

  prevScroll = currentScroll;
  
}; //scrollEvnt



var persnInfo = document.querySelector(".persn_info");
var signupInfo = document.querySelector("#signupinfo");
var inputEmail = document.querySelector(".email");
var submitBtn = document.querySelector("#submit_btn")
console.log(submitBtn)
submitBtn.addEventListener("click",infoChange);

function infoChange(ev){
  if(submitBtn.submit()){
  signupInfo.innerHTML = "Sign up for our newsletter to receive special offers, news and great events."
  console.log("2")


  }

  // signupInfo.innerHTML = "Sign up for our newsletter to receive special offers, news and great events."

}







inputEmail.addEventListener("click",infoOpen);

function infoOpen(ev){
  persnInfo.classList.add("active");
}








} //window
