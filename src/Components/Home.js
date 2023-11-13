import React from "react";
import { useAuth } from "../context/auth";
const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </>
  );
};
export default Home;