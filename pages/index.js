"use server";
import Menu from "./../components/Menu";
import Footer from "./../components/Footer";
import { GithubBox } from "../components/github";
import MusicxBox from "../components/MusicBox";

export default function Home() {
  return (
    <div>
      <Menu />
      <MusicxBox />
      <div className="game_text">
        <p>
          {`Don't tell anyone, But finding the Triforce box will grant you +25 charisma points in real life.`}
        </p>
      </div>
      <GithubBox />
      <Footer />
    </div>
  );
}
