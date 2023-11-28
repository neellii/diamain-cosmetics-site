function catalogFilter() {
  const items = document.querySelectorAll(".filter-links li");
  const products = document.querySelectorAll(".card");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((item) => {
        item.classList.remove("active-filter");
      });
      item.classList.add("active-filter");

      const liAttr = item.getAttribute("data-filter");
      products.forEach((item) => {
        item.style.display = "none";

        if (
          item.getAttribute("data-filter").toLowerCase() ===
            liAttr.toLowerCase() ||
          liAttr === "all"
        ) {
          item.style.display = "flex";
        }
      });
    });
  });
}

export default catalogFilter;
