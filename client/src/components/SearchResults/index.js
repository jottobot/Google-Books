import React from "react";
import "./style.css";

function bookJSON(result) {
  return {title: result.volumeInfo.title,
  authors: result.volumeInfo.authors[0],
  description: result.volumeInfo.description,
  image: result.volumeInfo.imageLinks.thumbnail,
  link: result.volumeInfo.previewLink
}
}; 

function searchResults(props) {
  return (
    <ul className="list-group search-results">
    {checkResults(props.results)&&(props.results.map(result => (bookInfo(result)) && (
      <li key={result.id} className="list-group-item">
        <h1 className="booktitle">{result.volumeInfo.title}</h1>
        <a type="view" href={result.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-submit btn-view">
          View Book
        </a>
        <button type="save" onClick={() => props.handleSaveItem(bookJSON(result))} className="btn btn-submit btn-save">
          Save Book
        </button>
        <p className="author">Written By: {result.volumeInfo.authors[0]}</p>
        <img className = "inline inline-image" src={result.volumeInfo.imageLinks.thumbnail} alt="Book"/>
        <p className = "inline-description inline">{result.volumeInfo.description}</p>
      </li>

    )))}
  </ul>
  );
}

function bookInfo(result) {
  return (!!result && !!result.volumeInfo && !!result.volumeInfo.imageLinks && !!result.volumeInfo.description && !!result.volumeInfo.authors);
};

function checkResults(results){
  return(!!results); 
}

export default searchResults;
