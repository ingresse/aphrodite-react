/**
 * Toggle window location hash
 *
 * @param {string} hash
 */
export function toggleLocationHash(hash = '') {
  try {
    if (hash) {
      window.location.hash = hash;

      return;
    }

    const _url = new URL(window.location);
    _url.hash  = '';

    window.history.replaceState(null, document.title, _url);

  } catch (e) {
    console.error(e);
  }
}
