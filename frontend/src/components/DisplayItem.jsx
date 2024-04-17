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
const TextHeader = styled.h1`
    padding-bottom:20px;
    margin:0;
`
const UserInfo = styled.p`
    padding-bottom:20px;
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
        <ItemContainer>
            <TextContainer>
                {selectedItem ?
                    <>
                        <TextHeader>{selectedItem['Item Name']}</TextHeader>
                        <UserInfo>Description: {selectedItem.Description} </UserInfo>
                    </> : <></>

                }

            </TextContainer>
        </ItemContainer>
    )
}