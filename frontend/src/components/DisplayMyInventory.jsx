import React from 'react';
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import cookie from 'cookie'
// import { UserContext } from "./UserContext";

const ItemContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
`
const HeaderContainer = styled.div`
    display:flex;
    justify-content: center;
    background-color: white;
    padding: 5px;
    margin: 5px;
    border: solid;
    border-radius: 10px;

`
const ItemBox = styled.div`
    background-color: white;
    padding: 5px;
    margin: 5px;
    border: solid;
    border-radius: 10px;
    width: 300px;
`

export default function DisplayMyInventory() {
    const [items, setItems] = useState([]);
    // const { userProfile } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:8080/inventory/${cookie.parse(document.cookie).id}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <>
            <HeaderContainer>
                <h1>{cookie.parse(document.cookie).firstName}'s Inventory</h1>
            </HeaderContainer>
            <ItemContainer>
                {items.map((item) => {
                    return (
                        <ItemBox key={item.id} id={item.id}>
                            <p>Item: {item["Item Name"]}</p>
                            <p>Description: {item["Description"]}</p>
                            <p>Quantity in Stock: {item["Quantity"]}</p>
                        </ItemBox>
                    )
                })}
            </ItemContainer>
        </>



    )
}