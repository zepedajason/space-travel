import { NavLink } from "react-router-dom";

import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around", // Adjust spacing as needed
    padding: "10px", // Add padding to create space around the links
    backgroundColor: "lightgray", // Optional background color
  };

  const linkStyle = {
    textDecoration: "none", // Remove underline
    color: "blue", // Set link color
  };

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/spacecrafts" style={linkStyle}>
        Spacecrafts
      </NavLink>
      <NavLink to="/planets" style={linkStyle}>
        Planets
      </NavLink>
    </nav>
  );
}

export default NavigationBar;
