window.onload = function (){
    


    gnbOpen();
    
    gnbUtillOn();
    
    snbOpen();
    
    sectionScroll();
    // sequenceNav();
    
        
    function attachOn(target){
        if(target.classList.contains("on")){
            target.classList.remove("on")
        } else {
            target.classList.add("on")
        };
    };
    
    
    function attachActive(target){
        if(target.classList.contains("active")){
            target.classList.remove("active")
        } else {
            target.classList.add("active")
        };
    }
    
    
    
    
    // 파트너사 GNB영역 열고 닫힘 
    function gnbOpen(){
        var gnbContainer = document.querySelector(".gnb_container")
        var btnOpen = document.querySelector(".gnb_open_btn")
        var btnClose = gnbContainer.querySelector(".btn_close")
    
        btnOpen.addEventListener("click", function(ev){
            ev.preventDefault();
            gnbContainer.classList.add("on")
        })
    
    
        btnClose.addEventListener("click",function(ev){
            ev.preventDefault();
            gnbContainer.classList.remove("on")
        })
    
    };
    
    
    
    //GNB 패밀리사이트와 언어선택 영역 열고 닫힘
    function gnbUtillOn(){
        var gnbUtill = document.querySelector(".utill");
    
        gnbUtill.addEventListener("click", function(ev){
            ev.preventDefault();
    
            attachOn(gnbUtill)
    
            // if(gnbUtill.classList.contains("on")){
            //  gnbUtill.classList.remove("on")
            // } else {
            //  gnbUtill.classList.add("on")
            // }
    
        });
    };
        
    
    
    // SNB 63빌딩 사업장영역 열고 닫힘
    function snbOpen(){
        var snbContainer = document.querySelector(".snb_container")
        var snbOpen = document.querySelector(".snb_open_btn")
        var btnClose = snbContainer.querySelector(".btn_close")
    
        snbOpen.addEventListener("click", function(ev){
            ev.preventDefault();
    
            snbContainer.classList.add("on")
        })
    
        btnClose.addEventListener("click", function(ev){
            ev.preventDefault();
    
            snbContainer.classList.remove("on")
    
        })
    };
    
    
    
    // 63빌딩 메인 전체화면 전환 
    function sectionScroll(){
    
        var main = document.querySelector("main")
        var section = main.querySelectorAll("section");
        var teaserBox = document.querySelectorAll(".teaser_container");
        var sequenceBtn = main.querySelectorAll(".sequence > a");

    
        // 주요 이벤트 
        for(let i = 0; i < section.length; i++){
            section[i].addEventListener("mousewheel", function(ev){

                var target = this;
                var nextSect = this.nextElementSibling;
                var prevSect = this.previousElementSibling;     
                var scrollValue = ev.deltaY;

            
    
                teaserBox.forEach(function(item){//teaser_container 안보이기
                    item.classList.add("off")
                });
    
        
                if( scrollValue > 0 ){
                    wheelDown();
                } else {
                    wheelUp();
                }
    
    
                if(main.style.marginTop == "-100px" && scrollValue < 0){ //footer 안보이기 
    
                    target.querySelector(".teaser_container").classList.remove("off")
        
                    setTimeout(function(){
                        main.style.marginTop = "0"
                    },500);   
                }
        
    
            
                function wheelDown(){
                    if( scrollValue > 0 ){//내림
                        if( nextSect.nodeName !== "SECTION" ){ //footer 보이기
                            main.style.marginTop = "-100px"
                            target.querySelector(".teaser_container").classList.remove("off")
                            return
                        }
                        
                        target.style.top = "-100%"
                        nextSect.style.top = "0"

                        sequenceBtn[i].classList.remove("on")
                        sequenceBtn[i+1].classList.add("on")


                        setTimeout(function(){
                            nextSect.querySelector(".teaser_container").classList.remove("off")
                        }, 150)
                    }
                }
        
    
                function wheelUp(){
                    if( scrollValue < 0 ){//올림
                        if( target == section[0] ){// 첫번째 섹션인 경우
                            teaserBox[0].classList.remove("off")
                            return
                        }
                        if(main.style.marginTop == "-100px"){
                            return
                        }
                        prevSect.style.top = "0"
                        target.style.top = "60%"

                        sequenceBtn[i].classList.remove("on")
                        sequenceBtn[i-1].classList.add("on")

                        setTimeout(function(){
                            prevSect.querySelector(".teaser_container").classList.remove("off")
                        }, 150)
                    }
                }

            })//이벤트 리스너
        }// for
      
    //슬라이드 버튼

    for(let i = 0; i < sequenceBtn.length; i++){
        sequenceBtn[i].addEventListener("click",function(ev){
            ev.preventDefault();

            sequenceBtn.forEach(function(item){
                item.classList.remove("on")
            })

            section.forEach(function(item){
                  
                if(i > 1){
                    item.style.top = "-100%"
                }else {
                    item.style.top = "60%"
                    item.style.zIndex = "1"

                }

            })
            section[i].style.top = "0"
            section[i].style.zIndex = "5"
            
            teaserBox[i].classList.remove("off")
            ev.target.classList.add("on")




        })
    }
    
    
    
        
    };//sectionScroll
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }// window 