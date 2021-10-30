import React, { Component } from "react";
import Input from "./form/Input";
import Joi from "joi-browser";

export default class Login extends Component {
   state = {
      account: {
         username: "",
         password: "",
      },
      errors: {
         username: "",
         password: "",
      },
   };
   schema = {
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
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

   validateInputProperty = ({ name, value }) => {
      const obj = { [name]: value };
      const schema = { [name]: this.schema[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
   };

   handleSubmit = (e) => {
      e.preventDefault();

      const validate = this.validate();
      this.setState({ errors: validate || {} });

      if (validate) {
         return;
      }
      console.log("Validated user");
   };

   handleChange = (e) => {
      const errors = { ...this.state.errors };
      const errorMessage = this.validateInputProperty(e.target);

      errorMessage ? (errors[e.target.name] = errorMessage) : delete errors[e.target.name];

      const account = { ...this.state.account };
      account[e.target.name] = e.target.value;

      this.setState({ account, errors });
   };

   render() {
      const { username, password } = this.state.account;
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <Input
                  label="Username"
                  type="text"
                  name="username"
                  value={username}
                  handleChange={this.handleChange}
                  errors={this.state.errors.username}
               />
               <Input
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  handleChange={this.handleChange}
                  errors={this.state.errors.password}
               />
               <button type="submit" className="btn btn-primary" disabled={this.validate()}>
                  Submit
               </button>
            </form>
         </div>
      );
   }
}
