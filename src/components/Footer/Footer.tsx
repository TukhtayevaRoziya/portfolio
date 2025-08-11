import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import InsertDriveFileRounded from "@mui/icons-material/InsertDriveFileRounded";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import LocalOfferRounded from "@mui/icons-material/LocalOfferRounded";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import HomeRounded from "@mui/icons-material/HomeRounded";
import ChatIcon from "@mui/icons-material/Chat";

import style from "./Footer.module.css";

const Footer2: React.FC = () => {
  const [value, setValue] = useState(0);

  const items = [
    { icon: <HomeRounded />, value: "home" },
    { icon: <AssignmentInd />, value: "resume" },
    { icon: <InsertDriveFileRounded />, value: "project" },
    { icon: <LocalOfferRounded />, value: "skills" },
    { icon: <ChatIcon />, value: "chat" },
  ];

  const pathMap = items.map((_, i) =>
    i === 0 ? "/" : `/${items[i].value}`
  );

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      className={"nav primary " + style.Footer}
    >
      {items.map((item, i) => (
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
