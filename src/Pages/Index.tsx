import {useTranslation} from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useEffect, useState} from "react";
import CounterBox from "../Components/CounterBox";
import {ItemType} from "../Interfaces/ItemType";

function Index(){
    const {t} = useTranslation();
    const [data,setData]=useState([]);
    const [shirtCounterState,setShirtCounterState]=useState([]);
    const [pantsCounterState,setPantsCounterState]=useState([]);
    const [shoesCounterState,setShoesCounterState]=useState([]);


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
            .then(function(itemDataJson) {
                setData(itemDataJson)
                localStorage.setItem('items', JSON.stringify(itemDataJson));
            });
    }
    useEffect(()=>{
        getData()
    },[])




    let shirtCounter = 0;
    let pantsCounter = 0;
    let shoesCounter = 0;
    const TotalTypeCounterArr:any= []
    data && data.length > 0 && data.map(
        (ItemData: ItemType, i) => {
            switch (ItemData.type) {
                case 'pants':
                    pantsCounter++;
                    TotalTypeCounterArr[0]=pantsCounter;
                    return pantsCounter;
                case 'shirt':
                    shirtCounter++;
                    TotalTypeCounterArr[1]=shirtCounter;
                    return  shirtCounter;
                case 'shoes':
                    shoesCounter++;
                    TotalTypeCounterArr[2]=shoesCounter;
                    return shoesCounter;
            }
            return "Unsupported Data";
        });
    // Will not work after one refresh only when I change the code So I use Local Storage

    if (!localStorage.getItem('pantsCounter')){
        localStorage.setItem('pantsCounter',TotalTypeCounterArr[0]);
    }
    if (!localStorage.getItem('shirtCounter')){
        localStorage.setItem('shirtCounter',TotalTypeCounterArr[1]);
    }
    if (!localStorage.getItem('shoesCounter')){
        localStorage.setItem('shoesCounter',TotalTypeCounterArr[2]);
    }

    useEffect(()=>{
       window.localStorage.setItem('pantsCounterState',TotalTypeCounterArr[0]);

    },[shirtCounterState,pantsCounterState,shoesCounterState])

    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <h1>{t("HomePage")}</h1>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <CounterBox  itemTypeTitle={t('Pants')} itemTypeNumber={localStorage.getItem('pantsCounter')}/>
                    </Col>
                    <Col>
                        <CounterBox  itemTypeTitle={t('Shirts')} itemTypeNumber={localStorage.getItem('shirtCounter')}/>
                    </Col>
                    <Col>
                        <CounterBox  itemTypeTitle={t('Shoes')} itemTypeNumber={localStorage.getItem('shoesCounter')}/>
                    </Col>
                </Row>
            </Container>
        </div>
);
}

export default Index;
