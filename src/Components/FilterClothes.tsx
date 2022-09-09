import {useTranslation} from "react-i18next";
import Col from "react-bootstrap/Col";
import React, {useState,Fragment} from "react";

function ClothesItems(){
    const {t} = useTranslation();


    const shoes=t("Shoes");
    const shirts=t("Shirts");
    const pants=t("Pants");

    const itemtypes = {
        shoes: shoes,
        shirts:shirts,
        pants: pants,
    }


    const [itemtype, setItemtype] = useState("")


    function getItemTypeValue(event: React.ChangeEvent<HTMLSelectElement>){
        alert("been changed");
        setItemtype(event.target.value);
    }


    return (
        <>
            <Col></Col>
            <Col>
                <Fragment>
                    <select value={itemtype} onChange={event => {getItemTypeValue(event); event.preventDefault();}}>
                        {Object.entries(itemtypes).map(c => (
                            <option value={c[1]}>{c[0]}</option>
                        ))}
                    </select>
                    <h2>{`Item Type: ${itemtype}`}</h2>
                </Fragment>
            </Col>
            <Col></Col>
        </>
    );

}

export default ClothesItems;



