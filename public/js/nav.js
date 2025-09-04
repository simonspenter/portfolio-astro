document.querySelectorAll('.split-dropdown').forEach((el) => {
  const toggle = el.querySelector('[data-bs-toggle="dropdown"]');
  if (!toggle) return;
  const dd = new bootstrap.Dropdown(toggle);

  el.addEventListener('mouseenter', () => dd.show());
  el.addEventListener('mouseleave', () => dd.hide());
});
