function navHighlighter() {
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 250;
      let sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".nav a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  });
}

function scrollSection() {
  const links = document.querySelectorAll(".nav a");
  const navCheckbox = document.getElementById("check");
  const clickx = document.querySelector(".burger");

  clickx.addEventListener("click", () => {
    clickx.classList.toggle("active-burger");
    document.body.classList.toggle("no-scroll");
  });

  for (const link of links) {
    link.addEventListener("click", scrollToSection);
  }

  function scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    const offsetHeight = 150;

    navCheckbox.checked = false;
    clickx.classList.remove("active-burger");
    document.body.classList.remove("no-scroll");

    scroll({
      top: offsetTop - offsetHeight,
      behavior: "smooth",
    });
  }
}

export { navHighlighter, scrollSection };
