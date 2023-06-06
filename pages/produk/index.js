import Header from '@/components/Header';
import Product from '@/components/Product';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';

const Index = () => {
    const [isLoged, setIsLoged] = useState(false);
    const [produk, setProduk] = useState([]);

    useEffect(() => {
        checkLoged();
        _fetchProduk();
    }, []);

    const checkLoged = () => {
        let token = localStorage.getItem('token');
        setIsLoged(token ? true : false);
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
            <section className="my-4">
                <div className="container">
                    <h2 className="fw-bolder mb-4">Produk Terbaru</h2>
                    <div className="row gx-4 gx-lg-5">
                        {
                            produk.map((item, key) => (
                                <Product key={key} item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
