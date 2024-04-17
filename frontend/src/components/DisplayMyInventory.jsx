import React from 'react';
import { useEffect, useState } from "react";
import styled from "styled-components";
import cookie from 'cookie'
import { useNavigate } from 'react-router-dom';


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
    margin-top:15px;
    border: solid;
    border-radius: 10px;
    width: 300px;
`
const Button = styled.button`
    margin:5px;
`

export default function DisplayMyInventory() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/inventory/${cookie.parse(document.cookie).id}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleDelete = (event) => {
        let id = event.target.id
        fetch(`http://localhost:8080/deleteItem/${id}`,
            { method: "DELETE" }
        )
        setItems([])
    }

    return (
        <>
            <HeaderContainer>
                <h1>{cookie.parse(document.cookie).username}'s Inventory</h1>
            </HeaderContainer>
            <ItemContainer>
                {items.map((item) => {
                    return (
                        <ItemBox key={item.id}>
                            <div key={item.id} id={item.id} onClick={() => navigate(`/display/${item.id}`)}>
                                <p>Item: {item["Item Name"]}</p>
                                {(item["Description"].length < 100) ?
                                    <>
                                        <p>Description: {item["Description"]}</p>
                                    </>
                                    :
                                    <>
                                        <p>Description: {item["Description"].slice(0, 100) + "..."}</p>
                                    </>
                                }
                                <p>Quantity in Stock: {item["Quantity"]}</p>
                            </div>
                            <Button type="button" id={item.id} onClick={() => navigate(`/editItem/${item.id}`)}>Edit</Button>
                            <Button type="button" id={item.id} onClick={(event) => handleDelete(event)}>Delete</Button>
                        </ItemBox>

                    )
                })}
            </ItemContainer>
        </>



    )
}