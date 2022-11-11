
var title = document.querySelector("#intro .title");
var section = document.querySelectorAll("section");
window.addEventListener("load", portfolio_title);
window.addEventListener("wheel", go);

document.querySelector(".menu").addEventListener("click", goSection);
document.querySelector(".gnb").addEventListener("click", goSection);

var offset = 0;
var sectionCounter = 0;
var count = 0;

// portfolio-title
function portfolio_title(){
    $("#intro").addClass("on");
}

function go(e){
    count++;
    var goCount = count%5;
    if(e.wheelDelta < 0){
        if(goCount == 4 && sectionCounter < 6){
            sectionCounter++;
        }
    }else{
        if(goCount == 4 && sectionCounter > 0){
            sectionCounter--;
        }
    }
    
    offset = innerHeight * sectionCounter; //innerWidth, scrollLeft
    $("html, body").stop().animate({scrollTop:offset},600,
        "easeInOutExpo");

    setTimeout(activeMenu,300);
}

function activeMenu(){ /* 휠을 굴렸을때 메뉴이동 */
     // section.forEach(function(ele){ele.classList.remove("on");});
    for(var i=0; i<section.length; i++){
        section[i].classList.remove("on");
    }
    section[sectionCounter].classList.add("on");

    $(".menu a").removeClass("on");
    $(".menu li").eq(sectionCounter).children("a").addClass("on");
    //$(".menu li:eq(0) a").addClass("on");
    $(".gnb a").removeClass("active");
    $(".gnb li").eq(sectionCounter).children("a").addClass("active");
}


function goSection(e){ /* 클릭했을때 메뉴이동 */
    sectionCounter = e.target.getAttribute("datanum");

    $(".menu a").removeClass("on");
    e.target.classList.add("on");
    $(".gnb a").removeClass("active");
    e.target.classList.add("active");
    console.log(111111);
    

    offset = innerHeight * sectionCounter; //innerWidth, scrollLeft
    $("html, body").stop().animate({scrollTop:offset},600,
        "easeInOutExpo");

    setTimeout(activeMenu,300);
}

// 햄버거
$(".burger").click(
    function(){
        $(".burger").toggleClass("on");
        $("nav").toggleClass("on");
    }
);

// 스크롤 막기 시작
$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
event.preventDefault();
event.stopPropagation();
return false;
});
//스크롤 막기 끝

// 다크모드
$(".btn").click(
    function(){
        $(".btn").toggleClass("active");
        $("#profile").toggleClass("active");
        var onoff = $(".btn").hasClass("active");
        console.log(onoff);
        if(onoff){
            $(".btn-text").html("라이트모드");
        }else{
            $(".btn-text").html("다크모드");
        }
    }
);


// 이지파이차트원형
$(".chart").hover(
    function(){
        $('.chart1').easyPieChart({
            barColor: '#947248',
            trackColor: '#ccc',
            // scaleColor: '#fff',
            lineCap: 'butt',
            lineWidth: 53,
            size: 120,
            animate: 1000,
            });
    }
);


// 비엑스슬라이더
// $('#bxslider').bxSlider({
//     auto: true,
//     autoControls: true,
//     stopAutoOnClick: true,
//     pager: true,
//     slideWidth: 1200,
//     touchEnabled:false,
//     responsive:true,
// });이미지 값이 커서 슬라이드가 먼저 실행되어 오류발생

$(window).load(function() {
    $('#bxslider').bxSlider({
        auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 1200,
    touchEnabled:false,
    responsive:true,
    });
});