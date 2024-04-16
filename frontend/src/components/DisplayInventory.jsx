import React from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";

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

export default function DisplayBooks() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/inventory")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <>
            <HeaderContainer>
                <h1>Current Inventory</h1>
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