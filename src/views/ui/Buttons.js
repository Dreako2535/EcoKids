import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import J1 from "../../imgenes/juego1.jpg";
import J2 from "../../imgenes/juego2.jpg";
import J3 from "../../imgenes/juego3.jpg";

const Cards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/game'); 
  };
  const handleClicks = () => {
    navigate('/game1'); 
  };
  const handlesClick = () => {
    navigate('/game2'); 
  };
  
  return (
    <Row>
      <h5 className="mb-3 mt-3" style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>JUEGOS</h5>
      <Col md="6" lg="4">
        <Card body style={{ backgroundColor: "#e6f7ff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
          <CardTitle tag="h5" style={{ fontSize: "20px", marginBottom: "15px", color: "#007bff" }}>Recicla Correctamente</CardTitle>
          <CardImg src={J1} style={{ height: "200px", objectFit: "cover", borderRadius: "4px" }} />
          <Button color="light-warning" onClick={handleClick}>JUGAR</Button>
        </Card>
      </Col>
      <Col md="6" lg="4">
        <Card body className="text-center" style={{ backgroundColor: "#e6f7ff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
          <CardTitle tag="h5" style={{ fontSize: "20px", marginBottom: "15px", color: "#007bff" }}>Encuentra el Reciduo Reciclable</CardTitle>
          <CardImg src={J2} style={{ height: "200px", objectFit: "cover", borderRadius: "4px" }} />
          <div>
            <Button color="light-danger" onClick={handleClicks}>JUGAR</Button>
          </div>
        </Card>
      </Col>
      <Col md="6" lg="4">
        <Card body className="text-end" style={{ backgroundColor: "#e6f7ff", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
          <CardTitle tag="h5" style={{ fontSize: "20px", marginBottom: "15px", color: "#007bff" }}>Memoria del Reciclaje</CardTitle>
          <CardImg src={J3} style={{ height: "200px", objectFit: "cover", borderRadius: "4px" }} />
          <div>
            <Button color="light-success" onClick={handlesClick}>JUGAR</Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default Cards;
