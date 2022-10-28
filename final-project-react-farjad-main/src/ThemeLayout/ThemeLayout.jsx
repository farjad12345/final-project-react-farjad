// import 'antd/dist/antd.min.css';
import "./ThemeLayout.css";
import MenuLeft from "./MenuLeft";
import { Layout } from "antd";
import React from "react";
const { Header, Footer, Sider, Content } = Layout;

function ThemeLayout({children}) {
  return (
    <div className="ThemeLayout">
      <Layout>
        <Sider className="sider">
          <MenuLeft />
        </Sider>
        <Layout>
          <Header className="header">Header</Header>
          <Content> {children}</Content>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default ThemeLayout;
