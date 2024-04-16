import DisplayInventory from "./components/DisplayInventory";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

import "./App.css";
import logo from "./media/logo3.png";
import background from "./media/background.png";
import headerBackground from "./media/background2.png";

import { useState, useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserContext } from "./components/UserContext.js";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const NavBar = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: row;
`;
const NavbarLinks = styled.p`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    color: black;
    background-color: #ddd;
  }
`;
const Header = styled.header`
  background-color: grey;
  background-image: url(${headerBackground});
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: solid 10px;
`;
const Logo = styled.img`
  height: 300px;
  border-radius: 150px;
  filter: drop-shadow(0px 0px 50px black);
`;
const BodyContainer = styled.div`
  flex: 1;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
`;
const Display = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <Router>
      <AppContainer>
        <NavBar>
          <Link to="/">
            <NavbarLinks className="active">Home</NavbarLinks>
          </Link>
          {/* <Link to={`/myinventory/${id}`}>
            <NavbarLinks class="active">My Inventory</NavbarLinks>
          </Link> */}
          <Link to="/Login">
            <NavbarLinks className="active">Login</NavbarLinks>
          </Link>
          <Link to="/createaccount">
            <NavbarLinks className="active">Create Account</NavbarLinks>
          </Link>
        </NavBar>
        <Header>
          <Logo src={logo} alt="logo" />
        </Header>
        <BodyContainer>
          <Display>
            <Routes>
              <Route path="/" element={<DisplayInventory />} />
              <Route path="/display/:id" />
              <Route path="/myinventory/:id" />
              <Route path="/login" element={<Login />} />
              <Route path="/createaccount" element={<CreateAccount />} />
            </Routes>
          </Display>
        </BodyContainer>
      </AppContainer>
    </Router>
  );
}
