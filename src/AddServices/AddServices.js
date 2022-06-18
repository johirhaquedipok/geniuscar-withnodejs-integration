import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/service`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <Container>
      <Row>
        <Col md={8} className="text-center">
          <h3>Add some data to the form</h3>
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="mb-2"
              placeholder="name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              className="mb-2"
              placeholder="description"
              {...register("description")}
            />
            <input
              className="mb-2"
              placeholder="price"
              type="number"
              {...register("price")}
            />
            <input
              className="mb-2"
              placeholder="photo Url"
              type="text"
              {...register("img")}
            />
            <input className="mb-2" type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddServices;
