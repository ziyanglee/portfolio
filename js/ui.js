window.onload = function (){


var liElems = document.querySelectorAll(".portfolio li");


liElems.forEach(function(item){

    item.addEventListener("click", function(ev){
        ev.preventDefault();
        var target = ev.target
        var address = target.getAttribute("ahref");

        console.log(target);
        
        

        // window.open("http://www.naver.com","naver","width= 1000, height=500");



    })
})














}