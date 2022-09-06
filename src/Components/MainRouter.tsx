import { Routes, Route } from 'react-router-dom';
import Index from "../Pages/Index";
import ClothesItems from "../Pages/ClothesItems";


const Main = () => {
    return (
            <Routes>
                <Route path="/"   element={<Index />}></Route>
                <Route path="clothes-items"   element={<ClothesItems />}></Route>
            </Routes>
    );
}

export default Main;