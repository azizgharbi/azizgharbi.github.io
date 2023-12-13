"use server";

import Menu from "./../components/Menu";
import Footer from "./../components/Footer";
import { GithubBox } from "../components/github";
import MusicxBox from "../components/MusicBox";


 
export const metadata = {
  title: 'aziz gharbi',
  description: 'software developer extraordinaire aziz gharbi',
}

export default function Home() {
  return (
    <div>
      <Menu />
      <MusicxBox />
      <div className="game_text">
        <p>
          Don&apos;t tell anyone, But finding the Triforce box will grant you
          +25 charisma points in real life.
        </p>
        <p>
          <span className="hint_game">Hint: </span>Only the power of the click
          can unlock the secrets of the boxes. Choose wisely, hero
        </p>
      </div>
      <GithubBox />
      <Footer />
    </div>
  );
}
