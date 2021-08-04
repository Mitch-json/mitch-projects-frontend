import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './ProductSection.css'
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
    maxWidth: 320
  },
});
const useStyle = makeStyles(styles);

export default function ProductSection(props) {
  const classes = useStyles();
  const classe = useStyle();
  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    setProjects(props.projects)
  }, [])

  function add3Dots(string, limit)
  {
      var dots = "...";
      if(string.length > limit)
      {
        // you can also use substr instead of substring
        string = string.substring(0,limit) + dots;
      }
    
        return string;
  }


  return (
    <div className="Body">
      {/* {console.log(JSON.parse(projects[0].icon))} */}
      <div className="card-div">
        <div className="title">
          <h2 className={classe.title}>All Projects</h2>
        </div>
        {props.projects.map(project=>
          <Link to={`https://mitch-projects.herokuapp.com/projects/${project._id}`}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={project.thumbImage}
                  title={projects.title}
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {add3Dots(project.description, 90)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> 
          </Link>
        )}
      </div>
    </div>
  );
}
