export function focus(selector, index = 0) {
  const element = document.querySelectorAll(selector)[index];

  if (element || element.focus) {
    element.focus();
  }
}
