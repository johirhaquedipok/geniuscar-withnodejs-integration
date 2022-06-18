import { Container } from "react-bootstrap";
import Services from "../Services/Services";

const Home = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Services />
    </Container>
  );
};

export default Home;
