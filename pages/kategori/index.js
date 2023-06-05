import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';

function Home() {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(false);
  const [kategori, setKategori] = useState([]);
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    checkLoged();
    _fetchKategori();
    _fetchProduk();
  }, []);

  const checkLoged = () => {
    let token = localStorage.getItem('token');
    setIsLoged(token ? true : false);
  }

  const _fetchKategori = async () => {
    let token = localStorage.getItem('token');
    let options = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    let req = await fetch(`/api/v1/categories`, options).then(res => res.json());
    setKategori(req.result)
  }

  const _fetchProduk = async () => {
    let token = localStorage.getItem('token');
    let options = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    let req = await fetch(`/api/v1/products`, options).then(res => res.json());
    setProduk(req.result)
  }

  return (
    <>
      <Head>
        <title>Kategori</title>
      </Head>
      <Header isLoged={isLoged} />

      <section className="mt-4">
        <Container>
          <Row>
            <Col>
              <Nav variant="pills" defaultActiveKey="event-0">
                {
                  kategori.map((item, key) => (
                    <Nav.Item key={key}>
                      <Nav.Link eventKey={`event-${key}`}>{item.name}</Nav.Link>
                    </Nav.Item>
                  ))
                }
              </Nav>
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;