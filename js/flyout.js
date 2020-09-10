document.getElementById('btn-flyout').addEventListener('click', function() {
    document.getElementById('my-flyout').classList.toggle('d-flyout');
    document.body.classList.toggle('body-overflow-hidden');
    $('.flyout-carousel').slick('setPosition');
    $('.carousel__bg').slick('setPosition');
})
document.getElementById('close-flyout').addEventListener('click', function() {
    document.getElementById('my-flyout').classList.remove('d-flyout');
    document.body.classList.toggle('body-overflow-hidden');
    $('.flyout-carousel').slick('setPosition');
    $('.carousel__bg').slick('setPosition');
})