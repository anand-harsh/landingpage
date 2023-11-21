import React from "react";
import { useAuth } from "../context/auth";
import Layout from "../Components/Layout/Layout";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"All Products"}>
      <div>
          <h1>HomePage</h1>
          <pre>{JSON.stringify(auth, null, 4)}</pre>
      </div>
    </Layout>
  );
};
export default Home;