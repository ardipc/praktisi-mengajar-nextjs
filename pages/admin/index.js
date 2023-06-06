import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("Masuk Admin");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const _submitLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let payload = {
            email, password
        };
        fetch(`/api/admin/session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => res.json()).then(data => {
            const { status, result } = data;
            console.log(data);
            if(status) {
                setTitle("Sedang mengalihkan...");
                router.push('/admin/private');
            } else {
                setTitle(result);
            }
            setIsLoading(false);
        })
    }

    return (
        <>
            <Head>
                <title>CMS</title>
            </Head>
            <Container className="text-center m-auto">
                <Row className="justify-content-center mt-5">
                    <Col md={4} className="pt-5">
                        <main className="form-signin w-100 m-auto">
                            <form onSubmit={e => _submitLogin(e)}>
                                <img className="mb-4" src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="Gambar" width={120} />
                                <h1 className="h3 mb-3 fw-normal">{title}</h1>
                                <div className="form-floating mt-3">
                                    <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating my-3">
                                    <input required value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">
                                    {
                                        isLoading ? <Spinner /> : "Masuk"
                                    }
                                </button>
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
