console.log("1. The layout is valid 10/10 \n2. Semantic layout 20/20 \n3. The layout corresponds to the 48/48 layout \n4. Requirements for css 12/12 \n5. Interactivity, implemented through css 20/20 \n\nDone 11.01.2022 / deadline 17.01.2022 \n\nThe work was completed in full with all its requirements. \n\nScore 100/100.");


const burger = document.querySelector('.burger'),
      nav = document.querySelector('.nav');
      navLinks = nav.querySelectorAll('.nav-link'),
      html = document.querySelector('html');

window.addEventListener('resize', () => videoPhoto())
function videoPhoto(){
    const player = document.querySelector('.player');
    if (window.innerWidth <= 768) {
        player.querySelector('img').src = 'assets/img/video-player-t.jpg';
    } else {
        player.querySelector('img').src = 'assets/img/video-player.jpg';
    }
}
videoPhoto()

burger.addEventListener('click', () => menu());
navLinks.forEach(e => {
    e.addEventListener('click', () => menu())
});
function menu() {
    if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        nav.classList.remove('active');
        html.classList.remove('open-menu');
    } else {
        burger.classList.add('active');
        nav.classList.add('active');
        html.classList.add('open-menu')
    }
}
