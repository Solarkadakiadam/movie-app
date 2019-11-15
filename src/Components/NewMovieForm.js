import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";

//queries
import {
  getDirectorsQuery,
  newMovieMutation,
  getMoviesQuery
} from "../queries/queries";

class NewMovieForm extends Component {
  state = {
    title: "",
    description: "",
    year: null,
    directorId: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Mutation mutation={newMovieMutation}>
        {(addMovie, { loading, error }) => (
          <div className="container" data-state="New Movie">
            <div className="device" data-view="list">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  addMovie({
                    variables: {
                      title: this.state.title,
                      description: this.state.description,
                      year: parseInt(this.state.year, 10),
                      directorId: this.state.directorId
                    },
                    refetchQueries: [
                      {
                        query: getMoviesQuery
                      }
                    ]
                  });
                }}
              >
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={this.onChange}
                  />
                </div>
                <div>
                  <label>Description</label>
                  <textarea
                    name="description"
                    placeholder="Description"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label>Year</label>
                  <input
                    type="text"
                    name="year"
                    placeholder="Year"
                    onChange={this.onChange}
                  />
                </div>

                <div>
                  <label>Director</label>
                  <select name="directorId" onChange={this.onChange}>
                    <option disabled={true}> Choose Director</option>
                    <Query query={getDirectorsQuery}>
                      {({ loading, error, data }) => {
                        if (loading)
                          return <option disabled={true}>Loading...</option>;
                        if (error)
                          return <option disabled={true}>Error!!!!!</option>;

                        return data.directors.map(({ id, name }) => (
                          <option key={id} value={id}>
                            {name}
                          </option>
                        ));
                      }}
                    </Query>
                  </select>
                </div>
                <div>
                  <button type="submit">Submit</button>
                </div>
              </form>
              {loading && <div>Loading....</div>}
              {error && <div>Error!</div>}
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default NewMovieForm;
