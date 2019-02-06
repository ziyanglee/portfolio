window.onload = function(){

    csActive();

    navOpen();

    searchOpen();

    gnbOpen();

    servImgChange();

    scrollEvent();

    // brandTapOn();

    // brandHover();

    familyOn();



    
    function attachOn(i){
        if(i.classList.contains("on")){
            i.classList.remove("on")
        } else {
            i.classList.add("on")
        };
    };

    function attachActive(i){
        if(i.classList.contains("active")){
            i.classList.remove("active")
        } else {
            i.classList.add("active")
        };
    }




    // function Device(i){

    // };


    // Device.prototype.active = function(i){
    //     if(i.classList.contains("active")){
    //         i.classList.remove("active")
    //     } else {
    //         i.classList.add("active")
    //     }
    // };

    // Device.prototype.attachOn = function(i){
    //     if(i.classList.contains("on")){
    //         i.classList.remove("on")
    //     } else {
    //         i.classList.add("on")
    //     }
    // }

    // var Activator = new Device();











    //CS 고객센터 메뉴 열리기 
    function csActive(){
        var csLi = document.querySelector(".cs_center");

        csLi.addEventListener("click",work)

        function work(ev){
            ev.preventDefault();
            var targetElem = ev.target.parentNode;
            attachActive(targetElem);
            // if(this.classList.contains("active")){
            //     this.classList.remove("active")
            // } else {
            //     this.classList.add("active")
            // }

        };
    }




    //nav 하단메뉴 열리기 
    function navOpen(){
        var headerWrap = document.querySelector(".header_wrap");
        var navUl = document.querySelector("nav > ul");
        var navLi = document.querySelectorAll("nav > ul > li")
        var currentWidth = window.innerWidth;

        navUl.addEventListener("mouseover",attachOn);

        navUl.addEventListener("mouseleave",detachOn);

        window.addEventListener("resize",work);

        attachOn();
        detachOn();

        if ( currentWidth < 768 ){
            work();
        };

        function work(){
            var width = window.innerWidth;

            if ( width < 768 ){
                navUl.removeEventListener("mouseover",attachOn);
                navUl.removeEventListener("mouseleave",detachOn);

            }

            if ( width > 768) {
                navUl.addEventListener("mouseover",attachOn);
                navUl.addEventListener("mouseleave",detachOn);

            }

        };


        function attachOn(){
            headerWrap.classList.add("on")
        };


        function detachOn(){
            headerWrap.classList.remove("on")
        };



        for( var i = 0; i < navLi.length; i++){

            navLi[i].addEventListener("click",subOpen);

            function subOpen(ev){
                ev.preventDefault();
                var liElem = ev.target.parentNode;
                attachActive(liElem);
                // if( liElem.classList.contains("active")){
                //     liElem.classList.remove("active")
                // } else {
                //     liElem.classList.add("active")
                // };
            };
        };
    }; //navOpen



    // 검색창 열리기 
    function searchOpen(){
        var searchDiv = document.querySelector(".search");

        searchDiv.addEventListener("click",work)

        function work(ev){
            ev.preventDefault();
            var targetElem = ev.target.parentNode;
            attachOn(targetElem);

            // if(this.classList.contains("on")){
            //     this.classList.remove("on")
            // } else {
            //     this.classList.add("on")
            // }
        }
    };

    // 모바일 메뉴 열리기 
    function gnbOpen(){
        var btnGnb = document.querySelector(".btn_gnb_open");
        var gnb = document.querySelector(".gnb");
        var btnGnbClose = document.querySelector(".btn_gnb_close");

        btnGnb.addEventListener("click",attachOn);
        btnGnbClose.addEventListener("click",detachOn);

        function attachOn(ev){
            ev.preventDefault();
            gnb.classList.add("on");
        };

        function detachOn(ev){
            ev.preventDefault();
            gnb.classList.remove("on");
        }


    };


    //메인 serv 이미지 움직이기 
    function servImgChange(){
        var servA = document.querySelectorAll(".serv_info a")
        var servImg = document.querySelectorAll(".serv_info img");
        var imgSrc = [
            "images/serv_card.gif",
            "images/serv_point.gif",
            "images/serv_bonus.gif",
            "images/serv_coupon.gif"
        ];

        for(var i = 0; i < servA.length; i++){
            servA[i].onmouseenter = (function(j){
                return function(ev) {
                    servImg[j].setAttribute("src",imgSrc[j]);
                }
            })(i)

        }
        // for(let i = 0; i < servA.length; i++){
        //     servA[i].onmouseenter = function(){
        //             servImg[i].setAttribute("src",imgSrc[i]);
        //     }

        // }
    }

    //메인 스크롤이벤트 - 움직이는 원, 맨위로 가기 버튼 
    function scrollEvent(){
        var circle = document.querySelectorAll(".circle_wrap i");
        var gotoBtn = document.querySelector(".goto_top");

        document.addEventListener("scroll",work);

        function work(){
            var target = document.querySelector("html");
            var currentSpot = target.scrollTop;

            movingCircle();
            gotoTop();

            function movingCircle(){
                if( currentSpot > 100 ){
                    circle[5].style.top = currentSpot - 150 + "px"
                    circle[6].style.top = currentSpot - 600 + "px"
                };
                if( currentSpot > 1100 ){
                    circle[3].style.top = currentSpot - 150 + "px"
                };
                if( currentSpot > 1866 ){
                    circle[1].style.top = currentSpot - 1020 + "px"
                    circle[4].style.bottom = currentSpot - 1900 + "px"
                }
                if( currentSpot == 0 || currentSpot > 4432 ){
                    return;
                };
            }; //movingCicle



            function gotoTop(){

                var target = document.querySelector("html");
                var currentSpot = target.scrollTop;

                if (currentSpot > 100){
                    gotoBtn.style.opacity = "1";
                    gotoBtn.style.bottom = "50px";
                };
                if (currentSpot > 3178){
                    gotoBtn.style.bottom = "290px";
                };
                if (currentSpot == 0){
                    gotoBtn.style.opacity = "0";
                };
            };//gotoTop
        };
    };


    // 계열사버튼 클래스 on,off 주기

    function familyOn(){

        var famElem = document.querySelector("footer .link .family > a");

        famElem.addEventListener("click",work);

        function work(ev){
            ev.preventDefault();

            var elemA = ev.target.parentNode;
            console.log(elemA.nodeName)
            if(elemA.nodeName == "LI"){
                attachActive(elemA);
            } else {
                return
            };

        };

    }; //familyOn

}; // window
