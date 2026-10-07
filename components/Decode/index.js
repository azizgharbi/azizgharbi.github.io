import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

// Glyphs the decoding characters cycle through; all exist in the display font.
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=<>?';
const FLIP_MS = 55; // how often unresolved characters change
const LOCK_MS = 85; // gap between characters locking in, left to right
const START_DELAY_MS = 300;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

// Renders `lines` as one element, one line each. On load (and on hover) an
// aria-hidden copy laid over it cycles through random glyphs, then locks
// into the real text left to right. The element itself never changes, so
// crawlers and screen readers always read the real text.
export default function Decode({ as: Tag = 'p', lines, className = '' }) {
  const [frame, setFrame] = useState(null);
  const raf = useRef(0);

  const decode = useCallback(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    cancelAnimationFrame(raf.current);
    const total = lines.join('').length;
    const start = performance.now();
    let lastFlip = -Infinity;

    const tick = (now) => {
      const locked = Math.floor((now - start) / LOCK_MS);
      if (locked >= total) {
        setFrame(null);
        return;
      }
      if (now - lastFlip >= FLIP_MS) {
        lastFlip = now;
        let index = 0;
        setFrame(
          lines.map((line) =>
            Array.from(line, (char) =>
              index++ < locked ? char : randomGlyph()
            ).join('')
          )
        );
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [lines]);

  useEffect(() => {
    const timer = setTimeout(decode, START_DELAY_MS);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf.current);
    };
  }, [decode]);

  return (
    <div className={`decode ${className}`} onMouseEnter={decode}>
      <Tag className={frame ? 'decode__text is-decoding' : 'decode__text'}>
        {lines.map((line, i) => (
          <Fragment key={line}>
            {i > 0 && ' '}
            <span className="decode__line">{line}</span>
          </Fragment>
        ))}
      </Tag>
      {frame && (
        <div className="decode__text decode__overlay" aria-hidden="true">
          {frame.map((line, i) => (
            <span key={i} className="decode__line">
              {line}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
