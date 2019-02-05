const svgArrow = document.querySelectorAll('.order__list .arrow');

$(document).ready(function () {
    $(".examples-results__wrap").owlCarousel(
        {
            loop: true,
            autoWidth: true,
            margin: 24,
            stagePadding: 7,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1300: {
                    items: 3
                }
            }
        }
    );
    $(".steps-wrap").owlCarousel(
        {
            loop: true,
            autoWidth: true,
            margin: 24,
            stagePadding: 7,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            },
            onInitialized: svgAdd
        }
    );


    function svgAdd() {
        const owlStep = document.querySelector('.steps-wrap');
        for (let i = 0; i < svgArrow.length; i++) {
            let svgElem = svgArrow[i].cloneNode(true);
            owlStep.appendChild(svgElem);
        }
    }


    $(".reviews-content__wrap").owlCarousel(
        {
            loop: true,
            autoWidth: true,
            margin: 24,
            stagePadding: 7,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        }
    );

    $(".doctor-text__wrap").niceScroll({
        cursorcolor:"#343a88",
        cursorwidth: '4px',
        cursorborder: '0',
        cursorborderradius: "2px",
        mousescrollstep: 5
    });

    

/* Resized paragraph [ */

    var resizedParagraph;

    //запишим в атрибут 'data-total_height оригинальную высоту каждого елемента
    function setHeight() {
        resizedParagraph = $('.review-text');
        for (var i = 0; i < resizedParagraph.length; i++) {
            var current = $(resizedParagraph[i]);
            current.css('height', '210px');
        }
    };
    setHeight();


    function changeHeigth(button) {

        var block = $(button).parent().siblings('.review-text');
        var height = block[0].scrollHeight + 'px';
        // var beforeBlock = $(button).parent('.right-button');
        // console.dir(beforeBlock);

        if (!block.hasClass('auto_h')) {
            block.css('height', height);
        } else {
            block.css('height', '210px');
        }
        $(button).toggleClass('button180');
        block.toggleClass('auto_h');
        block.toggleClass('before-block');
    }

    $('.right-button').on('click', function () {
        changeHeigth(this);
    })

});


/* Init slider on adaptive */

// let slider1 = $('.text-rev__wrap');
//
// function initSlider(slider, options) {
//     slider.on('init', function () {
//         setTimeout(function () {
//             slider.addClass('is-ready');
//         }, 100);
//     });
//     slider.not('.slick-initialized').slick(options);
// }
//
// function destroySlider(slider) {
//     if (slider.hasClass('slick-initialized')) {
//         slider.slick('unslick');
//     }
// }
//
// function showSlider() {
//     var tablet = ($(window).width()) < 1000;
//     if (tablet) {
//         initSlider(slider1, {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             dots: true,
//             arrows: false,
//             infinite: true,
//             focusOnSelect: true,
//             variableWidth: true,
//             centerMode: true,
//             responsive: [
//                 {
//                     breakpoint: 767,
//                     settings: {
//                         slidesToShow: 1,
//                         variableWidth: true,
//                         centerMode: true
//                     }
//                 }
//             ]
//         });
//     } else {
//         destroySlider(slider1);
//     }
// };
// showSlider();
// $(window).on('resize', showSlider);

/* Change text on Adaptive */

