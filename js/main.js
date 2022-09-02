// menu buttons change
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__button');
const navBtnImg = document.querySelector('.nav__button-img');
navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = './img/icons/nav-close.svg';
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}
//---tabs
let tab = function() {
    let tabNavItem = document.querySelectorAll('.tabs__nav-item'),
        tabContentItem = document.querySelectorAll('.tabs__content-item'),
        tabActive;
    tabNavItem.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });    
    function selectTabNav() {
        tabNavItem.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabActive = this.getAttribute('data-tab-name');
        selectTabContent(tabActive);
    }
    function selectTabContent(tabActive) {
        tabContentItem.forEach(item =>{
            if(item.classList.contains(tabActive)){
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        })
    }
};
tab();
//---accordeon
const trigger = document.querySelectorAll('.accordeon-item__trigger');
trigger.forEach(trigger => {
    trigger.addEventListener('click', function (element) {
        let targetItem = element.target;
        //console.log(targetItem);
        if(targetItem.classList.contains('accordeon-item--active')){
            targetItem.classList.remove('accordeon-item--active');
        } else {
            targetItem.classList.add('accordeon-item--active');
        }
    });
});
//-----------------Read_more---------------------------------
function readMore(){
    let dots = document.querySelector('.dots');
    let more = document.querySelector('.about-teacher__more');
    let btn = document.querySelector('.about-teacher__more-btn');
    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        more.style.display = 'none';
        btn.innerHTML = "Читать всё";
    } else {
        dots.style.display = 'none';
        more.style.display = 'inline';
        btn.innerHTML = "Скрыть";
    }
}
//________Video_play_______________
function stopVideo(){
    document.querySelectorAll('video').forEach(vid => {
        vid.pause();
        vid.classList.remove('played');
    });
}
let btn = document.querySelectorAll(".video-slider-item-btn");
let video = document.querySelectorAll('.video__item');
video.forEach(video => {
    video.addEventListener('click', function (element) {
        let targetItem = element.target;
        if(targetItem.paused){
            stopVideo();
            targetItem.play();
            targetItem.classList.add('played');
        } else{
            targetItem.pause();
            targetItem.classList.remove('played');
        }
        targetItem.onended = () => {
            targetItem.classList.remove('played');
        };
    });
});
btn.forEach(btn => {
    btn.addEventListener('click', function (el) {
        let targetBtn = el.target;
        let prevSibling = targetBtn.previousElementSibling;
        stopVideo();
        prevSibling.play();
        prevSibling.classList.add('played');
    });
});
// map_load_on_click
let map = document.querySelector('.contacts__map');
let mapLink = '<iframe src="https://yandex.by/map-widget/v1/-/CCUJuPT0tA" width="100%" height="400"></iframe>';
map.onclick = function(){
    if(map.classList.contains('enabled')){
        return;
    } else {
        map.innerHTML = mapLink;
        map.classList.add('enabled');
    }
};
//    slick-slider
$(document).ready(function() {
    $('.photo-slider').slick({
        slidesToShow:3,
        centerMode:true,
        touchThreshold: 20,
        responsive:[
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow:1,
                }
            }  
        ]
    });
    $('.testimonials-slider').slick({
        slidesToShow:1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    $('.video-slider').slick({
        slidesToShow:3,
        infinite: false,
        initialSlide: 0,
        responsive:[
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint:480,
                settings: {
                    slidesToShow:1,
                }
            }  
        ]
    });
});