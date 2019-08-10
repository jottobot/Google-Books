import React, { Component } from "react";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import SavedResults from "../components/SavedResults";
import Alert from "../components/Alert";

class Saved extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  // won't run until it's initially run one time 
  componentDidMount() {
    this.getSavedBooks();
  };

  getSavedBooks() {
    API.getBooksDB()
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  }

  // componentDidMount() {
  //   API.getBooksDB()
  //     .then(res => this.setState({ results: res.data }))
  //     .catch(err => console.log(err));
  // };

  // componentDidUpdate() {
  //   API.getBooksDB()
  //     .then(res => this.setState({ results: res.data }))
  //     .catch(err => console.log(err));
  // };

  DeleteBook = (id) => {
    API.deleteBook(id)
      .then(res => {
        this.getSavedBooks(API);
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <Row>
            <Col size="md-12">
              <h1>Saved Books!</h1>
            </Col>
          </Row>

          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SavedResults
            // handleSaveItem = {this.saveItem}
            results={this.state.results}
            DeleteItem={this.DeleteItem} />
          {/* <p>{JSON.stringify(this.state.results)}</p> */}
        </Container>
      </div>
    );
  }
}

export default Saved;