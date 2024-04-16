import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import cookie from "cookie"
// import { UserContext } from "./UserContext.js";

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 5px;
    margin: 5px;
    border: solid;
    border-radius: 10px;
    width: 500px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:20px;
`
const TextHeader = styled.h1`
    padding-bottom:20px;
    margin:0;
`
const LoginInfo = styled.label`
    padding-bottom:20px;
`

export default function CreateAccount() {
    const [accountExists, setAccountExists] = useState(true)
    // const { userProfile, setUserProfile, logedIn, setLogedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        fetch(`http://localhost:8080/userVerify/${username}/${password}`)
            .then(res => res.json())
            .then(data => {
                console.log("this is the data:", data)
                if (data) {
                    // setLogedIn(true)
                    // setUserProfile(data[0])
                    document.cookie = "logedIn=true"
                    document.cookie = `id=${data[0].id}`
                    document.cookie = `username=${data[0].Username}`
                    document.cookie = `firstName=${data[0]['First Name']}`
                    document.cookie = `lastName=${data[0]['Last Name']}`
                    navigate(`/myinventory/${data[0].id}`)
                } else {
                    setAccountExists(false)
                }
            })

    }

    return (
        <LoginContainer>
            <Form>
                <TextHeader>Login</TextHeader>
                <LoginInfo>
                    Username:
                    <input type="text" name="username" id="username" />
                </LoginInfo>
                <LoginInfo>
                    Password:
                    <input type="password" name="password" id="password" />
                </LoginInfo>
                <button type="button" onClick={handleSubmit}>Login</button>
                {accountExists ? <></> : <h4>That Account Does Not Exist</h4>}
            </Form>
        </LoginContainer>


    )
}