window.onload = function (){


var liElems = document.querySelectorAll(".portfolio li");

//새 창 팝업열기
liElems.forEach(function(item){

    item.addEventListener("click", function(ev){
        ev.preventDefault();
        var address = ev.target.getAttribute("href");
        console.log(address);
        
        window.open(address,"width= 1500, height=1000");



    })
})














}