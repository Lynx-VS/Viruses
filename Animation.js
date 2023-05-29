//Animations block-row
ScrollReveal().reveal('.block', { delay: 200 });
ScrollReveal().reveal('.block-row', { delay: 200 });

//Плавный переход при нажатии стрелки к выбору
$('.arrow').click(() => {
    $('html, body').animate({
        scrollTop: $('.choice-info').offset().top
    }, 500);
});

//Переход на классификации
$('.click-classification').click(() => {
    $('html, body').animate({
        scrollTop: $('.Classification-container').offset().top
    }, 500);
});

//Переход на методы
$('.click-methods').click(() => {
    $('html, body').animate({
        scrollTop: $('.method-section').offset().top
    }, 500);
});