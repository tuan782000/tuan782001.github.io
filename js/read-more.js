let boxs = document.getElementsByClassName('product__more');
let btn = document.getElementById('product__btn');

btn.addEventListener('click', function() {
    for (i = 0; i < boxs.length; i++) {
        let box = boxs[i];
        box.style.transitionDelay = `${i*0.2}s`;
        if (box.classList.contains('hidden')) {
            box.classList.remove('hidden');
            setTimeout(function() {
                box.classList.remove('visuallyhidden');
            }, 20);
        } else {
            box.classList.add('visuallyhidden');
            box.addEventListener('transitionend', function() {
                box.classList.add('hidden');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }
    }
    btn.style.display = 'none';
}, false);