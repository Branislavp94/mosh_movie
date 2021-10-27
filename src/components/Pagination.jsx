import React, { Component } from "react";

export default class Pagination extends Component {
   render() {
      const { pageSize, totalMovie } = this.props;

      const pageNumber = [];

      for (let i = 1; i <= Math.ceil(totalMovie / pageSize); i++) {
         pageNumber.push(i);
      }

      return (
         <div>
            <nav aria-label="Page navigation example">
               <ul className="pagination">
                  {pageNumber.map((number, index) => (
                     <li className="page-item" key={index}>
                        <a className="page-link" onClick={() => this.props.handlePaginate(number)}>
                           {number}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      );
   }
}
