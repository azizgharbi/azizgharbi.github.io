import { useEffect, useState } from 'react';
import Link from 'next/link';
import Seo from '../components/Seo';
import Terminal from '../components/Terminal';
import Decode from '../components/Decode';

const CODE = ['404'];

export default function NotFound() {
  // GitHub Pages serves this file for every unknown URL, so read the path in
  // the browser rather than at build time.
  const [path, setPath] = useState('');
  useEffect(() => setPath(window.location.pathname), []);

  return (
    <>
      <Seo
        title="Page not found — Aziz Gharbi"
        description="This page doesn’t exist. Head back to Aziz Gharbi’s homepage."
        noindex
      />
      <div className="page page--center">
        <Terminal title={path ? `man ${path}` : 'man'}>
          <main className="manual not-found">
            <Decode as="h1" lines={CODE} className="not-found__code" />
            <p className="not-found__error">
              No manual entry for {path ? <code>{path}</code> : 'this page'}.
            </p>
            <p>
              There is no spoon, and no page at this address. Check the link, or
              head back to the manual.
            </p>
            <p className="hero__actions">
              <Link href="/">
                <a className="button button--primary">Back to the homepage</a>
              </Link>
            </p>
          </main>
        </Terminal>
      </div>
    </>
  );
}
