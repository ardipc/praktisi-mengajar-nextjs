import { changeRp } from "@/helpers/rupiah";
import Link from "next/link";
import { Col, Placeholder, Row } from "react-bootstrap";

const ProductPlaceholder = ({ item }) => {
  return (
    <Row>
      {[1, 2, 3, 4].map((item, key) => (
        <Col key={key} sm={6} md={6} lg={3} className="mb-3">
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
                <h5 className="fw-bolder">
                  <Placeholder animation="glow">
                    <Placeholder md={12} />
                  </Placeholder>
                </h5>
                {/* Product price*/}
                <Placeholder animation="glow">
                  <Placeholder md={12} />
                </Placeholder>
              </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <Placeholder animation="glow">
                  <Placeholder md={12} />
                </Placeholder>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProductPlaceholder;
