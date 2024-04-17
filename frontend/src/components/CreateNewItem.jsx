import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import cookie from "cookie"

const DataContainer = styled.div`
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
const ItemInfo = styled.label`
    padding-bottom:20px;
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
        <DataContainer>
            <Form>
                <TextHeader>Create Item</TextHeader>
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
    )
}