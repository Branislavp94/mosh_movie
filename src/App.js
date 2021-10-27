import React, { Component } from "react";
import Moives from "./components/Moives";
import { getGenres } from "./services/fakeGenreService";
import { deleteMovie, getMovies } from "./services/fakeMovieService";

export default class App extends Component {
   state = {
      movies: [],
      genre: [],
   };

   componentDidMount() {
      this.setState({ movies: getMovies() });
      this.setState({ genre: getGenres() });
   }
   handleDelete = (id) => {
      deleteMovie(id);
      this.setState({ movies: getMovies() });
   };
   handlePaginate = (pageNumber) => {
      this.setState({ currentPage: pageNumber });
   };
   render() {
      return (
         <div>
            <Moives
               handleDelete={this.handleDelete}
               handlePaginate={this.handlePaginate}
               allMovies={this.state.movies}
               genre={this.state.genre}
            />
         </div>
      );
   }
}
