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
const ItemBox = styled.div`
    background-color: white;
    padding: 5px;
    margin: 5px;
    border: solid;
    border-radius: 10px;
    width: 300px;
    height:auto;
    box-shadow: 2px 2px 10px 5px #000040;
    &:hover{
        background-color:lightgrey;
        cursor:pointer;
      }
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
                <HeaderText>{cookie.parse(document.cookie).username}'s Inventory</HeaderText>
            </HeaderContainer>
            <ItemContainer>
                {items.map((item) => {
                    return (
                        <ItemBox key={item.id}>
                            <div key={item.id} id={item.id} onClick={() => navigate(`/display/${item.id}`)}>
                                <p style={{ "fontWeight": "bold" }}>{item["Item Name"]}</p>
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