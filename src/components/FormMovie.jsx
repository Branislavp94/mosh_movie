import React, { Component } from "react";
export default class FormMovie extends Component {
   handleSave = () => {
      this.props.history.push("/movies");
   };
   render() {
      return (
         <div>
            <div className="d-flex align-items-center m-2">
               <h1>Movie</h1>
               <span className="m-2" style={{ color: "orange", fontSize: 30 }}>
                  {this.props.match.params.id}
               </span>
            </div>
            <button className="btn btn-primary" style={{ fontSize: 20 }} onClick={this.handleSave}>
               Save
            </button>
         </div>
      );
   }
}
