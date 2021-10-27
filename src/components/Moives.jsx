import React, { Component } from "react";
import CategoriList from "./CategoriList";
import Like from "./Like";
import Pagination from "./Pagination";

export default class Moives extends Component {
   state = {
      currentPage: 1,
      pageSize: 4,
   };

   handleLike = (movie) => {
      const toogleMovie = [...this.props.allMovies];
      const index = toogleMovie.indexOf(movie);
      toogleMovie[index].liked = !toogleMovie[index].liked;
      this.setState({ movies: toogleMovie });
   };

   handlePaginate = (pageNumber) => {
      this.setState({ currentPage: pageNumber });
   };

   handleGenreSelect = (genre) => {
      this.setState({ selectedGenre: genre });
   };

   render() {
      // const filtered =
      //    this.state.selectedGenre && this.state.selectedGenre._id
      //       ? this.props.allMovies.filter((m) => m.genre._id === this.state.selectedGenre._id)
      //       : this.props.allMovies;
      //  replace loadash method

      const indexOflastPost = this.state.currentPage * this.state.pageSize;
      const indexOfFirstPage = indexOflastPost - this.state.pageSize;
      const currentPost = this.props.allMovies.slice(indexOfFirstPage, indexOflastPost);

      return (
         <div className="row p-5">
            {this.props.allMovies === 0 ? (
               <h1>No movies in the Database </h1>
            ) : (
               <>
                  <div className="col-2">
                     <CategoriList
                        genre={this.props.genre}
                        handleGenreSelect={this.handleGenreSelect}
                        selectedItem={this.state.selectedGenre}
                     />
                  </div>
                  <div className="container col">
                     <h1>Showing {this.props.allMovies.length} movies</h1>
                     <div>
                        <table className="table">
                           <thead>
                              <tr>
                                 <th>title</th>
                                 <th>genre</th>
                                 <th>number</th>
                                 <th>Rate</th>
                                 <th></th>
                              </tr>
                           </thead>

                           <tbody>
                              {currentPost.map((movie) => (
                                 <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <Like
                                       selected={movie.liked}
                                       handleLike={() => this.handleLike(movie)}
                                    />
                                    <td>
                                       <button
                                          className="btn btn-danger"
                                          onClick={() => this.props.handleDelete(movie._id)}
                                       >
                                          Delete
                                       </button>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                        <Pagination
                           pageSize={this.state.pageSize}
                           totalMovie={this.props.allMovies.length}
                           handlePaginate={this.handlePaginate}
                           currentPage={this.props.currentPage}
                        />
                     </div>
                  </div>
               </>
            )}
         </div>
      );
   }
}
