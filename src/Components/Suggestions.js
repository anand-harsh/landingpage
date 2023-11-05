import React from 'react';
import './Suggestions.css';
function Suggestions() {
  return (
    <>
    <h1>
        Have any Suggestions, Let us know...
    </h1>
    <div className="form-floating my-2">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label forHtml="floatingInput">Email Address</label>
    </div>
    <div className="form-floating my-2">
        <input type="name" className="form-control" id="floatingName" placeholder="Name"/>
        <label forHtml="floatingName">Name</label>
    </div>
    <div className="form-floating my-2">
        <input type="phone" className="form-control" id="floatingPhone" placeholder="Phone Number"/>
        <label forHtml="floatingPhone">Phone Number</label>
    </div>
    <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label forHtml="floatingTextarea">Comments</label>
    </div>
    </>
  )
}
export default Suggestions;
