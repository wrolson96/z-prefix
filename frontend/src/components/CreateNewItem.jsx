import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import cookie from "cookie"

const DataContainer = styled.div`
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
const ItemInfo = styled.label`
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
export default function CreateNewItem() {
    const [success, setSuccess] = useState(true)

    const navigate = useNavigate();

    const handleSubmit = () => {
        let itemName = document.getElementById('itemName').value
        let description = document.getElementById('description').value
        let quantity = document.getElementById('quantity').value

        if (itemName && description && quantity) {
            let newItem = {
                "UserId": cookie.parse(document.cookie).id,
                "Item Name": itemName,
                "Description": description,
                "Quantity": quantity,
            }
            fetch(`http://localhost:8080/createItem`, {
                method: "POST",
                body: JSON.stringify(newItem),
                headers: {
                    "Content-Type": "application/json",
                }
            })
                .then(() => {
                    navigate(`/myInventory/${cookie.parse(document.cookie).id}`)
                })
        } else {
            setSuccess(false)
        }
    }

    return (
        <>
            <HeaderContainer>
                <HeaderText>Create New Item</HeaderText>
            </HeaderContainer>
            <DataContainer>
                <Form>
                    <ItemInfo>
                        Item Name:
                        <input type="text" name="itemName" id="itemName" />
                    </ItemInfo>
                    <ItemInfo>
                        Description:
                        <input type="text" name="description" id="description" />
                    </ItemInfo>
                    <ItemInfo>
                        Quantity:
                        <input type="number" name="quantity" id="quantity" />
                    </ItemInfo>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    {success ? <></> : <h4>Please Fill Out All Categories</h4>}
                </Form>
            </DataContainer>
        </>

    )
}