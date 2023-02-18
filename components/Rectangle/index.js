import { useState } from "react";
import * as Tone from "tone";

import Goku from "./../../public/images/link.gif";
import Style from "./style";

export default function Rectangle({ description, note }) {
  const [hover, setHover] = useState(true);
  const [clicked, setClicked] = useState(false);

  function releaseTone() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttack(note, now);
    synth.triggerRelease(now + 0.2);
  }

  return (
    <div>
      <div
        style={Style.shape(clicked, hover)}
        onClick={() => {
          releaseTone();
          setClicked(!clicked);
        }}
        onMouseOut={() => {
          setHover(true);
        }}
        onMouseOver={() => {
          setHover(false);
        }}
      ></div>

      {clicked && description ? (
        <>
          <img className="rectangle_img" src={Goku.src} width={150} />
          <div className="rectangle_text">
            <p>{description}</p>
          </div>
        </>
      ) : (
        <div className="rectangle_head"></div>
      )}
    </div>
  );
}
