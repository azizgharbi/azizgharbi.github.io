'use client';
import Rectangle from '../Rectangle';

const infos = [
  {
    description: `Aziz Gharbi, Software Developer Extraordinaire!
    I'm so passionate about learning new technologies.
    Open source enthusiast (because who likes secrets anyway?), Lua, Python, Rust, 
    TypeScript/JavaScript junkie, and Linux lover. Penguins are my spirit animal!`,
    note: 'C3',
  },
  {
    description: null,
    note: 'C4',
  },
  {
    description: null,
    note: 'C5',
  },
];

const MusicxBox = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {infos.map(({ description, note }) => (
        <Rectangle key={note} description={description} note={note} />
      ))}
    </div>
  );
};

export default MusicxBox;
