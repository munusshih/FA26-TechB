import { gsap } from "gsap";

const initializeEntranceAnimations = () => {
  if (document.documentElement.dataset.entranceAnimated === "true") return;
  document.documentElement.dataset.entranceAnimated = "true";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const pageElements = [
    document.querySelector(".course-masthead .site-title"),
    document.querySelector(".course-identity"),
    document.querySelector(".course-nav-row"),
    document.querySelector(".ant-colony-well"),
  ].filter(Boolean);

  gsap.fromTo(
    pageElements,
    { autoAlpha: 0.82, y: 9 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.68,
      stagger: 0.07,
      ease: "power2.out",
      clearProps: "opacity,visibility,transform",
    },
  );

  const sectionObserver = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const targets = [
          entry.target.querySelector(".accordion-button"),
          ...entry.target.querySelectorAll(":scope > .accordion-content > *"),
        ].filter(Boolean);

        gsap.fromTo(
          targets,
          { autoAlpha: 0.86, y: 10 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.52,
            stagger: 0.035,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
          },
        );
        sectionObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.06,
    },
  );

  document
    .querySelectorAll(".accordion")
    .forEach((section) => sectionObserver.observe(section));
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeEntranceAnimations, {
    once: true,
  });
} else {
  initializeEntranceAnimations();
}
