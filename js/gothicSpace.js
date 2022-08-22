document.addEventListener('DOMContentLoaded', () => {
    const s0 = document.querySelectorAll('.s0_space'); 
    const s1 = document.querySelectorAll('.s1_row');
    const s2 = document.querySelectorAll('.s2_line');

    s0.forEach(function (e) {
        e.innerText = '적정한 글자 사이를 유지해야 가독성이 높아진다.  글자 사이를 넓히거나 좁히기도 한다. 시각적으로 글자 사이를 고르게 만들기 위해 특정한 글자의 조합에서 글자 글자 사이를 조정하는 것을 커닝이라고 부른다.';
    })

    s1.forEach(function (e) {
        e.innerText = '우리는 비뚤어지거나 기울거나 굽지 않고 바르게 나아간다';
    })

    s2.forEach(function (e) {
        e.innerText = '일반적으로 그래픽 디자이너와 다른 분야 디자이너가 편집 디자인을 할 때 눈에 띄는 가장 큰 차이는 서체 운용에 있다. 똑같은 서체를 써도 밀도와 안정감이 다르다.';
    })

})