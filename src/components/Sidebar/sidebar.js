import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const LeftSidebar = ({ close }) => {
  const { user, isAuth } = useSelector((state) => state.auth);
  return (
    <Sidebar className={close ? "sidebar close" : "sidebar "}>
      <Menu>
        {user.length === 0 || isAuth ? (
          <MenuItem component={<Link to="/login" />}>Login</MenuItem>
        ) : (
          <>
            <MenuItem component={<Link to="/" />}>Home</MenuItem>

            <SubMenu label="Products">
              <MenuItem component={<Link to="/add_product" />}>
                Add Product
              </MenuItem>
              <MenuItem component={<Link to="/products" />}>Products</MenuItem>
            </SubMenu>
          </>
        )}
      </Menu>
    </Sidebar>
  );
};

export default LeftSidebar;
