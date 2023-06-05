import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    const { isLoged } = props;
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link href="/" className='text-decoration-none'>Ardiansyah</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/kategori">Kategori</Nav.Link>
                        <Nav.Link href="/baru">Produk Baru</Nav.Link>
                    </Nav>
                    
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        {
                            isLoged ?
                                <Link href={'/auth/logout'}>
                                    <Button variant="outline-danger mx-2">
                                        Keluar
                                    </Button>
                                </Link>
                                : 
                                <Link href={'/login'}>
                                    <Button variant="outline-primary mx-2">
                                        Masuk
                                    </Button>
                                </Link>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
