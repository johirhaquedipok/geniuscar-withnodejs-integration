import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../Hooks/useServiceDetail";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div>
      <div className="display-6">
        Welcome to Service Details
        <div className="display-1">{service.name}</div>
        <Button as={Link} to={`/checkout/${serviceId}`}>
          Proceed CheckOut
        </Button>
      </div>
    </div>
  );
};

export default ServiceDetails;
