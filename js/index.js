((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

// Scrolltop
const scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 300) {
    scrolltop.classList.add("scrolltop--show");
  } else {
    scrolltop.classList.remove("scrolltop--show");
  }
});

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  reset: false,
});

sr.reveal(".fade-bottom, h1", {
  origin: "bottom",
});
sr.reveal(".fade-top", {
  origin: "top",
});

sr.reveal(".fade-left", {
  origin: "left",
});
sr.reveal(".fade-right", {
  origin: "right",
});
