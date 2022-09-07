import Card from 'react-bootstrap/Card';
import {useTranslation} from "react-i18next"

function CounterBox(props:any) {
    const {t} = useTranslation();
    return (
        <Card className={'counter-container'} >
            <Card.Body>
                <Card.Title className={'card-title'}>{t("Counter is for")}{props.itemTypeTitle}</Card.Title>
                <div>{props.itemTypeNumber}</div>
            </Card.Body>
        </Card>
    );
}

export default CounterBox;