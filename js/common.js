// ----------------- scroll indicator(progress bar) ------------------------
window.addEventListener('DOMContentLoaded', function(){
    //스크롤 이벤트 처리
    window.addEventListener("scroll", function(event){
        if(document.querySelector('.progressbar') != null)setProgress();
    });
});

function setProgress() {          
    let currY = document.documentElement.scrollTop;//스크롤한 높이
    let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;//전체 높이
    let percentage = (currY / totalY) * 100;//퍼센트 값
    document.querySelector(".progress").style.width = percentage + "%";//프로그래스바 너비 변경
}

window.onload = function() {
    // ------------------- hamburger menu -----------------------------
    var trigerMenu = document.getElementById("menu");
    var gnbMenu = document.getElementById("gnb");

    trigerMenu.onclick = function(){
        gnbMenu.style.transition = "all .5s"
        this.classList.toggle("active");
        gnbMenu.classList.toggle("active");
    };

    
    // ------------------ scroll Top ------------------------------
    $(document).ready(function(){
    
        var Height = $("#scrollTop").height(); 
        $("#scrollTop").hide();
    
        $(window).scroll(function(){ 
            var rolling = $(this).scrollTop() >= Height; 
            if (rolling) { 
                $("#scrollTop").fadeIn(500).css({"position":"fixed"}); } 
            else {
                $("#scrollTop").fadeOut(300);
            }
        });
    });
    
    document.getElementById("scrollTop").onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}