import React from 'react';
import Item from "../Components/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useEffect,useState} from "react";


interface ItemType {
    id: string | number;
    key: string | number;
    type: string;
    color: string;
    size: string | number;
    brand: string;
}

function ClothesItems(){
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <Container>
            <Row>
                {
                    data && data.length>0 && data.map(
                        (ItemData:ItemType,i)=>
                            <Col key={i}>
                                <Item key={i} id={ItemData.id}  type={ItemData.type} brand={ItemData.brand} size={ItemData.size} color={ItemData.color} />
                            </Col>
                    )
                }
            </Row>
        </Container>
);

}

export default ClothesItems;
