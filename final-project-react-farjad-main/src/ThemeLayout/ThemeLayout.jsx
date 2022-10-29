// import 'antd/dist/antd.min.css';
import "./ThemeLayout.css";
import MenuLeft from "./MenuLeft";
import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router";
const { Header, Footer, Sider, Content } = Layout;

function ThemeLayout() {
  return (
    <div className="ThemeLayout">
      <Layout>
        <Sider className="sider">
          <MenuLeft />
        </Sider>
        <Layout>
          <Header className="header">Header</Header>
          <Content>
            <Outlet />
          </Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default ThemeLayout;
