(function () {
  var sections = document.querySelectorAll(".reveal-up");
  if (!sections.length || typeof window.IntersectionObserver !== "function") {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.12 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
