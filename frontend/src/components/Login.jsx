import React, { useContext } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { UserContext } from "./UserContext.js";

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
    // const { setUserProfile } = useContext(UserContext);

    // const navigate = useNavigate();

    const handleSubmit = () => {
        // fetch(`http://localhost:8080/creataccount/${firstname}/${lastname}/${username}/${password}`)
        //create user post
        // navigate(`/myinventory/${id}`)
    }

    return (
        <LoginContainer>
            <Form>
                <TextHeader>Login</TextHeader>
                <LoginInfo>
                    Username:
                    <input type="text" name="username" />
                </LoginInfo>
                <LoginInfo>
                    Password:
                    <input type="text" name="username" />
                </LoginInfo>
                <input type="Submit" onClick={handleSubmit} />
            </Form>
        </LoginContainer>


    )
}