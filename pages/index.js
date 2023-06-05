import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Home() {
  const [isLoged, setIsLoged] = useState(false);

  useEffect(() => {
    checkLoged();
  }, []);

  const checkLoged = () => {
    let token = localStorage.getItem('token');
    setIsLoged(token ? true : false);
  }

  return (
    <>
      <Head>
        <title>Beranda</title>
      </Head>
      <Header isLoged={isLoged} />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome di Ardiansyah Shop</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2 mx-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2 mx-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <Container>
          <Row>
              {
                [1,2,3,4].map((item, key) => (
                  <Col key={key} sm={6} md={6} lg={3} className='mb-3'>
                    <Card>
                      <Card.Body className='text-center my-3 py-0'>
                        <Card.Title>Kategori Produk {item}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              }
          </Row>
        </Container>
      </section>

      <section className='my-5'>
        <Container>
          <Row className='mb-4'>
            <Col className='d-flex justify-content-between align-items-center'>
              <span className='font-30'>Produk Baru 🚀</span>
              <Link href="/produk">Semua Produk</Link>
            </Col>
          </Row>
          <Row>
            {
              [1,2,3,4].map((item, key) => (
                <Col key={key} sm={6} md={6} lg={3} className='mb-4'>
                  <Card>
                    <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1882298d38d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1882298d38d%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.1328125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                    <Card.Body>
                      <Card.Title>Card Title {item}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>

    </>
  );
}

export default Home;