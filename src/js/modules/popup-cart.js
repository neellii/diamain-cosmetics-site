function cartPopup() {
  const openBtn = document.getElementById("openPop");
  const closeBtn = document.getElementById("closePop");
  const popWindow = document.getElementById("pop");

  openBtn.addEventListener("click", () => {
    popWindow.classList.add("popup-open");
    document.body.classList.add("no-scroll");
    popWindow.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popWindow.classList.remove("popup-open");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      popWindow.style.display = "none";
    }, 500);
  });
}

export default cartPopup;
