import "./ThemeLayout.css";
import MenuLeft from "./MenuLeft";
import { Layout, Button, Space } from "antd";
import React ,{ useContext } from "react";
import { Outlet } from "react-router";
import { LoginContext } from "../LoginContext";
import {SketchOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";


const { Header, Footer, Sider, Content } = Layout;

function ThemeLayout() {
  const userContext = useContext(LoginContext);
  return (
    <div className="ThemeLayout">
      <Layout>
        <Sider className="sider" theme="light">
          <MenuLeft className="menu-left" />
        </Sider>
        <Layout>
          <Header className="header">
            <Link to="/" className="logo" >
              <span>Logo</span>
              <SketchOutlined
                style={{ fontSize: "24px", color: "rgb(24, 144, 255)" }}
                />
              
            </Link>
            <Button ghost onClick={userContext.logout}>
              LOGOUT
            </Button>
          </Header>
          <Content>
            <Outlet />
          </Content>
          <Footer className="footer">
            {/* <p> */} <span>&copy;</span> 2022 copyright{" "}
            <span className="bold"> karyar</span>
            {/* </p> */}
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default ThemeLayout;
