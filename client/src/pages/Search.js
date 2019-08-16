import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  // when user types in book search, this changes
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // use google books API to search for query
    API.searchGoogleBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items, error: "" });
        console.log(res.data.items);
        
      })
      .catch(err => this.setState({ error: err.message }));
  };

  // THIS DOESNT WORK, NEED TO FIX
  // handleSaveItem = (bookJSON) => {
  //   if (bookJSON.title && bookJSON.authors) {
  //     API.saveBook(bookJSON)
  //       .then(res => console.log("Here is the book you are saving:" + res.data))
  //       .catch(err => console.log(err));
  //   }
  // };

  saveItem = (itemJSON) => {
    if (itemJSON.title && itemJSON.authors) {
      API.saveBook(itemJSON)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
    console.log(itemJSON);
  };

  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
          <h1>React Google Books</h1>
          <h2>Search for and save your favorite books here!</h2>
        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search by book title</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
           <SearchResults 
          handleSaveItem = {this.saveItem}
          results={this.state.results}/>
        </Container>
      </div>
    );
  }
}

export default Search;
