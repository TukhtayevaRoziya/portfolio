import React, { useState, useEffect } from "react";

export default function TypingEffect(props) {
  const [typing, setTyping] = useState("");
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < props.text.length) {
      setTimeout(() => {
        setTyping(typing + props.text[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index, props.text, typing]);

  return (
    <div>
      <p>{typing}</p>
    </div>
  );
}
