import { Card, Col, Placeholder, Row } from "react-bootstrap";

const KategoriPlaceholder = () => {
    return (
        <Row>
            {
                [1,2,3,4].map((item, key) => (
                    <Col key={key} sm={6} md={6} lg={3} className="mb-3">
                        <Card>
                            <Card.Body className="text-center my-3 py-0">
                                <Placeholder animation="glow">
                                    <Placeholder sm={6} md={6} lg={12} />
                                </Placeholder>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    );
}

export default KategoriPlaceholder;
