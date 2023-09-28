import { NavLink } from "react-router-dom";

import styles from "./NavigationBar.module.css";
import { useState } from "react";

function NavigationBar() {
  return (
    <nav className={styles["nav-bar"]}>
      <NavLink to="/" className={styles["nav-link"]}>
        🌎Home
      </NavLink>
      <NavLink to="/spacecrafts" className={styles["nav-link"]}>
        🚀Spacecrafts
      </NavLink>
      <NavLink to="/planets" className={styles["nav-link"]}>
        🪐Planets
      </NavLink>
    </nav>
  );
}

export default NavigationBar;
