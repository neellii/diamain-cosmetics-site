const cartLink = document.querySelectorAll(".card__cart");
const cartCounter = document.querySelector(".counter");
let currentQty = 0;

function cartOnclick() {
  cartLink.forEach((cart) => {
    cart.addEventListener("click", () => {
      currentQty++;
      cartCounter.style.display = "flex";
      cartCounter.innerHTML = currentQty;
    });
  });
}

export default cartOnclick;
