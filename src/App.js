import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ReactChart from "./components/ReactChart";
import CanvasChart from "./components/CanvasJSChart";

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout" style={{ background: "white" }}>
      <Content
        style={{
          // padding: "0 50px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Navbar />
        <Content style={{ marginLeft: "1rem" }}>
          <Home />
          <Content style={{ marginLeft: "0.5rem", marginRight: "1rem" }}>
            <ReactChart />
            <CanvasChart />
          </Content>
        </Content>
      </Content>
    </Layout>
  );
};

export default App;
