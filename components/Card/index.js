import Typewriter from '../Typewriter';

const text = `Aziz Gharbi, Software Developer Extraordinaire! I'm so passionate about
learning new technologies. Open source enthusiast (because who likes
secrets anyway?), Lua, Python, TypeScript/JavaScript junkie, and
Linux lover. Penguins are my spirit animal!`;

export default function Card() {
  return (
    <div className="card">
      <Typewriter text={text} speed={50} />
    </div>
  );
}
