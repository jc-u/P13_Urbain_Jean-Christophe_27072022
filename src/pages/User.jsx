import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Account from "../components/Account";
import UserHeader from "../components/UserHeader";

const firstNameUser = "Username";
const lastNameUser = "Lastname"

const User = () => {
  return (
    <div className="user-page">
      <Header firstNameUser={firstNameUser} />
      <div className="main">
        <UserHeader firstNameUser={firstNameUser} lastNameUser={lastNameUser} />
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescription="Available Balance" />
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescription="Current Balance" />
      </div>
      <Footer />
    </div>
  );
};

export default User;