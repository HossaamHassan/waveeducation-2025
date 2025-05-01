document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelectorAll(".fa-arrow-left, .fa-arrow-right");
  const ltrStylesheet = Array.from(document.querySelectorAll("link")).find(
    (link) => link.href.includes("style-ltr.css")
  );

  if (ltrStylesheet) {
    arrows.forEach((arrow) => {
      arrow.classList.remove("fa-arrow-left");
      arrow.classList.add("fa-arrow-right");
    });
  } else {
    arrows.forEach((arrow) => {
      arrow.classList.remove("fa-arrow-right");
      arrow.classList.add("fa-arrow-left");
    });
  }
});
