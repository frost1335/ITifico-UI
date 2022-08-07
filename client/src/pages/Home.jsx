import React from "react";
import { Articles, Courses, Header } from "../features/Home";
import Layout from "../layouts/Layout";
import "./style.scss";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Articles />
        <Courses />
      </Layout>
    </>
  );
};

export default Home;
