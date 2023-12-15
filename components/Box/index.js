'use client';
import Goku from './../../public/images/link.gif';
import Image from 'next/image';

const box = function ({ show, text }) {
  return (
    <>
      {show ? (
        <>
          <div className="rectangle_img">
            <Image src={Goku} alt="Goku" width={150} height={150} />
          </div>
          <div className="rectangle_text">
            <p>{text}</p>
          </div>
        </>
      ) : (
        <div className="rectangle_head"></div>
      )}
    </>
  );
};

export default box;
