import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <div>
      <div className="display-6">
        Welcome to Service Details
        <div className="display-1">{service.name}</div>
        <Button as={Link} to="/checkout">
          Proceed CheckOut
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetails;
