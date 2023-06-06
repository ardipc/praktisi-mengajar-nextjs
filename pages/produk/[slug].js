import Header from "@/components/Header";
import Product from "@/components/Product";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";

function Home() {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(false);
  const [produk, setProduk] = useState({});

  useEffect(() => {
    checkLoged();
    _fetchProduk();
  }, []);

  const checkLoged = () => {
    let token = localStorage.getItem("token");
    setIsLoged(token ? true : false);
  };

  const _fetchProduk = async (id) => {
    let token = localStorage.getItem("token");
    let options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let req = await fetch(
      `/api/v1/products/${router.query.slug}`,
      options
    ).then((res) => res.json());
    setProduk(req.result);
  };

  return (
    <>
      <Head>
        <title>{produk.name}</title>
      </Head>
      <Header isLoged={isLoged} />

      <Container className="my-3">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Kategori
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Judul</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
      <section className="pb-5">
        <div className="container">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">Shop item template</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">$45.00</span>{" "}
                &nbsp;
                <span>$40.00</span>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue={1}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container mt-3">
          <h2 className="fw-bolder mb-4">Related products</h2>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col mb-4">
              <div className="card h-100">
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Fancy Product</h5>
                    {/* Product price*/}
                    $40.00 - $80.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100">
                {/* Sale badge*/}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Special Item</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                    </div>
                    {/* Product price*/}
                    <span className="text-muted text-decoration-line-through">
                      $20.00
                    </span>
                    $18.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100">
                {/* Sale badge*/}
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Sale Item</h5>
                    {/* Product price*/}
                    <span className="text-muted text-decoration-line-through">
                      $50.00
                    </span>
                    $25.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100">
                {/* Product image*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/* Product details*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">Popular Item</h5>
                    {/* Product reviews*/}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                      <div className="bi-star-fill" />
                    </div>
                    {/* Product price*/}
                    $40.00
                  </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
