import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './VideoSection.css'
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { AddShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: "auto",
    marginBottom: "30px",
  },
  CardActionArea:{
    width: "100%",
    
  },
  CardMedia:{
    minHeight: 400
  }
});
const useStyle = makeStyles(styles);

export default function ProductSection(props) {
  const classes = useStyles();
  const classe = useStyle();


  return (
    <div className="Body">
      {/* {console.log(JSON.parse(projects[0].icon))} */}
      <div className="video-div">
        <div className="title">
          <h2 className={classe.title}>Video</h2>
        </div>
            <Card className={classes.root}>
              <CardActionArea className={classes.CardActionArea}>
                <CardMedia
                  component="iframe"
                  alt="Contemplative Reptile"
                  height="100%"
                  width="100%"
                  className={classes.CardMedia}
                  src={props.videoLink}
                  allowFullScreen={true}
                />
                <CardContent>
                  
                  <Typography variant="h5" component="h2">
                    A Video Demonstrating The Project
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
      </div>
    </div>
  );
}
