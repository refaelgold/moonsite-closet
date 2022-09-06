import { Routes, Route } from 'react-router-dom';
import Index from "../Pages/Index";
import ClothesItems from "../Pages/ClothesItems";
import Container from "react-bootstrap/Container";


const Main = () => {
    return (
        <Container className={'main'}>
            <Routes>
                <Route path="/"   element={<Index />}></Route>
                <Route path="clothes-items"   element={<ClothesItems />}></Route>
            </Routes>
        </Container>
    );
}

export default Main;