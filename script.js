const Menu = document.querySelector('.Menu i');
const navbar = document.querySelector('ul');

Menu.addEventListener('click', () => {
    Menu.classList.toggle('fa-house');
    navbar.classList.toggle('slide');
});


let slidePosition = 0;
const sliders = document.querySelectorAll('.slider-item');
const totalSlider = sliders.length;
function update() {
    sliders.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('hidden');
    });

    sliders[slidePosition].classList.add('active');
}
function PrevSlide() {
    if (slidePosition == 0) {
        slidePosition = totalSlider - 1;
    } else {
        slidePosition--;
    }
    update();
}
function NextSlide() {
    if (slidePosition == totalSlider - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    update();
}

function over() {
    document.getElementById("image1").src = "image/img2.png";
}
function myover() {
    document.getElementById("image1").src = "image/img-2.png";
}
function enter() {
    document.getElementById("image2").src = "image/img4.png";
}
function myenter() {
    document.getElementById("image2").src = "image/img-4.png";
}
function like() {
    document.getElementById("image3").src = "image/img3.png";
}
function mylike() {
    document.getElementById("image3").src = "image/img-3.png";
}
function fun() {
    document.getElementById("image4").src = "image/img5.png";
}
function myfun() {
    document.getElementById("image4").src = "image/img-5.png";
}



function myfunction() {
    const video = document.getElementById("myVideo");
const button = document.getElementById("but");
  if (video.paused) {
    video.play();
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
  else {
    video.pause();
    button.innerHTML= '<i class="fa-solid fa-play"></i>';
  }
}