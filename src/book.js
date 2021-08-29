import React from "react";

const book = ({ image, title, author } = {}) => {
  // console.log(props);

  // const { image, title, author } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Boop");
  };

  const complexHandler = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="I love you to the moon and back" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
      <br></br>
      <button type="button" onClick={() => complexHandler(author)}>
        More complex example
      </button>
    </article>
  );
};

export default book;
