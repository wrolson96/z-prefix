import React from "react"
import styled from "styled-components";
import cookie from "cookie";

const ProfileContainer = styled.div`
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
const TextContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:20px;
`
const TextHeader = styled.h1`
    padding-bottom:20px;
    margin:0;
`
const UserInfo = styled.p`
    padding-bottom:20px;
`

export default function CreateAccount() {

    return (
        <ProfileContainer>
            <TextContainer>
                <TextHeader>Profile</TextHeader>
                <UserInfo>Username: {cookie.parse(document.cookie).username}</UserInfo>
                <UserInfo>Name: {cookie.parse(document.cookie).firstName} {cookie.parse(document.cookie).lastName}</UserInfo>
            </TextContainer>
        </ProfileContainer>
    )
}