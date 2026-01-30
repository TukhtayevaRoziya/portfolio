import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";

import style from "./Footer.module.css";
import { footerItems } from "../../utilities/datas";

const Footer2: React.FC = () => {
  const [value, setValue] = useState(0);

  const pathMap = footerItems.map((_, i) => (i === 0 ? "/" : `/${_.value}`));

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      className={"nav primary " + style.Footer}
    >
      {footerItems.map((item, i) => (
        <BottomNavigationAction
          key={i}
          icon={item.icon}
          value={item.value}
          component={NavLink}
          to={pathMap[i]}
          aria-label={item.value}
        />
      ))}
    </BottomNavigation>
  );
};

export default Footer2;
