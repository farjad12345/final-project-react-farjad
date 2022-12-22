import { Link } from "react-router-dom";

import {
  UserAddOutlined,
  UserSwitchOutlined,
  InfoCircleOutlined,
  CameraOutlined,
  DatabaseTwoTone,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";

const items = [
  {
    label: <Link to="/">Users</Link>,
    key: "Users",
    icon: <UserSwitchOutlined />,
  },
  {
    label: <Link to="/signup">Add User</Link>,
    key: "addAccount",
    icon: <UserAddOutlined />,
  },
  {
    label: <Link to="/aboutus">About Us</Link>,
    key: "aboutus",
    icon: <InfoCircleOutlined />,

  },
  {
    label: <Link to="/gallery">Gallery</Link>,
    key: "gallery",
    icon: <CameraOutlined />,
  },
  {
    label: <Link to="/technology">Technology</Link>,
    key: "technology",
    icon: <DatabaseTwoTone />,
  },
  {},
];
const MenuLeft = () => {
  const [current, setCurrent] = useState("Users");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      
      onClick={onClick}
      selectedKeys={[current]}
      items={items}
      theme="light"
      mode="inline"
      href="./"
    ></Menu>
  );
};
export default MenuLeft;
