import Rectangle from "./../components/Rectangle";
import Menu from "./../components/Menu";
import Footer from "./../components/Footer";

export default function Home() {
  const infos = [
    {
      description: `Aziz Gharbi, 
        Software developer
        I'am Passionate about learning new technologies,
        Open source , Lua, Rust, (Typescript/JavaScript), Linux Lover.`,
    },
    {
      description: null,
    },
    {
      description: null,
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
        {infos.map(({ description }, index) => (
          <Rectangle key={index} description={description} />
        ))}
      </div>
      <div className="game_text">
        <p>Guess where i am ?</p>
      </div>
      <Footer />
    </div>
  );
}
