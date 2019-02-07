window.onload = function (){
    


gnbOpen();

gnbUtillOn();

snbOpen();

sectionScroll();

resize();

famOpen(); 
    
function attachOn(target){
    if(target.classList.contains("on")){
        target.classList.remove("on")
    } else {
        target.classList.add("on")
    };
};




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
        
        if(gnbUtill.classList.contains("on")){
         gnbUtill.classList.remove("on")
        } else {
         gnbUtill.classList.add("on")
        }

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




sizeCheck();
function resize(){
    window.addEventListener("resize", function(){
        sizeCheck()
    })
}    
    
function sizeCheck(){
    var main = document.querySelector("main")
    var windowHeight = window.innerHeight;
    
    if(windowHeight < 973){
        main.style.height = windowHeight + "px"
    }
    
}    
    
    
    






// 63빌딩 메인 전체화면 전환 
function sectionScroll(){

    var main = document.querySelector("main")
    var section = main.querySelectorAll("section");
    var teaserBox = document.querySelectorAll(".teaser_container");
    var sequenceBtn = main.querySelectorAll(".sequence > a");

    // 주요 이벤트 
    for(let i = 0; i < section.length; i++){
        section[i].addEventListener("mousewheel", function(event){
            ev = event;
            sect = this;
            index = i;
            function scrollWork(){
                wheelAction(ev, sect, index)
            }

            setTimeout(scrollWork, 150)        
                
            
        });


        sequenceBtn[i].addEventListener("click", function(ev){
            ev.preventDefault();
            
            sequenceBtn.forEach(function(item, index){
                
                item.classList.remove("on");


                if(i > 1){
                    section[index].style.top = "-100%"
                } else {
                    if(section[0]){
                        section[0].style.top = "-100%"
                    } 
                section[index].style.top = "60%"
                }
                
            })

            sequenceBtn[i].classList.add("on");
            section[i].style.top = "0";
            teaserBox[i].classList.remove("off");

        });


    }; //for문

    


    function wheelAction(ev, sect, index){
        
        var target = sect;
        var nextSect = sect.nextElementSibling;
        var prevSect = sect.previousElementSibling;     
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

                
                sequenceBtn[index].classList.remove("on")
                sequenceBtn[index+1].classList.add("on")


                setTimeout(function(){
                    nextSect.querySelector(".teaser_container").classList.remove("off")
                }, 100)

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

                
                sequenceBtn[index].classList.remove("on")
                sequenceBtn[index-1].classList.add("on")

                setTimeout(function(){
                    prevSect.querySelector(".teaser_container").classList.remove("off")
                }, 100)
            }
        }
    };
};//sectionScroll
    


// 패밀리 사이트 리스트 열림 
function famOpen(){
    var famElem = document.querySelector(".goto_family");
    var famList = famElem.querySelector("ul")
    famElem.addEventListener("click", function(ev){
        ev.preventDefault();

        if(famList.classList.contains("on")){
            famList.classList.remove("on");
        } else {
            famList.classList.add("on");
        }
    })
};

    
    
    
    
    
    
    
}// window 
