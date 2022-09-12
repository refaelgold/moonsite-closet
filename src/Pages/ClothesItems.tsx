import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useTranslation} from "react-i18next";
import { useNavigate} from "react-router-dom";
import Clothes from "../Components/Clothes";
import React, {useState,Fragment} from "react";
import  '../Styles/Components/ClothItem.css'

function ClothesItems(){
    const {t} = useTranslation();
    let navigate = useNavigate();

    const itemType = {
        'Choose type':'Choose type',
        shoes: 'shoes',
        shirt:'shirt',
        pants: 'pants',
    }

    const itemSize = {
        'Choose size':'Choose size',
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

    let [itemtype, setItemType] = useState("Choose type")
    let [itemsize, setItemSize] = useState<string|number>("Choose size")


    function getItemTypeValue(event: React.ChangeEvent<HTMLSelectElement>){
        event.preventDefault();
        setItemType(event.target.value);
    }
    function getItemSizeValue(event: React.ChangeEvent<HTMLSelectElement>){
        event.preventDefault();
        setItemSize(event.target.value);
    }


    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <button onClick={() => navigate(-1)}>{t("Back")}</button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{t("Clothes items")}</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Fragment>
                                <select className={'custom-select'} value={itemtype}  defaultValue={"Choose type"} onChange={event => getItemTypeValue(event)}>
                                    {Object.entries(itemType).map((c, i) => (
                                        <option key={i} value={c[1]}>{c[0]}</option>
                                    ))}
                                </select>
                        </Fragment>
                        <Fragment>
                            <select className={'custom-select'} value={itemsize}  defaultValue={"Choose size"}  onChange={event => {getItemSizeValue(event);}}>
                                {Object.entries(itemSize).map((c, i) => (
                                    <option key={i} value={c[1]}>{c[0]}</option>
                                ))}
                            </select>
                        </Fragment>

                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Clothes sizeFilter={itemsize} typeFilter={itemtype} />
                </Row>
            </Container>
        </>
    );

}

export default ClothesItems;