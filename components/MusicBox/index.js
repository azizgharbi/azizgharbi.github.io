"use client";
import Rectangle from "../Rectangle";

const infos = [
  {
    description: `Aziz Gharbi, 
        Software developer
        I'am Passionate about learning new technologies,
        Open source , Lua, Rust, (Typescript/JavaScript) and Linux Lover.`,
    note: "C3",
  },
  {
    description: null,
    note: "C4",
  },
  {
    description: null,
    note: "C5",
  },
];

const MusicxBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {infos.map(({ description, note }) => (
        <Rectangle key={note} description={description} note={note} />
      ))}
    </div>
  );
};

export default MusicxBox;
