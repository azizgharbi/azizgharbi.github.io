'use client';

import Typewriter from '../Typewriter';

const text = `Aziz Gharbi, Software Developer Extraordinaire! I'm so passionate about
learning new technologies. Open source enthusiast (because who likes
secrets anyway?), Lua, Python, TypeScript/JavaScript junkie, and
Linux lover. Penguins are my spirit animal!`;

export default function Terminal() {
  return (
    <div>
      <div className="terminal">
        <div className="terminal-menu">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <Typewriter text={text} speed={50} />
      </div>
    </div>
  );
}
