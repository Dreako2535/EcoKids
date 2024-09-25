import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/bg5.jpg";
import { BiJoystick } from "react-icons/bi";



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
      <div
        className="profilebg p-5 "
        style={{ background: `url(${probg}) no-repeat`,width: "auto", height: "auto", display: "flex"}}
      >
        <div className="p-5 d-flex mt-5">
          {/* <img src={user1} alt="user" width="50" className="rounded-circle" /> */}
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav" style={{margin: "20px"}}>
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg" style={{margin: "20px"}}>
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
