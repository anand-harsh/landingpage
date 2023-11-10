import React, {useState} from 'react';
import logo from './logo.jpg';
import './Login.css';
import { Layout } from '../App';


const Login= () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <Layout title={"BidHUB - Login"}></Layout>
            <div className=" d-flex justify-content-center align-items-center  rounded-3 text-black">
                <div className=" p-md-5 mx-md-4">
                    <div className="text-center my-5">
                        <img src={logo} alt="React Image" width={200} />
                    </div>
                    <form>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example11"> Username</label>
                            <input type="email" id="form2Example11" className="form-control" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example22">Password</label>
                            <input type="password" id="form2Example22" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                            <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mx-3" type="submit">Log in</button>
                            <a className="text-muted" href="#!">Forgot password?</a>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="acc mx-2">Don't have an account?</p> 
                            <button type="button mx-3" className="btn btn-outline-danger" id="createnew"> Create new</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
