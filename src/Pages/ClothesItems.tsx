import Item from "../Components/Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useTranslation} from "react-i18next";
import { useNavigate} from "react-router-dom";
import Clothes from "../Components/Clothes";
import FilterClothes from "../Components/FilterClothes";


function ClothesItems(){
    const {t} = useTranslation();
    let navigate = useNavigate();

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
                <Col>
                    <FilterClothes/>
                </Col>
            </Row>
            <Row>
                    <Clothes/>
            </Row>
        </Container>
        </>
);

}

export default ClothesItems;
