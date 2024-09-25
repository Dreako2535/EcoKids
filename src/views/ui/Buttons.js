import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
} from "reactstrap";
import {  useNavigate } from "react-router-dom";
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
        <h5 className="mb-3 mt-3">JUEGOS</h5>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5">Recicla Correctamente</CardTitle>
            <CardImg src= {J1} />
            <Button color="light-warning" onClick={handleClick}>JUGAR</Button>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">Encuentra el Reciduo Reciclable</CardTitle>
            <CardImg src= {J2} />
            <div>
              <Button color="light-danger" onClick={handleClicks}>JUGAR</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-end">
            <CardTitle tag="h5">Memoria del Reciclaje</CardTitle>
            <CardImg src= {J3} />
            <div>
              <Button color="light-success" onClick={handlesClick}>JUGAR</Button>
            </div>
          </Card>
        </Col>
      </Row>

      
  )}

export default Cards;