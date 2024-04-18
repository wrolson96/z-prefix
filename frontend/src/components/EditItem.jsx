import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import cookie from "cookie"
import { useParams } from "react-router-dom"

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
    const [selectedItem, setSelectedItem] = useState({})
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/item/${id}`)
            .then(res => res.json())
            .then(data => setSelectedItem(data[0]))
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSelectedItem({
            ...selectedItem,
            [name]: value,
        });
    }

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
            fetch(`http://localhost:8080/editItem/${id}`, {
                method: "PATCH",
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
                <HeaderText>Edit Item</HeaderText>
            </HeaderContainer>
            <DataContainer>
                <Form>
                    <ItemInfo>
                        Item Name:
                        <input type="text" name="Item Name" id="itemName" value={selectedItem['Item Name'] || ''} onChange={handleChange} />
                    </ItemInfo>
                    <ItemInfo>
                        Description:
                        <input type="text" name="Description" id="description" value={selectedItem.Description || ''} onChange={handleChange} />
                    </ItemInfo>
                    <ItemInfo>
                        Quantity:
                        <input type="number" name="Quantity" id="quantity" value={selectedItem.Quantity || ''} onChange={handleChange} />
                    </ItemInfo>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                    {success ? <></> : <h4>Data Invalid</h4>}
                </Form>
            </DataContainer>
        </>

    )
}