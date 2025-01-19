// document.addEventListener('DOMContentLoaded', (event) => {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });
// })


  
let elems = document.querySelectorAll('.elem');
let image = document.querySelector('#immg');

function page3() {
    elems.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            // image.style.display = 'block';
            let imgSrc = el.getAttribute('img1');
            image.src = imgSrc;
            image.style.display = 'block';
        });
    });
    elems.forEach((el) => {
        el.addEventListener('mouseleave', () => {
            image.style.display = 'none';
            let imgSrc = el.getAttribute('img1');
            image.src = '';

            console.log(image);
        });
    });
}
page3()

const right_img = document.querySelector('#right-img')
let line = document.querySelector('#line')
window.onload = () => {
    h2List[0].style.color = 'white'
    line.classList.add('active0')
    
}
const h2List = document.querySelectorAll('.left-sec-words');
h2List.forEach((h2, index) => {
    h2.addEventListener('click', () => {
        console.log('okk');
        h2List.forEach(otherH2 => {
                otherH2.style.color = '';
                line.classList.remove('active0')
                line.classList.remove('active1')
                line.classList.remove('active2')
        });
        if (index === 0) {
            line.classList.add('active0')     
            right_img.style.background = `url(https://images.pexels.com/photos/207153/pexels-photo-207153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center center/cover`
        }
        if (index === 1) {
            line.classList.add('active1')    
            right_img.style.background = `url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center center/cover`
        }
        if (index === 2) {
            line.classList.add('active2')       
            right_img.style.background = `url(https://images.pexels.com/photos/5324960/pexels-photo-5324960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center center/cover`
        }
        h2.style.color = 'white';

    });
});




const input = document.querySelector('input');
const label = document.querySelector('label');

input.addEventListener('input', () => {
    let ok = input.value.length ? label.innerText = '' : label.innerText = 'Email Address';
});


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 30,
    });
}

page3()
swiperAnimation()


const menu = document.querySelector('#menu');
const center = document.querySelector('#center');
const navpart2 = document.querySelector('#nav-part2');

function toggleNav() {
    if (navpart2.style.top === '-100%') {
        // Show navigation and apply styles
        navpart2.style.top = '0%';
        center.style.filter = 'blur(20px)';
        menu.style.color = 'white';
    } else {
        // Revert styles
        menu.style.color = '';
        navpart2.style.top = '-100%';
        center.style.filter = 'blur(0px)';
    }
    console.log('Navigation toggled');
}

// Add event listeners to both #menu and #center
menu.addEventListener('click', toggleNav);
center.addEventListener('click', () => {
    // Always apply the "else" case
    menu.style.color = '';
    navpart2.style.top = '-100%';
    center.style.filter = 'blur(0px)';
    console.log('Center clicked: Reverting styles');
});


var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
