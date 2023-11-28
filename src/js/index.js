import tabsToggle from "./modules/company-tabs";
import cartOnclick from "./modules/cart-onclick";
import { navHighlighter, scrollSection } from "./modules/active-navlink";
import catalogFilter from "./modules/catalog-filter";
import cartPopup from "./modules/popup-cart";
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let splide = new Splide(".splide", {
    arrows: false,
    width: "100%",
  }).mount();

  //attach events to custom buttons
  nextBtn.addEventListener("click", (e) => {
    splide.go("+1");
  });

  prevBtn.addEventListener("click", (e) => {
    splide.go("-1");
  });
});

tabsToggle();
cartOnclick();
navHighlighter();
scrollSection();
catalogFilter();
cartPopup();
