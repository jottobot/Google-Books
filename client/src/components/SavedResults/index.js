import React from "react";
import "./style.css";

function savedResults(props) {
  return (
    <ul className="list-group search-results">
      {/* {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <h1 className="booktitle">{result.title}</h1>
          <a type="view" href={result.link} target="_blank" rel="noopener noreferrer" className="btn btn-submit btn-view">
            View Book
          </a>
          <button type="delete" onClick={()=>props.DeleteBook(result._id)} className="btn btn-submit btn-delete">
            Delete Book
          </button>
          <p>Written By: {result.authos}</p>
          <p className = "inline-description inline">{result.description}</p>
        </li>

      ))} */}
    </ul>
  );
};

export default savedResults;
