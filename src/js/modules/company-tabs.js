const tabs = document.querySelectorAll(".tab__btn");
const content = document.querySelectorAll(".content__info");
const imagesContent = document.querySelectorAll(".content__img");
const contentCount = content.length;
let activeSlide = 0;

function tabsToggle() {
  const aautoChange = setInterval(() => {
    tabs[activeSlide].classList.remove("tab-active");
    content[activeSlide].classList.remove("content-active");
    imagesContent[activeSlide].classList.remove("content__img-active");
    activeSlide++;
    if (activeSlide === contentCount) {
      activeSlide = 0;
    }
    tabs[activeSlide].classList.add("tab-active");
    content[activeSlide].classList.add("content-active");
    imagesContent[activeSlide].classList.add("content__img-active");
  }, 4000);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      clearInterval(aautoChange);

      tabs.forEach((tab) => {
        tab.classList.remove("tab-active");
      });
      tab.classList.add("tab-active");

      content.forEach((cont) => {
        cont.classList.remove("content-active");
      });
      content[index].classList.add("content-active");

      imagesContent.forEach((img) => {
        img.classList.remove("content__img-active");
      });
      imagesContent[index].classList.add("content__img-active");
    });
  });
}

export default tabsToggle;
