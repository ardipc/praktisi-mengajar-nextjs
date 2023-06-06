import Header from "@/components/Header";
import Product from "@/components/Product";
import { changeRp } from "@/helpers/rupiah";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";

export async function getServerSideProps(context) {
  return {
    props: {}
  }
}

function Home(props) {
  const router = useRouter();
  const [isLoged, setIsLoged] = useState(false);
  const [produk, setProduk] = useState({
    name: '',
    price: 0,
    category_id: {
      _id: '',
      name: ''
    }
  });
  const [sejenis, setSejenis] = useState([]);

  console.log(router.query.slug)

  useEffect(() => {
    checkLoged();
    _fetchProduk(router.query.slug);
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
      `/api/v1/products/${id}`,
      options
    ).then((res) => res.json());
    setProduk(req.result);
    _fetchSejenis(req.result.category_id._id);
  };

  const _fetchSejenis = async (id) => {
    let token = localStorage.getItem("token");
    let options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let req = await fetch(
      `/api/v1/categories/${id}/products`,
      options
    ).then((res) => res.json());
    setSejenis(req.result);
  }

  return (
    <>
      <Head>
        <title>{produk.name}</title>
      </Head>
      <Header isLoged={isLoged} />

      <Container className="my-3">
        <Row>
          <Col>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                <li class="breadcrumb-item"><Link href={`/kategori/${produk.category_id._id}`}>{produk.category_id.name}</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
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
              <div className="small mb-1">SKU: {produk._id}</div>
              <h1 className="display-5 fw-bolder">{produk.name}</h1>
              <div className="fs-5 mb-5">
                <span>{changeRp(produk.price)}</span>
              </div>
              <p className="lead">
                {produk.description}
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
          <h2 className="fw-bolder mb-4">Produk Sejenis</h2>
          <div className="row gx-4 gx-lg-5">
            {
              sejenis.map((item, key) => {
                if(item._id != router.query.slug) {
                  return (
                    <Product key={key} item={item} />
                  )
                }
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
