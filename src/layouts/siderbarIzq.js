import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardGroup,
    Row,
    Col,
    CardLink
} from "reactstrap";



const navigation = [

    {
        title: "News",
        href: "/badges",
        icon: "bi bi-patch-check",
    },

    {
        title: "Foros",
        href: "/cards",
        icon: "bi bi-card-text",
    },

    {
        title: "Juegos",
        href: "/buttons",
        icon: "bi bi-controller"
    },

];

const Sidebar = () => {
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    let location = useLocation();


    return (
        <div>
            <div className="d-flex align-items-center"></div>
            <div className="profilebg mt-5"
                style={{ background: "green", width: "auto", height: "100PX", display: "flex", alignItems: "Center", justifyContent: "center", marginLeft: "-80px", zIndex: 2}}>
                <h1 style={{ whiteSpace: "nowrap", margin: "mt-1" }}
                > {location.pathname=='/badges'?<>ECO NEWS</>:<></>}
                {location.pathname=='/cards'?<>ECO FORUM</>:<></>}
                {location.pathname=='/buttons'?<>ECO GAME</>:<></>}</h1>
            </div>
            <div>
            <Card
            style={{
                width: '17rem',
                borderRadius: '10px', // Bordes redondeados
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Sombra sutil
                margin: '20px', // Espaciado alrededor de la tarjeta
                marginTop: "500px" 
            }}
        >
            <CardBody style={{ background: "white", }}>
                <CardTitle tag="h5">
                    <h1 style={{ fontSize: "24px", margin: "10px 0" }}>Contáctanos</h1>
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Email <br />
                    <Link href="#" style={{ textDecoration: "none", color: "black" }}>
                        fonsequitanixon@
                    </Link>
                </CardSubtitle>
            </CardBody>

            <CardBody>
                <CardLink href="#" style={{ textDecoration: "none" }}>
                    <a
                        href="https://www.instagram.com/tu_usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                            // Espaciado entre enlaces
                        }}
                    >
                        <FaInstagram size={24} />
                        <span style={{ marginLeft: "8px" }}>Instagram</span>
                    </a>
                </CardLink>
                <CardLink href="#" style={{ textDecoration: "none" }}>
                    <a
                        href="https://twitter.com/tu_usuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <FaTwitter size={24} />
                        <span style={{ marginLeft: "8px" }}>Twitter</span>
                    </a>
                </CardLink>
            </CardBody>
        </Card>
            </div>

        </div>

    );
};

export default Sidebar;
