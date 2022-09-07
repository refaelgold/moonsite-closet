import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useTranslation} from "react-i18next"
import  '../Styles/Components/Item.css'

function Item(props:any) {
    const {t} = useTranslation();
    return (
        <Card className={'item-container'}  >
            <Card.Img variant="top" src="https://api.lorem.space/image/movie?w=200&h=220" width={200} height={200} />
            <Card.Body>
                <Card.Title className={'card-title'}>{t("Item Number ")}{props.id}</Card.Title>
                <ul>
                    <li><span>{t("Type : ")}</span>{props.type}</li>
                    <li><span>{t("Brand : ")}</span>{props.brand}</li>
                    <li><span>{t("Size : ")}</span>{props.size}</li>
                    <li><span>{t("Color : ")}</span>{props.color}</li>
                </ul>
                <Button variant="primary">{t("Choose")}</Button>

            </Card.Body>
        </Card>
    );
}

export default Item;