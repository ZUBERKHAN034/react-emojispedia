import React from "react";

function Card({ emojis }) {
  return (
    <dl className="dictionary">
      {emojis.map((emoji) => {
        return (
          <div className="term" key={emoji.id}>
            <dt>
              <span className="emoji" role="img" aria-label={emoji.name}>
                {emoji.emoji}
              </span>
              <span>{emoji.name}</span>
            </dt>
            <dd>{emoji.meaning}</dd>
          </div>
        );
      })}
    </dl>
  );
}

export default Card;
