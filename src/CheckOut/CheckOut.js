import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../firebase.init";
import useServiceDetail from "../Hooks/useServiceDetail";
const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const serviceid = serviceId;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const order = { name, email, serviceid, address, phone };
    axios.post("http://localhost:5000/order", order).then((res) => {
      console.log(res);
      const { data } = res;
      if (data.insertedId) {
        toast("your data is added to the DataBase");
      }
    });
    console.log("ok");
  };

  return (
    <>
      <div className="display-1 text-center">Please Order {service?.name}</div>
      <Container>
        <Row>
          <Col md={8} className="text-center">
            <h3>Add your order data to the form</h3>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              text
              <input
                className="mb-2"
                type="text"
                placeholder="name"
                defaultValue={user?.displayName}
                readOnly
              />
              <input
                className="mb-2"
                type="email"
                placeholder="email"
                defaultValue={user?.email}
                readOnly
              />
              <input
                className="mb-2"
                type="text"
                placeholder="product name"
                defaultValue={service?.name}
              />
              <input
                className="mb-2"
                placeholder="address"
                type="text"
                name="address"
              />
              <input
                className="mb-2"
                placeholder="phone"
                type="number"
                name="phone"
              />
              <input className="mb-2" type="submit" />
            </form>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default CheckOut;
