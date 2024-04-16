import DisplayInventory from "./components/DisplayInventory";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import DisplayMyInventory from "./components/DisplayMyInventory";

import "./App.css";
import logo from "./media/logo3.png";
import background from "./media/background.png";
import headerBackground from "./media/background2.png";

import { useState, useContext } from "react";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import cookie from "cookie";
// import { UserContext } from "./components/UserContext.js";

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
  const navigate = useNavigate();

  const Logout = () => {
    document.cookie = "logedIn=false";
    document.cookie = "firstName=null";
    document.cookie = "lastName=null";
    document.cookie = "username=null";
    navigate("/");
  };
  return (
    <AppContainer>
      <NavBar>
        <Link to="/">
          <NavbarLinks className="active">Home</NavbarLinks>
        </Link>
        {/* {console.log(userProfile)} */}
        {/* {console.log(logedIn)} */}
        {console.log(cookie.parse(document.cookie).logedIn)}
        {cookie.parse(document.cookie).logedIn === "true" ? (
          <>
            {/* <Link to={`/myinventory/${userProfile.id}`}>
              <NavbarLinks className="active">My Inventory</NavbarLinks>
            </Link> */}
            <Link to="/profile">
              <NavbarLinks className="active">Profile</NavbarLinks>
            </Link>
            <NavbarLinks type="button" className="active" onClick={Logout}>
              Logout
            </NavbarLinks>
          </>
        ) : (
          <>
            <Link to="/Login">
              <NavbarLinks className="active">Login</NavbarLinks>
            </Link>
            <Link to="/createaccount">
              <NavbarLinks className="active">Create Account</NavbarLinks>
            </Link>
          </>
        )}
      </NavBar>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <BodyContainer>
        <Display>
          <Routes>
            <Route path="/" element={<DisplayInventory />} />
            <Route path="/display/:id" />
            <Route path="/myinventory/:id" element={<DisplayMyInventory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />
          </Routes>
        </Display>
      </BodyContainer>
    </AppContainer>
  );
}
