import React, { Component } from "react";

export default class Like extends Component {
   render() {
      return (
         <div>
            {this.props.selected ? (
               <i className="fas fa-heart" onClick={this.props.handleLike}></i>
            ) : (
               <i className="far fa-heart" onClick={this.props.handleLike}></i>
            )}
         </div>
      );
   }
}
