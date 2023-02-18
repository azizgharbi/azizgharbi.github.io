import Rectangle from "./../components/Rectangle";
import Menu from "./../components/Menu";
import Footer from "./../components/Footer";
import { GithubBox } from "../components/github";

export default function Home() {
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
  return (
    <div>
      <Menu />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {infos.map(({ description, note }, index) => (
          <Rectangle key={index} description={description} note={note} />
        ))}
      </div>
      <div className="game_text">
        <p>
          {`Don't tell anyone, But finding the Triforce box will
          grant you +25 charisma points in real life. Trust me, I'm a programmer;`}
        </p>
      </div>
      <GithubBox />
      <Footer />
    </div>
  );
}
