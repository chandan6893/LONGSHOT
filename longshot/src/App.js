import React, { useState } from "react";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
// import Data from "./components/Data";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("My First Project", "1", <PieChartOutlined />),
  getItem("Dashboard", "2", <DesktopOutlined />),
  getItem("Recipes", "3", <ContainerOutlined />),
  getItem("Blog", "sub1", <MailOutlined />),
  getItem("Templates", "sub2", <AppstoreOutlined />, [
    getItem("Favorites", "9"),
    getItem("Custom Template", "10"),
  ]),
  getItem("Integrations", "sub1", <MailOutlined />,[
    getItem("Semrush","11")
  ]),
  getItem("Change Plan")
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="appDiv"
      style={{
        width: 256,
       
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
      {/* <Data className="data"  /> */}
    </div>
  );
};
export default App;
