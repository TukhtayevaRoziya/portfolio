import React, { FC } from "react";
import { BottomNavigationAction } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FooterNavItemProps } from "../../utilities/types";



const FooterNavItem: FC<FooterNavItemProps> = ({ icon, index, pathMap, label }) => {
  return (
    <BottomNavigationAction
      icon={icon}
      value={pathMap[index]}
      component={NavLink}
      to={pathMap[index]}
      aria-label={label}
    />
  );
};

export default FooterNavItem;
