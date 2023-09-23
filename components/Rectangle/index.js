import { useCallback, useState } from "react";
import * as Tone from "tone";
import Box from "./../Box";
import Style from "./style";

export default function Rectangle({ description, note }) {
  const [hover, setHover] = useState(true);
  const [clicked, setClicked] = useState(false);

  const releaseTone = useCallback(() => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttack(note, now);
    synth.triggerRelease(now + 0.2);
  }, [note]);

  const handleRelease = useCallback(() => {
    releaseTone();
    setClicked(!clicked);
  }, [releaseTone, clicked]);

  const handleMouseOut = useCallback(() => {
    setHover(true);
  }, []);

  const handleMoousOver = useCallback(() => {
    setHover(false);
  }, []);

  return (
    <div>
      <div
        style={Style.shape(clicked, hover)}
        onClick={handleRelease}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMoousOver}
      ></div>
      <Box show={clicked && description} text={description} />
    </div>
  );
}
