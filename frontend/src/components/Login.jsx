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
    const [accountExists, setAccountExists] = useState(true)
    const navigate = useNavigate();

    const handleSubmit = () => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value

        fetch(`http://localhost:8080/password/${username}`)
            .then(res => res.json())
            .then(resPW => {
                if (resPW.length === 0) {
                    var check = false
                } else {
                    check = bcrypt.compareSync(password, resPW[0].Password)
                }
                if (check) {
                    fetch(`http://localhost:8080/userVerify/${username}`)
                        .then(res => res.json())
                        .then(data => {
                            document.cookie = "loggedIn=true"
                            document.cookie = `id=${data[0].id}`
                            document.cookie = `username=${data[0].Username}`
                            document.cookie = `firstName=${data[0]['First Name']}`
                            document.cookie = `lastName=${data[0]['Last Name']}`
                            document.cookie = `profilepic=${data[0]['Image']}`
                            navigate(`/myInventory/${data[0].id}`)
                        })
                } else {
                    setAccountExists(false)
                }
            })
    }

    return (
        <>
            <HeaderContainer>
                <HeaderText>Login</HeaderText>
            </HeaderContainer>
            <LoginContainer>
                <Form>
                    <LoginInfo>
                        Username:
                        <input type="text" name="username" id="username" />
                    </LoginInfo>
                    <LoginInfo>
                        Password:
                        <input type="password" name="password" id="password" />
                    </LoginInfo>
                    <button type="button" onClick={handleSubmit}>Login</button>
                    {accountExists ? <></> : <> <h4>That Username and Password Did Not Work</h4></>}
                </Form>
            </LoginContainer>
        </>
    )
}