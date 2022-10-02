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
    const [totalTypeCounterArrState,setTotalTypeCounterArrState]=useState([]);

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

    const ItemTypeCounter=()=> {
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
                        return ;
                    case 'shirt':
                        shirtCounter++;
                        TotalTypeCounterArr[1]=shirtCounter;
                        return ;
                    case 'shoes':
                        shoesCounter++;
                        TotalTypeCounterArr[2]=shoesCounter;
                        return;
                    default:
                        return;
                }

                // Will not work after one refresh only when I change the code So I use Local Storage
                if (!(localStorage.getItem('pantsCounter'))){
                    localStorage.setItem('pantsCounter',String(TotalTypeCounterArr[0]));
                }
                if (!(localStorage.getItem('shirtCounter'))){
                    localStorage.setItem('shirtCounter',String(TotalTypeCounterArr[1]));
                }
                if (!(localStorage.getItem('shoesCounter'))){
                    localStorage.setItem('shoesCounter',String(TotalTypeCounterArr[2]));
                }

                return;
            });

        setTotalTypeCounterArrState(TotalTypeCounterArr);
        return;
    }
    // useEffect(callback, dependencies) is the hook that manages the side-effects in functional components.
    // callback argument is a function to put the side-effect logic.
    // dependencies is a list of dependencies of your side-effect: being props or state values.
    useEffect(()=>{
        getData()
        ItemTypeCounter()
    },[])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>{t("HomePage")}</h1>
                    </Col>
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
