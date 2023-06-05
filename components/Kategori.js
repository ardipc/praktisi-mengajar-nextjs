import Link from "next/link";
import React from "react";
import { Card, Col } from "react-bootstrap";

const Kategori = ({ item }) => {
  return (
    <Col sm={6} md={6} lg={3} className="mb-3">
      <Link href={`/kategori/${item._id}`} className="text-decoration-none">
        <Card>
          <Card.Body className="text-center my-3 py-0">
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.desctiption}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Kategori;
