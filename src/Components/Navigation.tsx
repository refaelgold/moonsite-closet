import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useTranslation} from "react-i18next"


const NavbarComponent = () => {
    const {t} = useTranslation();
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link   className="text-white" href="/">{t("Home")}</Nav.Link>
                        <Nav.Link   className="text-white"  href="/clothes-items">{t("Clothes items")}</Nav.Link>
{/*
                        <Nav.Link   href="#link">{t("Saved sets")}</Nav.Link>
*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;