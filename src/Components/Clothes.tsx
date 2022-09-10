import Item from "../Components/Item";
import Col from "react-bootstrap/Col";
import {useEffect,useState} from "react";
import {useTranslation} from "react-i18next";
import {ItemType} from "../Interfaces/ItemType";
import { useNavigate} from "react-router-dom";


interface FilterProps {
    sizeFilter: number | string;
    typeFilter: string;
}


function ClothesItems({ sizeFilter , typeFilter }: FilterProps){

    const {t} = useTranslation();
    let navigate = useNavigate();

    const [data,setData]=useState([]);


    console.log("outer loop "+ typeFilter);
    function getData(typeFilter: string){

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
            .then(function(itemDataJson) {
                if (typeFilter==='Choose'){
                    setData(itemDataJson);
                }else{
                    setData(itemDataJson.filter((item: { type: string; }) => item.type===typeFilter))
                }
                console.log("type is "+typeFilter);
            });
    }
    useEffect(()=>{
        getData("Choose")
    },[])

    return (
        <>
            {
                data && data.length>0 && data.map(
                    (ItemData:ItemType,i)=>
                        <Col key={i}>
                            <Item key={i} id={ItemData.id}  type={ItemData.type} brand={ItemData.brand} size={ItemData.size} color={ItemData.color} />
                        </Col>
                )
            }
        </>
    );

}

export default ClothesItems;
