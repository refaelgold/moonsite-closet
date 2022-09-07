import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import CounterBox from "../Components/CounterBox";
import { ItemType } from "../Interfaces/ItemType";
import {useNavigate} from "react-router-dom";


function Index() {
    const { t } = useTranslation();
    const [shirtsCount, setShirtsCount] = useState(0)
    const [pantsCount, setPantsCount] = useState(0)
    const [shoesCount, setShoesCount] = useState(0)
    let navigate = useNavigate();

    useEffect(() => {
        fetch("https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data: ItemType[]) {
                //                 const TotalTypeCounterArr:any= []
                let pantsCounter = 0;
                let shirtCounter = 0;
                let shoesCounter = 0;

                data.forEach((ItemData: ItemType) => {
                    switch (ItemData.type) {
                        case "pants":
                            pantsCounter++;
                            return pantsCounter;
                        case "shirt":
                            shirtCounter++;
                            return shirtCounter;
                        case "shoes":
                            shoesCounter++;
                            return shoesCounter;
                    }
                });

                setShirtsCount(shirtCounter)
                setShoesCount(shoesCounter)
                setPantsCount(pantsCounter)

            });
    }, []);


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <button onClick={() => navigate(-1)}>{t("Back")}</button>
                    </Col>
                    <Col>
                        <h1>{t("HomePage")}</h1>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col><CounterBox title={t("Shirts")} count={shirtsCount} /></Col>
                    <Col><CounterBox title={t("Shoes")} count={shoesCount} /></Col>
                    <Col><CounterBox title={t("Pants")} count={pantsCount} /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Index;