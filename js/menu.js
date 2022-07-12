window.onload = function() {
    // ------------------- hamburger menu -----------------------------
    var trigerMenu = document.getElementById("menu");
    var gnbMenu = document.getElementById("gnb");

    trigerMenu.onclick = function(){
        gnbMenu.style.transition = "all .5s"
        this.classList.toggle("active");
        gnbMenu.classList.toggle("active");
    };
}