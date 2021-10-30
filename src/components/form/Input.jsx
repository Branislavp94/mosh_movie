import React, { Component } from "react";

export default class Input extends Component {
   render() {
      const { label, type, name, handleChange, value, errors } = this.props;
      return (
         <div>
            <div className="mb-3">
               <label htmlFor="username" className="form-label">
                  {label}
               </label>
               <input
                  type={type}
                  className="form-control"
                  id="username"
                  name={name}
                  aria-describedby="emailHelp"
                  value={value}
                  onChange={handleChange}
               />
            </div>
            {errors && <div className="alert alert-danger">{errors}</div>}
         </div>
      );
   }
}
