import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Row xs={1} md={2} className="g-4">
      {services.map((service) => (
        <Service key={service._id} service={service} />
      ))}
    </Row>
  );
};

export default Services;
