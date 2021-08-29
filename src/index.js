import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//named export
import { books } from "./books";

import SpecificBook from "./book";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { image, title, author } = book;

        return <SpecificBook key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
