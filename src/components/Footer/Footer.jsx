import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import InsertDriveFileRoundedIcon from "@material-ui/icons/InsertDriveFileRounded";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import style from "./Footer.module.css";

export default class Footer extends Component { 
  state = {
    value: 0,
    pathMap: ["/", "/resume", "/project", "/skills"],
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value, pathMap } = this.state;
    return (
      <>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={"nav primary " + style.Footer}
        >
          <BottomNavigationAction
            icon={<HomeRoundedIcon />}
            value="home"
            component={NavLink}
            to={pathMap[0]}
          />
          <BottomNavigationAction
            icon={<AssignmentIndIcon />}
            value="resume"
            component={NavLink}
            to={pathMap[1]}
          />
          <BottomNavigationAction
            icon={<InsertDriveFileRoundedIcon />}
            value="project"
            component={NavLink}
            to={pathMap[2]}
          />

          <BottomNavigationAction
            icon={<LocalOfferRoundedIcon />}
            value="service"
            component={NavLink}
            to={pathMap[3]}
          />
        </BottomNavigation>
      </>
    );
  }
}