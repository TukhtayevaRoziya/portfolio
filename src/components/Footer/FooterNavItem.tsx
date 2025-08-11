import React from "react";
import { BottomNavigationAction } from "@mui/material";
import { NavLink } from "react-router-dom";

interface FooterNavItemProps {
  icon: React.ReactNode;
  index: number;
  pathMap: string[];
  label: string;
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ icon, index, pathMap, label }) => {
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
