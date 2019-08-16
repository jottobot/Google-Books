import React from "react";
import "./style.css";

function SavedResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <h1 className="booktitle">{result.volumeInfo.title}</h1>
          <a type="view" href={result.previewLink} target="_blank"  rel="noopener noreferrer" className="btn btn-submit btn-view">
            View Book
          </a>
          <button type="delete" onClick={() => props.DeleteItem(result._id)} className="btn btn-submit btn-delete">
            Delete Book
          </button>
          <p className="author">Written By: {result.volumeInfo.authors[0]}</p>
          <img className="inline inline-image" src={result.volumeInfo.imageLinks.thumbnail} alt="Book" />
          <p className="inline-description inline">{result.volumeInfo.description}</p>
        </li>

      ))}
    </ul>
  );
};

export default SavedResults;