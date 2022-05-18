const listBox = document.querySelectorAll('.box');
const wrapperBox = document.querySelector('.review-box');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const reviewDiv = document.querySelector('.review');
document.addEventListener('DOMContentLoaded', function () {
    // responsive
    // const scrollbarWidth =
    //     window.innerWidth - document.documentElement.clientWidth;

    window.addEventListener('resize', function () {
        make_slide(1);
    });

    const media = [
        window.matchMedia('(min-width: 1366px)'),
        window.matchMedia('(min-width: 992px)'),
    ];

    make_slide(1);
});

function make_slide(amountSlideAppear) {
    // set width and margin for item slide
    const widthItemAndMargin = reviewDiv.offsetWidth;
    let widthAllBox = widthItemAndMargin * listBox.length;
    wrapperBox.style.width = `${widthAllBox}px`;

    listBox.forEach((element) => {
        element.style.width = `${widthItemAndMargin - 20}px`;
    });

    // handle slide
    let count = 0;
    let spacing = widthAllBox - amountSlideAppear * widthItemAndMargin;
    btnRight.addEventListener('click', function () {
        count += widthItemAndMargin;

        if (count > spacing) {
            count = 0;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });

    btnLeft.addEventListener('click', function () {
        count -= widthItemAndMargin;

        if (count < 0) {
            count = spacing;
        }
        wrapperBox.style.transform = `translateX(${-count}px)`;
    });
}
