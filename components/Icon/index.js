// Draws a Font Awesome icon definition as plain inline SVG. Unlike
// @fortawesome/react-fontawesome, it needs no runtime-injected CSS, so icons
// render at the right size before the page's JavaScript loads.
export default function Icon({ icon }) {
  const [width, height, , , path] = icon.icon;
  return (
    <svg
      className="icon"
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d={path} />
    </svg>
  );
}
