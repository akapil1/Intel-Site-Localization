const cards = document.querySelectorAll(".flip-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

const timeline = document.querySelector(".timeline");
const dots = document.querySelectorAll(".dot");

timeline.addEventListener("scroll", () => {
  const scrollLeft = timeline.scrollLeft;
  const maxScroll = timeline.scrollWidth - timeline.clientWidth;

  const progress = scrollLeft / maxScroll;

  const activeIndex = Math.min(
    dots.length - 1,
    Math.floor(progress * dots.length)
  );

  dots.forEach(dot => dot.classList.remove("active"));
  dots[activeIndex].classList.add("active");
});

  function applyDirection() {
    const lang = document.documentElement.lang;
    const rtlLangs = ["ar", "he", "fa", "ur"];

    if (rtlLangs.some(code => lang.startsWith(code))) {
      document.documentElement.setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      document.body.classList.remove("rtl");
    }
  }

  applyDirection();

  const observer = new MutationObserver(applyDirection);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });