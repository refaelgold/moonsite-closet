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

    const itemsizes = {
        30: 30,
        31: 31,
        32: 32,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
        39: 39,
        42: 42,
        43: 43,
        45:45,
        46:46,
        48:48,
        "S":"S",
        "L":"L",
        "XL":"XL",
        "XXL":"XXL",
    }

    const [itemtype, setItemType] = useState("")
    const [itemsize, setItemSize] = useState("")


    function getItemTypeValue(event: React.ChangeEvent<HTMLSelectElement>){
        setItemType(event.target.value);
    }
    function getItemSizeValue(event: React.ChangeEvent<HTMLSelectElement>){
        setItemSize(event.target.value);
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
                    <h2>{`${itemtype}`}</h2>
                </Fragment>

                <Fragment>
                    <select value={itemsize} onChange={event => {getItemSizeValue(event); event.preventDefault();}}>
                        {Object.entries(itemsizes).map(c => (
                            <option value={c[1]}>{c[0]}</option>
                        ))}
                    </select>
                    <h2>{`${itemsize}`}</h2>
                </Fragment>

            </Col>
            <Col></Col>
        </>
    );

}

export default ClothesItems;



