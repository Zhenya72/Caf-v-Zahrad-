document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".faq-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});
