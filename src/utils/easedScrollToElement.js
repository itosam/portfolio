export const easedScrollToElement = (element, { duration = 950, offset = 80 } = {}) => {
  if (!element) return;

  const startPosition = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  const easeInOutCubic = (progress) =>
    progress < 0.5 ? 4 * progress ** 3 : 1 - ((-2 * progress + 2) ** 3) / 2;

  const scrollStep = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

    if (progress < 1) {
      window.requestAnimationFrame(scrollStep);
    }
  };

  window.requestAnimationFrame(scrollStep);
};
