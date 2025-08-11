import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import InsertDriveFileRounded from "@mui/icons-material/InsertDriveFileRounded";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";
import LocalOfferRounded from "@mui/icons-material/LocalOfferRounded";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import HomeRounded from "@mui/icons-material/HomeRounded";

import style from "./Footer.module.css";

export default class Footer2 extends Component {
  state = {
    value: 0,
    pathMap: ["/", "/resume", "/project", "/skills"],
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };
  render() {
    const { value, pathMap } = this.state;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={"nav primary " + style.Footer}
      >
        <BottomNavigationAction
          icon={<HomeRounded />}
          value="home"
          component={NavLink}
          to={pathMap[0]}
          aria-label="project"
        />
        <BottomNavigationAction
          icon={<AssignmentInd />}
          value="resume"
          component={NavLink}
          to={pathMap[1]}
          aria-label="project"
        />
        <BottomNavigationAction
          icon={<InsertDriveFileRounded />}
          value="project"
          component={NavLink}
          to={pathMap[2]}
          aria-label="project"
        />

        <BottomNavigationAction
          icon={<LocalOfferRounded />}
          value="service"
          component={NavLink}
          to={pathMap[3]}
          aria-label="project"
        />
      </BottomNavigation>
    );
  }
}
