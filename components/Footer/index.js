export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        © {year} - <span>built with Passion!</span>
      </p>
    </div>
  );
}
