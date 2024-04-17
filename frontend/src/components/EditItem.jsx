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
const TextHeader = styled.h1`
    padding-bottom:20px;
    margin:0;
`
const ItemInfo = styled.label`
    padding-bottom:20px;
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
        <DataContainer>
            <Form>
                <TextHeader>Edit Item</TextHeader>
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
    )
}