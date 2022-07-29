import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const user = "User";

const User = () => {
  return (
    <div>
      <Header user={user} />
      <Footer />
    </div>
  );
};

export default User;