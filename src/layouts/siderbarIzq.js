import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";

import { BiJoystick } from "react-icons/bi";
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
            <div className="profilebg p-5 mt-5"
                style={{ background: "green", width: "auto", height: "auto", display: "flex" }}>
                holaaa
            </div>
            <div>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                </CardBody>
                <img
                    alt="Card cap"
                    src="https://picsum.photos/318/180"
                    width="100%"
                />
                <CardBody>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <CardLink href="#">
                        Card Link
                    </CardLink>
                    <CardLink href="#">
                        Another Link
                    </CardLink>
                </CardBody>
            </Card>
            </div>

        </div>

    );
};

export default Sidebar;
