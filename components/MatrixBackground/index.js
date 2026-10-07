import { useEffect, useRef } from 'react';

// Half-width katakana, digits and a few symbols, as in the film.
const GLYPHS =
  'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789:.=*+-<>|';
const FONT_SIZE = 16;
const STEP_MS = 55; // one row per step; slow enough to stay in the background
const FADE = 'rgba(0, 0, 0, 0.09)'; // shorter trails = less noise behind text
const TRAIL = '#00ff41';
const HEAD = '#d6ffe0';

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let drops = [];
    let frame = 0;
    let lastStep = 0;
    let warmUp = 60; // steps to fast-forward before the first frame

    const step = () => {
      ctx.fillStyle = FADE;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;
        // Repaint the previous head in green so only the newest glyph glows.
        ctx.fillStyle = TRAIL;
        ctx.fillText(randomGlyph(), x, y - FONT_SIZE);
        ctx.fillStyle = HEAD;
        ctx.fillText(randomGlyph(), x, y);
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Mobile browsers resize the viewport as the address bar slides in and
      // out; resizing would wipe the canvas, so ignore small height changes.
      if (width === canvas.width && Math.abs(height - canvas.height) < 160) {
        return;
      }
      canvas.width = width;
      canvas.height = height;
      ctx.font = `${FONT_SIZE}px monospace`;
      const columns = Math.ceil(width / FONT_SIZE);
      drops = Array.from({ length: columns }, (_, i) =>
        i < drops.length ? drops[i] : Math.random() * -60
      );
      // Fast-forward so the first frame already shows rain mid-fall. With
      // reduced motion there is no animation loop, so redraw the still frame
      // after every resize.
      const steps = reduceMotion.matches ? 60 : warmUp;
      for (let i = 0; i < steps; i++) step();
      warmUp = 0;
    };

    const loop = (now) => {
      if (now - lastStep >= STEP_MS) {
        lastStep = now;
        step();
      }
      frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    if (!reduceMotion.matches) {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix" aria-hidden="true" />;
}
