document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function() {
    $('.flyout-carousel').slick('setPosition');
    $('.carousel__bg').slick('setPosition');
    document.body.classList.toggle('hidden-by-navbar');
    document.body.classList.remove('body-overflow-hidden');
    document.getElementsByClassName('icon-close')[0].classList.toggle('d-none');
    document.getElementsByClassName('icon-bars')[0].classList.toggle('d-none');
    document.getElementById('my-flyout').classList.remove('d-flyout');
    document.getElementsByClassName('header__meta-nav')[0].classList.toggle('d-visibility');
})