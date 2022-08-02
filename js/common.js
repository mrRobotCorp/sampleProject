// ----------------- scroll indicator (progress bar) ------------------------
window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("scroll", () => {
        if(document.querySelector('.progressbar') != null)setProgress();
    });
});

function setProgress() {          
    let currY = document.documentElement.scrollTop; //스크롤한 높이
    let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight; //전체 높이
    let percentage = (currY / totalY) * 100; //퍼센트 값
    document.querySelector(".progress").style.width = percentage + "%"; //프로그래스바 너비 변경
}

// ------------------- innertext ----------------------
const thickness = document.querySelectorAll(".thickness");

thickness.forEach(function (txt0) {
    txt0.innerText = "모든 언어에 대해 아름답고 자유로운 글꼴";
})

const otherFont = document.querySelectorAll(".others");

otherFont.forEach(function (txt1) {
    txt1.innerText = "반듯한 고딕으로 써 본 아름다운 한글";
})

document.querySelector("#bon").innerText = "본고딕";
document.querySelector("#nanum").innerText = "나눔바른고딕";
document.querySelector("#neo").innerText = "산돌고딕네오1";

// ------------------ prevent event ------------------------------
const notoSketch = document.querySelector('#notoSketch');
notoSketch.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

const hgPoster = document.querySelector('#hgPoster');
hgPoster.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})


// ------------------ scroll Top ------------------------------
// after scrolling
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