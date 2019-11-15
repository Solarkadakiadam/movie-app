import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//components
import MovieList from "./Components/MovieList";
import NewMovieForm from "./Components/NewMovieForm";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header"></header>
        <MovieList />
        <NewMovieForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
