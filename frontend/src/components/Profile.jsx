import React from "react"
import styled from "styled-components";
import cookie from "cookie";

const ProfileContainer = styled.div`
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
const TextContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:20px;
`
const UserInfo = styled.p`
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

    return (
        <>
            <HeaderContainer>
                <HeaderText>Create New Item</HeaderText>
            </HeaderContainer>
            <ProfileContainer>
                <TextContainer>
                    <UserInfo>Username: {cookie.parse(document.cookie).username}</UserInfo>
                    <UserInfo>Name: {cookie.parse(document.cookie).firstName} {cookie.parse(document.cookie).lastName}</UserInfo>
                </TextContainer>
            </ProfileContainer>
        </>

    )
}