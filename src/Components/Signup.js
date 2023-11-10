import React,{useState}  from 'react'
import logo from './logo.jpg';
import { Layout } from '../App';
import {toast} from 'react-toastify';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = () =>
{
    const[email,setEmail] = useState("");
    const[phonenumber,setPhonenumber] = useState("");
    const[password,setPassword] = useState("");
    const[repassword,setRepassword] = useState("");
    const navigate= useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res= await axios.post("${process.env.REACT_APP_API}/api/v1/signup`,{email,phonenumber,password,repassword}");
            if(res.data.success)
            {
                toast.success(res.data.message);
                navigate("/Login");
            }
            else
            {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <Layout title={"BidHUB - Sign Up"}></Layout>
            <div className="d-flex justify-content-center align-items-center rounded-3 text-black">
                <div className="d-flex align-items-center gradient-custom-2 w-50">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">Welcome to BidHub, Your Premier Online Auction Platform!</h4>
                        <p className="small mb-0">At BidHub, our mission is to provide a seamless and enjoyable auction experience for both buyers and sellers. We are committed to creating a thriving marketplace where individuals and businesses can connect, trade, and discover unique treasures.</p>
                    </div>
                </div>
                <div className="mainpage mx-5 w-[100]">
                    <div className="text-center my-5">
                        <img className="w-50" src={logo} alt="React" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example11"> Email</label>
                            <input type="email" id="form2Example11" className="form-control" placeholder="email address" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example11">Phone Number</label>
                            <input type="text" id="form2Example11" className="form-control" placeholder="Phone Number" value={phonenumber} onChange={(e)=> setPhonenumber(e.target.value)} required/>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example22">Password</label>
                            <input type="password" id="form2Example22" className="form-control" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example22">Re-enter Password</label>
                            <input type="password" id="form2Example22" className="form-control" placeholder="Re-enter Password" value={repassword} onChange={(e)=> setRepassword(e.target.value)} required/>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                            <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mx-3" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Signup;