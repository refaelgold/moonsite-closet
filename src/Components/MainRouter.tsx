import { Routes, Route } from 'react-router-dom';
import Index from "../Pages/Index";
import Container from "react-bootstrap/Container";


const Main = () => {
    return (
        <Container className={'main'}>
            <Routes>
                <Route path="/"   element={<Index />}></Route>
            </Routes>
        </Container>
    );
}

export default Main;