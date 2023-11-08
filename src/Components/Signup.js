import React from 'react'
import logo from './logo.jpg';
function Signup() {
  return (
    <>
        <div className=" d-flex justify-content-center align-items-center rounded-3 text-black">
            <div className="d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Welcome to BidHub, Your Premier Online Auction Platform!</h4>
                    <p className="small mb-0">At BidHub, our mission is to provide a seamless and enjoyable auction experience for both buyers and sellers. We are committed to creating a thriving marketplace where individuals and businesses can connect, trade, and discover unique treasures.</p>
                </div>
            </div>
            <div className="mainpage mx-5">
                <div className="text-center my-5">
                    <img className="img" src={logo} alt="React Image"/>
                </div>
                <form>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11"> Username</label>
                        <input type="email" id="form2Example11" className="form-control" placeholder="Phone number or email address" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                        <input type="password" id="form2Example22" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">Re-enter Password</label>
                        <input type="password" id="form2Example22" className="form-control" placeholder="Re-enter Password"/>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mx-3" type="button">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
export default Signup;

