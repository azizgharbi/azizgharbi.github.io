import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let index = 0;
    let t = '';
    const timer = setInterval(() => {
      t = t + text[index];
      setContent(t);
      index++;
      if (index === text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p>
      {content}
      <span className="cursor"></span>
    </p>
  );
};

export default Typewriter;
