import Typewriter from '../Typewriter';

const text = `Aziz Gharbi, Software Developer! Lua, Python, (TypeScript/JavaScript junkie, and
Linux lover. Boatman steady through these digital waves and social dystopia!`;

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
