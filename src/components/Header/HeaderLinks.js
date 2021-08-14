/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, AccountCircle, ExitToApp } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import store, { loadFromLocalStorage } from "../../redux/store.js";
import Axios from "axios";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const loginState = loadFromLocalStorage()
  if (loginState === undefined || !loginState.isLoggedIn) {
    let username;
  } else {
    let username = loginState.userName;
    
  }


  const logout = () => {
    store.dispatch({
        type: "SET_LOGOUT_STATE",
        payload: {
          userId: '',
          userName: '',
          email: ''
        }
      });
      Axios({
          method: 'GET',
          url: 'https://still-brook-51810.herokuapp.com/api/logout',
          withCredentials: true
      });

      props.history.push({
          pathname: '/login'
      });
  };

  const login = () => {
    props.history.push('/login')
  }
  const register = () => {
    props.history.push('/register')
  }
    
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {props.username ? 
          <CustomDropdown
            noLiPadding
            buttonText={username.toUpperCase()}
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={AccountCircle}
            dropdownList={[
              <Link to="/profile" className={classes.dropdownLink}>
                <i class="fas fa-cog"></i>
                PROFILE
              </Link>,
              
            ]}
          /> : 
          <Button
            onClick={logout}
            className={classes.navLink}
            color="transparent"
          >
            <ExitToApp className={classes.icons} /> LOGIN / REGISTER
          </Button>
        }
      </ListItem>
      {props.username ? 
        <ListItem className={classes.listItem}>
          <Button
            onClick={login}
            className={classes.navLink}
            color="transparent"
          >
            <ExitToApp className={classes.icons} /> LOGOUT
          </Button>
        </ListItem> :
        <ListItem className={classes.listItem}></ListItem>
      }
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow me on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://web.facebook.com/cliqq.jagger/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/its.mitch._/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
