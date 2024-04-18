import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import bcrypt from "bcryptjs"

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-color: white;
    padding: 5px;
    margin: 5px;
    border: solid;
    border-radius: 10px;
    width: 400px;
    height:auto;
    box-shadow: 2px 2px 10px 5px #000040;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:20px;
`
const LoginInfo = styled.label`
    padding-bottom:20px;
`
const HeaderContainer = styled.div`
    display:flex;
    justify-content: center;
    width:100vw;
    background-image: linear-gradient(#000027,#4f0131,#000027);    
    border-bottom: solid;
    border-color: black;
    border-width: 10px;
    padding:10px;
`
const HeaderText = styled.h1`
    font-size: 35px;
  background: -webkit-linear-gradient(#fbd127,#fb0f00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export default function CreateAccount() {
    const [success, setSuccess] = useState(true)
    const [available, setAvailable] = useState(true)
    const navigate = useNavigate();

    const handleSubmit = () => {
        let firstname = document.getElementById('firstname').value
        let lastname = document.getElementById('lastname').value
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

        var salt = bcrypt.genSaltSync(10);
        var hashPW = bcrypt.hashSync(password, salt);

        if (firstname && lastname && username && password) {
            fetch(`http://localhost:8080/users`)
                .then(res => res.json())
                .then(data => {
                    if (data.find(user => user.Username === username)) {
                        setAvailable(false)
                    } else {
                        let newUser = {
                            "First Name": firstname,
                            "Last Name": lastname,
                            "Username": username,
                            "Password": hashPW,
                        }
                        fetch(`http://localhost:8080/createAccount`, {
                            method: "POST",
                            body: JSON.stringify(newUser),
                            headers: {
                                "Content-Type": "application/json",
                            }
                        })
                            .then(() => {
                                console.log("User Success")
                                navigate('/login')
                            })

                    }
                })
        } else {
            setSuccess(false)
        }
    }

    return (
        <>
            <HeaderContainer>
                <HeaderText>Create Account</HeaderText>
            </HeaderContainer>
            <LoginContainer>
                <Form>
                    <LoginInfo>
                        First Name:
                        <input type="text" name="firstname" id="firstname" />
                    </LoginInfo>
                    <LoginInfo>
                        Last Name:
                        <input type="text" name="lastname" id="lastname" />
                    </LoginInfo>
                    <LoginInfo>
                        Username:
                        <input type="text" name="username" id="username" />
                    </LoginInfo>
                    <LoginInfo>
                        Password:
                        <input type="password" name="password" id="password" />
                    </LoginInfo>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    {success ? <></> : <h4>Please Fill Out All Categories</h4>}
                    {available ? <></> : <h4>Username is Already Being Used</h4>}
                </Form>
            </LoginContainer>
        </>



    )
}