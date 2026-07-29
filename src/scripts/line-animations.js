const lineTargets = document.querySelectorAll(
  ".course-meta-bar, .accordion, .weekly, footer",
);

lineTargets.forEach((target) => target.classList.add("line-animated"));

if (
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
  !("IntersectionObserver" in window)
) {
  lineTargets.forEach((target) => (target.dataset.lineVisible = "true"));
} else {
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.dataset.lineVisible = String(entry.isIntersecting);
      });
    },
    { rootMargin: "-5% 0px -5%", threshold: 0.06 },
  );
  lineTargets.forEach((target) => observer.observe(target));
}
