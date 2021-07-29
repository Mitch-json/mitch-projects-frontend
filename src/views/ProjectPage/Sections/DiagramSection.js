import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './DiagramSection.css'


import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginBottom: "30px",
  },
});
const useStyle = makeStyles(styles);

function DiagramSection(props) {
    const classes = useStyles();
    const classe = useStyle();

    return (
        <div className="Body">
        {/* {console.log(JSON.parse(projects[0].icon))} */}
        <div className="diagram-container">
            <div className="title">
                <h2 className={classe.title}>Diagram</h2>
            </div>
            <Card className={classes.root}>
            <CardActionArea className="diagram-div">
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                
                image={props.diagram}
                
                />
            </CardActionArea>
            </Card> 
        </div>
        </div>
    )
}

export default DiagramSection
