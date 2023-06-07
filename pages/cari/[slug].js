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
  const [kategori, setKategori] = useState({});
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    checkLoged();
    _fetchProduk(router.query.slug);
  }, []);

  const checkLoged = () => {
    let token = localStorage.getItem('token');
    setIsLoged(token ? true : false);
  }

  const _fetchProduk = async (name) => {
    let token = localStorage.getItem('token');
    let options = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    let req = await fetch(`/api/v1/products/name?q=${name}`, options).then(res => res.json());
    setProduk(req.result)
  }

  return (
    <>
      <Head>
        <title>Cari</title>
      </Head>
      <Header isLoged={isLoged} />

      <section className="mt-4">
        <Container>
          <Row>
            <Col>
              <h3>Cari: {router.query.slug}</h3>
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