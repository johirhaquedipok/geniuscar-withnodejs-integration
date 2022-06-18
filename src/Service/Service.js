import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  const navigate = useNavigate();
  const handleService = (_id) => {
    navigate(`/services/${_id}`);
  };
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            {price}
          </Card.Text>
          <Button variant="primary" onClick={() => handleService(_id)}>
            More Info
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
