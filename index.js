import i18Obj from 'js/translate.js';
// console.log(i18Obj);

const arrSvg = [`<svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 16.8821C23.6125 16.8821 24.7001 17.212 25.6251 17.8301C26.5501 18.4481 27.2711 19.3267 27.6968 20.3545C28.1226 21.3823 28.234 22.5133 28.0169 23.6045C27.7999 24.6956 27.2641 25.6979 26.4775 26.4846C25.6908 27.2712 24.6885 27.807 23.5974 28.024C22.5062 28.241 21.3752 28.1296 20.3474 27.7039C19.3196 27.2782 18.4411 26.5572 17.823 25.6322C17.2049 24.7071 16.875 23.6196 16.875 22.5071C16.8769 21.0158 17.4701 19.5861 18.5246 18.5317C19.5791 17.4772 21.0087 16.8839 22.5 16.8821ZM22.5 14.0696C20.8312 14.0696 19.1999 14.5644 17.8124 15.4916C16.4248 16.4187 15.3434 17.7364 14.7048 19.2782C14.0662 20.8199 13.8991 22.5164 14.2246 24.1532C14.5502 25.7899 15.3538 27.2933 16.5338 28.4733C17.7138 29.6533 19.2172 30.4569 20.8539 30.7825C22.4906 31.108 24.1871 30.9409 25.7289 30.3023C27.2706 29.6637 28.5884 28.5822 29.5155 27.1947C30.4427 25.8072 30.9375 24.1759 30.9375 22.5071C30.9375 20.2693 30.0486 18.1232 28.4662 16.5409C26.8839 14.9585 24.7378 14.0696 22.5 14.0696Z"/>
                        <path d="M7.58521 9.58066L9.57364 7.59082L14.504 12.5211L12.5155 14.5096L7.58521 9.58066Z"/>
                        <path d="M2.8125 21.1008H9.84375V23.9133H2.8125V21.1008Z"/>
                        <path d="M7.58521 35.4332L12.5155 30.5029L14.504 32.4928L9.57364 37.4217L7.58521 35.4332Z"/>
                        <path d="M21.0938 35.1633H23.9062V42.1946H21.0938V35.1633Z"/>
                        <path d="M30.4973 32.4928L32.4858 30.5029L37.4161 35.4332L35.4276 37.4217L30.4973 32.4928Z"/>
                        <path d="M35.1562 21.1008H42.1875V23.9133H35.1562V21.1008Z"/>
                        <path d="M30.4973 12.5211L35.4276 7.59082L37.4161 9.58066L32.4858 14.5096L30.4973 12.5211Z"/>
                        <path d="M21.0938 2.81958H23.9062V9.85083H21.0938V2.81958Z"/>
                        </svg>`, 
                        `<svg width="41" height="40" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4528 40C15.7066 40 10.315 37.8174 6.27098 33.8545C2.22701 29.8915 5.02421e-07 24.6074 5.02421e-07 18.9761C-0.00085731 15.0913 1.09674 11.2823 3.17098 7.97181C5.24521 4.66132 8.21494 1.97886 11.7505 0.222165C12.1143 0.0404498 12.5246 -0.032245 12.9302 0.0131555C13.3359 0.058556 13.7189 0.220041 14.0315 0.477451C14.344 0.734861 14.5723 1.07679 14.6878 1.46057C14.8033 1.84434 14.8009 2.25294 14.6809 2.63538C13.672 5.82896 13.5728 9.23201 14.3941 12.4768C15.2154 15.7216 16.9259 18.6847 19.3408 21.046C21.0739 22.757 23.136 24.1141 25.4078 25.0388C27.6796 25.9635 30.116 26.4374 32.576 26.433C34.4579 26.4345 36.3292 26.1578 38.1269 25.6125C38.5172 25.4948 38.9342 25.4924 39.3258 25.6056C39.7175 25.7188 40.0665 25.9425 40.3291 26.2488C40.5918 26.5552 40.7566 26.9306 40.8029 27.3282C40.8492 27.7257 40.775 28.1279 40.5895 28.4843C38.7969 31.9492 36.0597 34.8596 32.6817 36.8923C29.3036 38.9251 25.4169 40.0008 21.4528 40ZM11.6763 3.31431C8.93463 4.94908 6.66986 7.24958 5.10105 9.99327C3.53225 12.737 2.71252 15.831 2.72115 18.9761C2.72115 29.0982 11.1241 37.3333 21.4528 37.3333C24.6621 37.3418 27.8193 36.5384 30.619 35.001C33.4187 33.4636 35.7662 31.2441 37.4343 28.5573C35.8413 28.9186 34.2113 29.1007 32.5762 29.1C29.7587 29.1053 26.9682 28.5628 24.3661 27.5041C21.764 26.4453 19.4021 24.8913 17.417 22.9319C14.8382 20.4094 12.9578 17.2845 11.9533 13.8522C10.9489 10.4199 10.8536 6.79329 11.6763 3.31481V3.31431Z"/>
                        </svg>`
                    ];

//console.log('All requirements are met. \nThe work has been completed in full. \nUseful tips are welcome). \nDone 24.01.2022 / deadline 17.01.2022. \nScore 75/75.');

// Сменя картинки секции видео --------------------------------------
window.addEventListener('resize', () => videoPhoto());
function videoPhoto(){
    const player = document.querySelector('.player');
    if (window.innerWidth <= 768) {
        player.querySelector('img').src = 'assets/img/video-player-t.jpg';
    } else {
        player.querySelector('img').src = 'assets/img/video-player.jpg';
    }
};
videoPhoto();
// -------------------------------------- Сменя картинки на секции видео

// Бургер меню --------------------------------------------------
const burger = document.querySelector('.burger'),
      nav = document.querySelector('.nav'),
      navLinks = document.querySelectorAll('.nav-link'),
      html = document.querySelector('html');

burger.addEventListener('click', () => menuOpen());

navLinks.forEach(e => {
    e.addEventListener('click', () => menuOpen())
});

function menuOpen() {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        nav.classList.remove('active');
        html.classList.remove('open-menu');
    } else {
        burger.classList.add('active');
        nav.classList.add('active');
        html.classList.add('open-menu')
    }
};
// -------------------------------------------------- Бургер меню

// замена картинок
const seasons = ['winter', 'spring', 'summer', 'autumn'];
seasons.forEach((e) => {
    preloadImages(e);
});
function preloadImages(season){
    for(let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `assets/img/${season}/${i}.jpg`;
    }
};

const portfolioBtns = document.querySelectorAll('.portfolio-btn'),
      potrfolioImgs = document.querySelectorAll('.portfolio-items img');

portfolioBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        portfolioBtns.forEach((un) => {
            un.classList.remove('btn-active');
        });
        btn.classList.add('btn-active');
        replaceImg(btn.dataset.season)
    })
});
function replaceImg(data){
    potrfolioImgs.forEach((e,i) => {
        potrfolioImgs[i].src = `assets/img/${data}/${i+1}.jpg`
    })
};
// замена картинок

// Перевод сайта
const selectorLangs = document.querySelectorAll('.selector-lang');

selectorLangs.forEach((e) => {
    e.addEventListener('click', () => {
        selectorLangs.forEach((j) => {
            j.classList.remove('active')
        });
        e.classList.add('active');

        getTranslate(e.dataset.siteLang)
    })
});

function getTranslate(lang = 'en'){
    let d = document.querySelectorAll('[data-i18n]');
    d.forEach((e) => {
        e.textContent = i18Obj[lang][e.dataset.i18n]
    })
};
// Перевод сайта

// тема сайта
const themeSite = document.querySelector('.theme-site');

themeSite.addEventListener('click', () => switchTheme());

function switchTheme(){
    if (themeSite.dataset.theme =='day') {
        themeSite.dataset.theme = 'night';
        themeSite.innerHTML = arrSvg[1];
        document.documentElement.style.setProperty('--background-color', '#fff');
        document.documentElement.style.setProperty('--title-color', '#000');
        document.documentElement.style.setProperty('--skills-text-color', '#000');
        document.documentElement.style.setProperty('--portfolio-btn-color', '#000');
    } else {
        themeSite.dataset.theme = 'day';
        themeSite.innerHTML = arrSvg[0];
        document.documentElement.style.setProperty('--background-color', '#000000');
        document.documentElement.style.setProperty('--title-color', '#BDAE82');
        document.documentElement.style.setProperty('--skills-text-color', '#ffffff');
        document.documentElement.style.setProperty('--portfolio-btn-color', '#BDAE82');
    }
};
// тема сайта
