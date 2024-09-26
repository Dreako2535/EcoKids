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
                        width: '17rem'
                    }}
                >
                    <CardBody style={{background: "white"}}> 
                        <CardTitle tag="h5">
                            <h1 style={{ fontSize: "24px", margin: "35px" }}>Contactanos</h1>
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Email <br></br>
                            <Link href="#" style={{textDecoration: "none"}}>fonsequitanixon@</Link>
                        </CardSubtitle>
                    </CardBody>
                    <img
                        alt="Card cap"
                        src="https://picsum.photos/318/180"
                        width="100%"
                    />
                    <CardBody>

                        <CardLink href="#" style={{textDecoration: "none"}}>
                             <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <FaInstagram size={24} /> {/* Tamaño del icono */}
                                    <span style={{ marginLeft: "8px" }}>Instagram</span> {/* Espaciado */}
                                </div>
                            </a>
                        </CardLink>
                        <CardLink href="#" style={{textDecoration: "none"}}>
                            <a href="https://twitter.com/tu_usuario" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <FaTwitter size={24} /> {/* Tamaño del icono */}
                                    <span style={{ marginLeft: "8px" }}>Twitter</span> {/* Espaciado */}
                                </div>
                            </a>
                        </CardLink>
                    </CardBody>
                </Card>
            </div>

        </div>

    );
};

export default Sidebar;
