function imageAppearOnScroll() {
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

function textAppearOnScroll() {
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

function skillsAppearOnScroll() {
  let skillsContainer = document.querySelector(".second-section-skills");
  let h3Elements = skillsContainer.querySelectorAll("h3");
  let containerPosition = skillsContainer.getBoundingClientRect().top;
  let windowHeight = window.innerHeight / 1.5;

  if (windowHeight > containerPosition) {
    h3Elements.forEach((h3) => h3.classList.add("appear"));
  } else {
    h3Elements.forEach((h3) => h3.classList.remove("appear"));
  }
}

window.addEventListener("scroll", textAppearOnScroll);
window.addEventListener("resize", textAppearOnScroll);

// Trigger the function on page load
window.addEventListener("load", textAppearOnScroll);

window.addEventListener("scroll", imageAppearOnScroll);
window.addEventListener("scroll", skillsAppearOnScroll);

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

function submitForm(event) {
  event.preventDefault();

  let formContainer = document.getElementById("form-container");
  let thankYouMessage = document.getElementById("thank-you-message");

  formContainer.style.display = "none";
  thankYouMessage.style.display = "block";
}
