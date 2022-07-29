import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Form";

const SignIn = () => {
  return (
    <div className="user-page">
      <Header />
      <div className="main">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;