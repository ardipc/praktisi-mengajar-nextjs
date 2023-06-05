import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '@/components/Product';
import Kategori from '@/components/Kategori';

function Home() {
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
        <title>Beranda</title>
      </Head>
      <Header isLoged={isLoged} />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome di Ardiansyah Shop</h1>
            <p className="lead text-muted">
              Pilihan tepat, belanja hemat, belanja murah, hanya di Ardiansyah Shop. Kebutuhan kamu semua ada disini.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 mx-2">
                Mulai belanja
              </a>
              <a href="#" className="btn btn-secondary my-2 mx-2">
                Cek katalog produk
              </a>
            </p>
          </div>
        </div>
      </section>

      <section>
        <Container>
          <Row>
            {kategori.map((item, key) => (
              <Kategori key={key} item={item} />
            ))}
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <Container>
          <Row className="mb-4">
            <Col className="d-flex justify-content-between align-items-center">
              <span className="font-30">Produk Baru 🚀</span>
              <Link href="/produk">Semua Produk</Link>
            </Col>
          </Row>
          <div className="row gx-4 gx-lg-5">
            {
              produk.map((item, key) => (
                <Product key={key} item={item} />
              ))
            }
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;