// A terminal window. Its title bar sticks to the top of the viewport and
// doubles as the site header.
export default function Terminal({ title, actions, children }) {
  return (
    <div className="terminal">
      <header className="terminal__bar">
        <span className="terminal__lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="terminal__title">{title}</span>
        <span className="terminal__actions">{actions}</span>
      </header>
      {children}
    </div>
  );
}
