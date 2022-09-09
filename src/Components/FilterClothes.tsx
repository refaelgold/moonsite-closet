import {useTranslation} from "react-i18next";
import Col from "react-bootstrap/Col";



function ClothesItems(this: any){
    const {t} = useTranslation();


    // @ts-ignore
    return (
        <>
            <Col></Col>
            <Col>
                <h1>{t("Layered Navigation")}</h1>
            </Col>
            <Col></Col>
        </>
    );

}

export default ClothesItems;
