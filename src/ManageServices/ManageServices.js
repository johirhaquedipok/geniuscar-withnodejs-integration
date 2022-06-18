import { Col, Container, Row } from "react-bootstrap";
import useServices from "../Hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      fetch(`http://localhost:5000/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h2>Manage Your Services</h2>
            {services.map((service) => (
              <div key={service._id} className="mb-2">
                {" "}
                {service.name}{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(service._id)}
                >
                  Delete
                </button>{" "}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageServices;
