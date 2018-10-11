export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'components/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button-button" */ 'components/Button/Button.mdx'),
  'components/LabelButton/LabelButton.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-label-button-label-button" */ 'components/LabelButton/LabelButton.mdx'),
}
