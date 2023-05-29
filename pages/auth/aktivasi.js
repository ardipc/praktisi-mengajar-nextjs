import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export async function getServerSideProps(context) {
    return {
        props: {}
    }
}

const Aktivasi = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    
    useEffect(() => {
        autoFecth(router.query.q);
    }, []);

    const autoFecth = (token) => {
        fetch(`/api/v1/auth/aktivasi?q=${token}`).then(res => res.json()).then(data => {
            const { status } = data;
            console.log(data);
            setIsLoading(status ? false : true);
        });
    }

    return (
        <>
            {
                isLoading ?
                    <div className="p-2">
                        Loading...
                    </div>
                    :
                    <>
                        <Head>
                            <title>Aktivasi Berhasil</title>
                        </Head>
                        <Container className="text-center m-auto">
                            <Row className="justify-content-center mt-5">
                                <Col md={4} className="pt-5">
                                    <main className="form-signin w-100 m-auto">
                                        <form>
                                            <img className="mb-4" src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Gambar" width={120} />
                                            <h1 className="h3 mb-3 fw-normal">Akun kamu sudah aktif silakan login.</h1>
                                            <div className="d-flex justify-content-between">
                                                <p className="mt-3"><Link href="/" className="my-5">ke Beranda</Link></p>
                                                <p className="mt-3"><Link href="/login">Masuk Aja</Link></p>
                                            </div>
                                            <p className="mt-5 mb-3 text-muted">© Praktisi Mengajar 2023</p>
                                        </form>
                                    </main>
                                </Col>
                            </Row>
                        </Container>
                    </>
            }
        </>
    );
}

export default Aktivasi;
