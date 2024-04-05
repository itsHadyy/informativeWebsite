const element = document.querySelector('.type4');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Add class only when intersecting
        }
    });
});

observer.observe(element);

//slide show starts here

// const slideContainer = document.querySelector('.slideshow');
// const imageContainers = document.querySelectorAll('.image-container');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// let currentSlide = 0;
// let isAnimating = false;
// // Show the first slide initially (outside isAnimating check)
// imageContainers[currentSlide].classList.add('active');
// function showSlide(slideIndex) {
//     if (isAnimating) return;
//     isAnimating = true;

//     imageContainers[currentSlide].classList.remove('active');
//     imageContainers[slideIndex].classList.add('active');

//     currentSlide = slideIndex;

//     setTimeout(() => {
//         isAnimating = false;
//     }, 1000); // Adjust animation duration as needed
// }

// nextBtn.addEventListener('click', () => {
//     showSlide(currentSlide === imageContainers.length - 1 ? 0 : currentSlide + 1);
// });

// prevBtn.addEventListener('click', () => {
//     showSlide(currentSlide === 0 ? imageContainers.length - 1 : currentSlide - 1);
// });

// // Optional: Autoplay
// setInterval(() => {
//     nextBtn.click();
// }, 3000); // Adjust interval between slides as needed


const images = document.querySelectorAll('.image');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let slideIndex = 0;
let intervalId = null; // Store interval ID for stopping the animation

// Set initial opacity of the first image to 1 (no transition)
images[0].style.opacity = 1;

function changeImage() {
    images[slideIndex].classList.remove('active');
    slideIndex++;

    if (slideIndex >= images.length) {
        slideIndex = 0;
    }

    images[slideIndex].classList.add('active');
}

// Start the slideshow automatically on page load
intervalId = setInterval(changeImage, 3000);

// Pause slideshow on hover
const container = document.querySelector('.imageshow-container');
container.addEventListener('mouseover', () => {
    clearInterval(intervalId);
    intervalId = null;
});

container.addEventListener('mouseout', () => {
    // Restart slideshow if it was paused
    if (!intervalId) {
        intervalId = setInterval(changeImage, 3000);
    }
});

// Handle arrow click events (you can add additional logic here)
prevArrow.addEventListener('click', () => {
    images[slideIndex].classList.remove('active');
    images[(slideIndex + images.length - 1) % images.length].classList.add('active');
    slideIndex = (slideIndex + images.length - 1) % images.length;
});
nextArrow.addEventListener('click', changeImage);

