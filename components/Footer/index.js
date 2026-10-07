import { links, profile } from '../../lib/site';

export default function Footer({ year }) {
  return (
    <footer className="footer">
      <p>
        © {year} {profile.name}. Built with Next.js and a little help from AI.{' '}
        <a href={links.source} target="_blank" rel="noopener noreferrer">
          View the source
        </a>
      </p>
    </footer>
  );
}
