import DisplayInventory from "./components/DisplayInventory";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import DisplayMyInventory from "./components/DisplayMyInventory";
import CreateNewItem from "./components/CreateNewItem";
import Profile from "./components/Profile";
import EditItem from "./components/EditItem";
import DisplayItem from "./components/DisplayItem";

import "./App.css";
import logo from "./media/logo3.png";
import background from "./media/background.png";
import headerBackground from "./media/background2.png";

import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import cookie from "cookie";

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
  font-size: 17px;
  &:hover {
    color: black;
    background-color: #ddd;
    cursor: pointer;
    text-decoration: none;
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
  border: solid;
  border-color: #ab0140;
  box-shadow: 2px 2px 50px 30px black;
  margin: 30px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  const navigate = useNavigate();

  const Logout = () => {
    document.cookie = "loggedIn=false";
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
        {cookie.parse(document.cookie).loggedIn === "true" ? (
          <>
            <Link to={`/myInventory/${cookie.parse(document.cookie).id}`}>
              <NavbarLinks className="active">My Inventory</NavbarLinks>
            </Link>
            <Link to="/createNewItem">
              <NavbarLinks className="active">Create New</NavbarLinks>
            </Link>
            <Link to="/profile">
              <NavbarLinks className="active">Profile</NavbarLinks>
            </Link>
            <NavbarLinks type="button" className="active" onClick={Logout}>
              Logout
            </NavbarLinks>
          </>
        ) : (
          <>
            <Link to="/login">
              <NavbarLinks className="active">Login</NavbarLinks>
            </Link>
            <Link to="/createAccount">
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
            {cookie.parse(document.cookie).loggedIn === "true" ? (
              <>
                <Route path="/" element={<DisplayInventory />} />
                <Route path="/display/:id" element={<DisplayItem />} />
                <Route path="/createNewItem" element={<CreateNewItem />} />
                <Route
                  path="/myInventory/:id"
                  element={<DisplayMyInventory />}
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/editItem/:id" element={<EditItem />} />
              </>
            ) : (
              <>
                <Route path="/" element={<DisplayInventory />} />
                <Route path="/display/:id" element={<DisplayItem />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createAccount" element={<CreateAccount />} />
              </>
            )}
          </Routes>
        </Display>
      </BodyContainer>
    </AppContainer>
  );
}
