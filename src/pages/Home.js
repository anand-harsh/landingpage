import React from "react";
import { useAuth } from "../context/auth";
import Layout from "../Components/Layout/Layout";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div>
        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
};
export default Home;