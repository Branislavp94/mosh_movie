import React from "react";

const FormMovie = ({ match, history }) => {
   const handleSave = () => {
      history.push("/movies");
   };
   return (
      <div>
         <div>
            <div className="d-flex align-items-center m-2">
               <h1>Movie</h1>
               <span className="m-2" style={{ color: "orange", fontSize: 30 }}>
                  {match.params.id}
               </span>
            </div>
            <button className="btn btn-primary" style={{ fontSize: 20 }} onClick={handleSave}>
               Save
            </button>
         </div>
      </div>
   );
};

export default FormMovie;
