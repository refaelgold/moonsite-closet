import {useTranslation} from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Index(){
    const {t} = useTranslation();

    return (
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
);
}

export default Index;
