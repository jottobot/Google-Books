import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SavedResults from "../components/SavedResults";
import Alert from "../components/Alert";

class Saved extends Component {
  state = {
    savedBooks: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: ""
  };

  //when this component mounts, grab all books that were save to the database 
  componentDidMount() {
    API.getBooksDB()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err))
  }

  //function to remove book by id
  handleDeleteButton = id => {
    API.deleteBook(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
          <h1>React Google Books</h1>
          <h2>Your saved books!</h2>
        </Hero>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Saved books: </h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>

          <SavedResults savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />

        </Container>
      </div>
    );
  }
}

export default Saved;