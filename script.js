function imageAppearonScroll() {
  let imageContainer = document.querySelector(".third-section-projects");
  let imageMove = document.querySelector(".image-move");
  let imageMove2 = document.querySelector(".image-move2");
  let imageMove3 = document.querySelector(".image-move3");
  let imageContainerPosition = imageContainer.getBoundingClientRect().top;
  let windowHeight = window.innerHeight / 1.5;

  if (windowHeight > imageContainerPosition) {
    imageContainer.classList.add("appear");
    imageMove.classList.add("appear");
    imageMove2.classList.add("appear");
    imageMove3.classList.add("appear");
  } else {
    imageMove.classList.remove("appear");
    imageMove2.classList.remove("appear");
    imageMove3.classList.remove("appear");
  }
}

function appearOnScroll() {
  let textContainer = document.querySelector(".text-animated-container");
  let line1 = document.querySelector(".line1");
  let line2 = document.querySelector(".line2");
  let containerPosition = textContainer.getBoundingClientRect().top;
  let windowHeight = window.innerHeight / 1.5;

  if (windowHeight > containerPosition) {
    textContainer.classList.add("appear");
    line1.classList.add("appear");
    line2.classList.add("appear");
  } else {
    line1.classList.remove("appear");
    line2.classList.remove("appear");
  }
}

window.addEventListener("scroll", imageAppearonScroll);
window.addEventListener("scroll", appearOnScroll);

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for the fourth section
  document.querySelectorAll(".menu-animation").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const rightColumn = document.querySelector(".second-column");
        const targetOffset = targetElement.offsetTop - rightColumn.offsetTop;

        rightColumn.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    });
  });
});
