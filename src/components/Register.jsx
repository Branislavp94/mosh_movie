import React, { Component } from "react";
import Input from "./form/Input";
import Joi from "joi-browser";

export default class Register extends Component {
   state = {
      account: {
         email: "",
         password: "",
         name: "",
      },
      errors: {
         email: "",
         password: "",
         name: "",
      },
   };

   schema = {
      email: Joi.string().required().email().label("Email"),
      password: Joi.string().min(5).required().label("Password"),
      name: Joi.string().required().label("Name"),
   };

   validate = () => {
      const validate = Joi.validate(this.state.account, this.schema, {
         abortEarly: false,
      });
      if (!validate.error) {
         return null;
      }
      const errors = {};

      validate.error.details.map((item) => (errors[item.path[0]] = item.message));
      return errors;
   };

   validateProperty = ({ name, value }) => {
      const obj = { [name]: value };
      const schema = { [name]: this.schema[name] };
      const validate = Joi.validate(obj, schema);

      return validate.error ? validate.error.details[0].message : null;
   };

   handleChange = (e) => {
      const errors = { ...this.state.errors };
      const errorMessage = this.validateProperty(e.target);

      errorMessage ? (errors[e.target.name] = errorMessage) : delete errors[e.target.name];

      const account = { ...this.state.account };
      account[e.target.name] = e.target.value;
      this.setState({ account, errors });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const validate = this.validate();
      this.setState({ errors: validate || {} });

      if (validate) {
         return;
      }

      console.log("cao");
   };

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <Input
                  label="email"
                  type="email"
                  name="email"
                  value={this.state.account.email}
                  handleChange={this.handleChange}
                  errors={this.state.errors.email}
               />
               <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={this.state.account.password}
                  handleChange={this.handleChange}
                  errors={this.state.errors.password}
               />
               <Input
                  label="Name"
                  typ="text"
                  name="name"
                  value={this.state.account.name}
                  handleChange={this.handleChange}
                  errors={this.state.errors.name}
               />

               <button type="submit" className="btn btn-primary" disabled="">
                  Submit
               </button>
            </form>
         </div>
      );
   }
}
