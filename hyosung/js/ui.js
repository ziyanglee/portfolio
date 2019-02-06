window.onload = function(){

    prod();

    lang();

    menuTab();

  

    function prod (){

        var ProdA = document.querySelector(".prod > a");
        var ProdOn = document.querySelector(".prod");
        ProdA.addEventListener("click",attachOn);

        function attachOn(ev){
        ev.preventDefault();
        if (ProdOn.classList.contains("on")){
            ProdOn.classList.remove("on");
            } else {ProdOn.classList.add("on");
            };
        };
    }; //prod



    function lang(){

        var langDiv = document.querySelector(".lang");
        var langUl = document.querySelector(".lang > ul");

        langDiv.addEventListener("click",function(ev){ev.preventDefault()});

        langDiv.addEventListener("mouseenter",attachOn);

        langDiv.addEventListener("mouseleave",detachOn);
        
        function attachOn(ev){

            if(langDiv){

                langDiv.classList.add("on");

            };

            setTimeout(function(){

                langUl.classList.add("on")},400);

        };

    

        function detachOn(ev){

            langUl.classList.remove("on");

            setTimeout(function(){

                langDiv.classList.remove("on")},200);

        };

        

    }; // lang

    

    

    function menuTab (){

        var tabDiv = document.querySelector(".menu_tab");

        var tabUl = document.querySelector(".menu_tab > ul")

        var header = document.querySelector(".header")

        var tab;

        tabDiv.addEventListener("click",function(ev){ev.preventDefault()});

        tabDiv.addEventListener("mouseenter",attachOn);

        tabDiv.addEventListener("mouseleave",detachOn);

        

        function attachOn(ev){

            if(tabDiv){

                tabUl.classList.add("on");

                header.classList.add("on");

            };

        };

    

        function detachOn(ev){

            tabUl.classList.remove("on");

            header.classList.remove("on");

        };

    

    }; //menuTab


}; // window