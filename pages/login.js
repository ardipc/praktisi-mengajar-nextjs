import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Container className="text-center m-auto">
                <Row className="justify-content-center mt-5">
                    <Col md={4} className="pt-5">
                        <main className="form-signin w-100 m-auto">
                            <form>
                                <img className="mb-4" src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Gambar" width={120} />
                                <h1 className="h3 mb-3 fw-normal">Silahkan Masuk</h1>
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating my-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Masuk</button>
                                <div className="d-flex justify-content-between">
                                    <p className="mt-3"><Link href="/" className="my-5">Kembali ke Beranda</Link></p>
                                    <p className="mt-3"><Link href="/daftar">Belum punya akun?</Link></p>
                                </div>
                                <p className="mt-5 mb-3 text-muted">© Praktisi Mengajar 2023</p>
                            </form>
                        </main>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;
