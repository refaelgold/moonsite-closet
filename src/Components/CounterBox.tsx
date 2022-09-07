import React from 'react';
import Card from 'react-bootstrap/Card';
import {useTranslation} from "react-i18next";
import  '../Styles/Components/CounterBox.css'

type Props = {
    count:number
    title:string
}

function CounterBox({count, title}:Props) {

    const {t} = useTranslation();
    return (
        <>
            <Card className={'box-container'} >
                <Card.Body>
                    <Card.Title className={'card-title'}>{t("Counter is for")}{title}</Card.Title>
                    <div>{count}</div>
                </Card.Body>
            </Card>
        </>
    );
}

export default CounterBox;