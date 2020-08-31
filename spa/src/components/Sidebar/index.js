import React, { useState }  from "react";
import {
  FaClipboardList,
  FaPlus,
  FaTag,
  FaGithub,
  FaTags,
} from "react-icons/fa";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "./style.scss";

const Sidebar = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  return (
    <ProSidebar
      collapsed={sideBarCollapsed}
    >
      <SidebarHeader>
        <div
          onClick={() => setSideBarCollapsed(!sideBarCollapsed)}
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 16,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: '#fff'
          }}
        >
          Teixeira Finanças
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem style={{color: '#fff'}} icon={<FaClipboardList />}>Dashboard</MenuItem>
          <MenuItem style={{color: '#fff'}} icon={<FaPlus />}> Nova movimentação</MenuItem>
          <SubMenu style={{color: '#fff'}} icon={<FaTag />} title="Categorias">
            <MenuItem style={{color: '#fff'}}>Cadastrar</MenuItem>
            <MenuItem style={{color: '#fff'}}>Ver todas</MenuItem>
          </SubMenu>
          <SubMenu style={{color: '#fff'}} icon={<FaTags />} title="Subcategorias">
            <MenuItem style={{color: '#fff'}}>Cadastrar</MenuItem>
            <MenuItem style={{color: '#fff'}}>Ver todas</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/Nyfts/TeixeiraFinancas"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span style={{ marginLeft: 5 }} />
            Github
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
