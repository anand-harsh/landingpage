import React from 'react';
import './Contact.css';
import image from './image.png';
function Contact() {
  return (
    <>
    <h1>
        Know the creators...
    </h1>
    <div className='flexx'>
      <div className="card mx-4" styles="width: 18rem;">
        <img src={image} className="card-img-top" alt="person" height="200px" />
        <div className="card-body">
          <h5 className="card-title">Nithin Pranav</h5>
          <a href="/" className="btn btn-primary">Go Somewhere</a>
        </div>
      </div>
      <div className="card mx-4" styles="width: 18rem;">
        <img src={image} className="card-img-top" alt="person" height="200px" />
        <div className="card-body">
          <h5 className="card-title">Subaraksha RT</h5>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card mx-4" styles="width: 18rem;">
        <img src={image} className="card-img-top" alt="person" height="200px" />
        <div className="card-body">
          <h5 className="card-title">Vishal Ganapathy</h5>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card mx-4" styles="width: 18rem;">
        <img src={image} className="card-img-top" alt="person" height="200px" />
        <div className="card-body">
          <h5 className="card-title">Geedhavarshini Balaji</h5>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card mx-4" styles="width: 18rem;">
        <img src={image} className="card-img-top" alt="person" height="200px" />
        <div className="card-body">
          <h5 className="card-title">Athish MJ</h5>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    </>
  )
}
export default Contact;