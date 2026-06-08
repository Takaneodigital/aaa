/* AAA — Système de design : surlignage du sommaire au défilement (scrollspy) */
document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(document.querySelectorAll(".ds-nav a"));
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    const sec = document.getElementById(id);
    if (sec) map.set(sec, a);
  });
  if (!map.size || !("IntersectionObserver" in window)) return;

  const setActive = (a) => {
    links.forEach((l) => l.classList.toggle("is-active", l === a));
  };

  const obs = new IntersectionObserver(
    (entries) => {
      // choisir la section la plus haute actuellement visible
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActive(map.get(visible[0].target));
    },
    { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
  );
  map.forEach((_, sec) => obs.observe(sec));

  // clic : surlignage immédiat
  links.forEach((a) =>
    a.addEventListener("click", () => setActive(a))
  );
});
