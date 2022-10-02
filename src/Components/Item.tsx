import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useTranslation} from "react-i18next"
import  '../Styles/Components/Item.css'
import cloth_item_image from "../Images/cloth-item.jpg";

function Item(props:any) {
    const {t} = useTranslation();
    return (
        <Card className={'item-container'}  >
            <Card.Img variant="top" src={cloth_item_image} width={200} height={200} />
            <Card.Body>
                <Card.Title className={'card-title'}>{t("Item Number ")}{props.id}</Card.Title>
                <ul>
                    <li><span>{t("Type : ")}</span>{props.type}</li>
                    <li><span>{t("Brand : ")}</span>{props.brand}</li>
                    <li><span>{t("Size : ")}</span>{props.size}</li>
                    <li><span>{t("Color")}</span><span style={{width:"30px",height: "30px", backgroundColor:props.color, display: "block", margin: "0 auto", borderRadius: "30px",borderColor:'black',marginBottom:'5px',borderStyle:'solid'}}></span></li>
                </ul>
                <Button variant="primary">{t("Choose")}</Button>

            </Card.Body>
        </Card>
    );
}

export default Item;