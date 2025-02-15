/* =============== heaber Scroll - background =============== */
window.addEventListener("scroll", function(){
    let heaber = document.querySelector("header");
    heaber.classList.toggle("sticky", window.scrollY > 0);
})
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    var swiper = new Swiper(".swiper", {
      effect: "cards",
      grabCursor: true,
      initialSlide: 2,
      speed: 500,
      loop: true,
      rotate: true,
    });
  } else {
    console.error("Swiper library is not loaded.");
  }
});



/* =============== Gsap JS =============== */
gsap.from(".logo-imag", {
    opacity: 0,
    y: -10,
    delay: 0.5,
    duration: 0.5,
  });
  gsap.from(".nav-list a", {
    opacity: 0,
    y: -10,
    delay: 0.8,
    duration: 0.5,
    stagger: 0.3,
  });
  gsap.from(".icons a i", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
    stagger: 0.3,
  });
  gsap.from(".home ", {
    opacity: 0,
    y: 30,
    delay: 1.3,
    duration: 0.9,
    stagger: 0.3,
  });
  if (document.querySelector(".flip-card")) {
    gsap.from(".flip-card", { opacity: 0, y: 30, delay: 1.3, duration: 0.9, stagger: 0.3 });
}


/* =============== Buttom-whatsapp =============== */
let buttonWhatsapp = document.querySelector(".whatsapp-icon");
window.addEventListener("scroll", () => {
    if(window.scrollY >= 200){
        buttonWhatsapp.style.bottom ="50px"
    }else {
        buttonWhatsapp.style.bottom ="-350px"
    }
});

// Toggle Sidebar Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".nav_toggle .fa-bars");
  const menuBtnClose = document.querySelector(".nav_toggle .fa-xmark");
  const sidebar = document.querySelector(".sidebar");

  menuBtn.addEventListener("click", function (event) {
    sidebar.style.display =
      sidebar.style.display === "block" ? "none" : "block";
    event.stopPropagation();
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
  });

  menuBtnClose.addEventListener("click", () => {
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
  });
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== menuBtn) {
      sidebar.style.display = "none";
      menuBtn.style.display = "block";
      menuBtnClose.style.display = "none";
    }
  });
});
