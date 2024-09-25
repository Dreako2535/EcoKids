import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SibebarIzq from "./siderbarIzq";
import { Container } from "reactstrap";

const FullLayout = () => {
  return (
    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
            <Outlet />
          </Container>
        </div>
        <aside className="sidebarArea shadow" id="sidebarArea" style={{zIndex:1}}>
          <SibebarIzq/>
        </aside>
      </div>
    </main>
  );
};

export default FullLayout;
