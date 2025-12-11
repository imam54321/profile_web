const track = document.querySelector(".carousel-track");
let slides = document.querySelectorAll(".slide");
let index = 1;

// clone first & last
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

track.prepend(lastClone);
track.append(firstClone);

// update NodeList (karena sudah ada clone baru)
slides = document.querySelectorAll(".slide");

// posisikan awal di index=1 (slide pertama asli)
track.style.transform = `translateX(-100%)`;

// fungsi pindah slide
function moveToSlide() {
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${index * 100}%)`;
}

// hapus efek lompat ketika kena clone
track.addEventListener("transitionend", () => {
  if (slides[index].id === "first-clone") {
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-100%)`;
  }
  if (slides[index].id === "last-clone") {
    track.style.transition = "none";
    index = slides.length - 2;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

// tombol
document.querySelector(".next").addEventListener("click", () => {
  index++;
  moveToSlide();
  pauseAutoSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  index--;
  moveToSlide();
  pauseAutoSlide();
});

// autoplay
let autoSlide;
function startAutoSlide() {
  autoSlide = setInterval(() => {
    index++;
    moveToSlide();
  }, 4000);
}
function pauseAutoSlide() {
  clearInterval(autoSlide);
  setTimeout(startAutoSlide, 7000);
}

startAutoSlide();
