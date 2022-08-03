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