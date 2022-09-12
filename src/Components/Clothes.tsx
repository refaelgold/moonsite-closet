import Item from "../Components/Item";
import Col from "react-bootstrap/Col";
import {useEffect,useState} from "react";
import {ItemType} from "../Interfaces/ItemType";
import {FilterProps} from "../Interfaces/FilterProps";

function Clothes({ sizeFilter , typeFilter }: FilterProps){

    const [data,setData]=useState([]);

    useEffect(()=>{
        getData(typeFilter,sizeFilter)
    },[typeFilter,sizeFilter])
    function getData(typeFilter: string,sizeFilter:string | number){

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
                if ((typeFilter==='Choose type') && (sizeFilter==='Choose size')) {
                    setData(itemDataJson);
                }else if ((typeFilter!=='Choose type') && (sizeFilter==='Choose size')){
                    setData(itemDataJson.filter((item: { type: string; }) => item.type===typeFilter))
                }
               else if (sizeFilter!=='Choose size'){
                    setData(itemDataJson.filter((item: {
                        //size need to accept Int and Strings and that's why I'm using "==" instead "===".
                        // eslint-disable-next-line
                        size: string | number}) => item.size==sizeFilter))
                }
                else if ((typeFilter!=='Choose type') && (sizeFilter!=='Choose size')){
                    setData(
                        itemDataJson.filter((item: {
                            size: string | number; type: string; }) =>
                        // size need to accept Int and Strings and that's why I'm using "==" instead "===".
                        // eslint-disable-next-line
                        item.size==sizeFilter && item.type===typeFilter)
                    )
                }
            });
    }


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

export default Clothes;