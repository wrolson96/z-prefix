import React, { useEffect, useState } from "react"
import styled from "styled-components";
import { useParams } from "react-router-dom"

const ItemContainer = styled.div`
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
    const { id } = useParams()
    const [selectedItem, setSelectedItem] = useState()

    useEffect(() => {
        fetch(`http://localhost:8080/item/${id}`)
            .then(res => res.json())
            .then(data => setSelectedItem(data[0]))
    }, [])



    return (
        <>
            <HeaderContainer>
                <HeaderText>{selectedItem['Item Name']}</HeaderText>
            </HeaderContainer>
            <ItemContainer>
                <TextContainer>
                    {selectedItem ?
                        <>
                            <UserInfo>Description: {selectedItem.Description} </UserInfo>
                        </> : <></>

                    }

                </TextContainer>
            </ItemContainer>
        </>

    )
}