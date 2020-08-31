import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { FaClipboardList, FaPlus, FaTag, FaGithub, FaTags } from 'react-icons/fa';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "./styles/custom.scss";

import Dashboard from "./pages/Dashboard";
import Categoria from "./pages/Categoria";

const App = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <ProSidebar collapsed={sideBarCollapsed} style={{backgroundColor: '#fff'}}>
        <SidebarHeader>
          <div
            onClick={() => setSideBarCollapsed(!sideBarCollapsed)}
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Teixeira Finanças
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FaClipboardList />}>Dashboard</MenuItem>
            <MenuItem icon={<FaPlus />}> Nova movimentação</MenuItem>
            <SubMenu icon={<FaTag />} title="Categorias">
              <MenuItem>Cadastrar</MenuItem>
              <MenuItem>Ver todas</MenuItem>
            </SubMenu>
            <SubMenu icon={<FaTags />} title="Subcategorias">
              <MenuItem>Cadastrar</MenuItem>
              <MenuItem>Ver todas</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/Nyfts/TeixeiraFinancas"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            {/* <span> {intl.formatMessage({ id: 'viewSource' })}</span> */}
            <span style={{marginLeft: 5}} />Github
          </a>
        </div>
        </SidebarFooter>
      </ProSidebar>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Dashboard} />
          <Route path="/categoria" component={Categoria} />
          <Redirect from="/" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
