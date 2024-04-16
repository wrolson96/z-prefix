import React, { useState } from 'react';
import styled from "styled-components";
import { Navigate, useNavigate } from 'react-router-dom'

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
    const [success, setSuccess] = useState(true)
    const [available, setAvailable] = useState(true)
    const navigate = useNavigate();

    const handleSubmit = () => {
        let firstname = document.getElementById('firstname').value
        let lastname = document.getElementById('lastname').value
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

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
                            "Password": password,
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
        <LoginContainer>
            <Form>
                <TextHeader>Create Account</TextHeader>
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


    )
}