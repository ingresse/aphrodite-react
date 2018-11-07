export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button-button" */ 'components/Button/Button.mdx'),
  'components/Toast/Toast.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-toast-toast" */ 'components/Toast/Toast.mdx'),
}
