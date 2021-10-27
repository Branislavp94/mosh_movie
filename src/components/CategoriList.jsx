import React, { Component } from "react";

export default class CategoriList extends Component {
   render() {
      const { genre, selectedItem } = this.props;
      return (
         <div>
            <ul className="list-group">
               {genre.map((item) => (
                  <li
                     className={
                        item === selectedItem ? "list-group-item active" : "list-group-item"
                     }
                     key={item.id}
                     onClick={() => this.props.handleGenreSelect(item)}
                  >
                     {item.name}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}
