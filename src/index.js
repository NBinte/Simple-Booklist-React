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
      "https://images-na.ssl-images-amazon.com/images/I/81WUAoL-wFL._AC_UL200_SR200,200_.jpg",
    title: "Lord of the Flies",
    author: "William Golding",
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
  return (
    <article className="book">
      <img src={image} alt="I love you to the moon and back" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
