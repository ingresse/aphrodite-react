export function getFilteredProps({
  className,
  color,
  height,
  size,
  width,
}) {
  const xmlns = 'http://www.w3.org/2000/svg';

  return {
    xmlns,
    className,
    color,
    height: (height || size),
    width : (width || size),
    fill  : 'currentColor',
    stroke: 'currentColor',
  };
}
