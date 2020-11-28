export function getElementFromTemplate (template, parent = 'div') {
  const parentEl = document.createElement(parent);
  parentEl.innerHTML = template;

  return parentEl.children[0];
}
