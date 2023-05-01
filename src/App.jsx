import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar } from "./components";
import "./App.css";

const App = () => {
  const location = useLocation();
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div
            className="routes"
            style={{ padding: location.pathname == "/exchanges" ? 0 : "20px" }}
          >
            <Outlet />
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/riga-crypto">Riga Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/riga-crypto">Home</Link>
            <Link to="/riga-crypto/exchanges">Exchanges</Link>
            <Link to="/riga-crypto/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
