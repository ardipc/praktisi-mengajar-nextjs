import Header from '@/components/Header';
import Product from '@/components/Product';
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
    _fetchProduk(req.result[0]['_id']);
  }

  const _fetchProduk = async (byCategory) => {
    let token = localStorage.getItem('token');
    let options = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    let req = await fetch(`/api/v1/categories/${byCategory}/products`, options).then(res => res.json());
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
                      <Nav.Link eventKey={`event-${key}`} onClick={e => _fetchProduk(item._id)}>{item.name}</Nav.Link>
                    </Nav.Item>
                  ))
                }
              </Nav>
            </Col>
          </Row>
          <Row className='mt-4'>
            {
              produk.map((item, key) => (
                <Product key={key} item={item} />
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;