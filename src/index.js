import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

const books = [
  {
    id: 1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81MgsNre3IL._AC_UL200_SR200,200_.jpg",
    title: "The Wish",
    author: "Nicholas Sparks",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { image, title, author } = book;

        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ image, title, author } = {}) => {
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

ReactDom.render(<Booklist />, document.getElementById("root"));
