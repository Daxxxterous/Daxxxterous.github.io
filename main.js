const items = document.querySelectorAll('.invis li');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('vis');
      observer.unobserve(entry.target);
    }
  });
}, options);

items.forEach(item => {
  observer.observe(item);
});
