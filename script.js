/* ================= WHATSAPP BUTTON ================= */

const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function(e){

  e.preventDefault();

  // YOUR WHATSAPP NUMBER
  // ADD COUNTRY CODE WITHOUT +
  const phoneNumber = "919811639129";

  // MESSAGE
  const message =
  "Hello NFS Jewels, I would like to know more about your luxury jewellery and rare gemstone collection. Hello NFS Jewels, I came across your premium jewellery collection and would love to know more about your rare gemstones, luxury designs, and available collections. Looking forward to connecting with you. ";

  // WHATSAPP URL
  const whatsappURL =
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // OPEN WHATSAPP
  window.open(whatsappURL, "_blank");

});
/* ================= MOBILE DROPDOWN ================= */

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
/* ================= SIMPLE VIDEO SLIDER ================= */

const slides = document.querySelectorAll(".video-slide");

const next = document.querySelector(".nextBtn");

const prev = document.querySelector(".prevBtn");

let index = 0;

/* NEXT BUTTON */

next.onclick = () => {

  slides[index].classList.remove("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

  slides[index].classList.add("active");

};

/* PREVIOUS BUTTON */

prev.onclick = () => {

  slides[index].classList.remove("active");

  index--;

  if(index < 0){
    index = slides.length - 1;
  }

  slides[index].classList.add("active");

};

