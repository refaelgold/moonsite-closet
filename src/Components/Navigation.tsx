import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useTranslation} from "react-i18next"


const NavbarComponent = () => {
    const {t} = useTranslation();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={require('../Images/git_logo.jpg')} width={200} height={50} alt=''/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-white">
                        <Nav.Link   href="#link">{t("Link")}1</Nav.Link>
                        <Nav.Link   href="#link">{t("Link")}2</Nav.Link>
                        <Nav.Link   href="#link">{t("Link")}3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;