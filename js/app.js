const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');





hamburger.addEventListener('click', () => {

    nav.classList.toggle('interactive-nav')


});


window.addEventListener('scroll', () => {


    const card = document.querySelectorAll('#card');

    const scrollTop = document.documentElement.scrollTop;


    console.log(scrollTop)




    if (scrollTop > 303) {


        card.forEach(element => {

            element.classList.add('card-animation')

        });

    }


})