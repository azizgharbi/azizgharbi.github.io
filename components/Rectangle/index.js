import { useState } from "react";
import Goku from "./../../public/images/link.gif";
import Style from "./style";
export default function Rectangle({ description }) {
  const [hover, setHover] = useState(true);
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div
        style={Style.shape(clicked, hover)}
        onClick={() => {
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
