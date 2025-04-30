import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, author);
    dispatch({
      type: "ADD_BOOK",
      book: {
        title: title,
        author: author,
      },
    });

    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title of the Book:"
        type="text"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        placeholder="Name of the Author:"
        type="text"
        required
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default NewBookForm;
