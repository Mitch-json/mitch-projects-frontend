import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './TeamSection.css'

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/img/faces/Mitch.png";
import team2 from "../../../assets/img/faces/Mitch.png";
import team3 from "../../../assets/img/faces/Mitch.png";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>About Me</h2>
      <div>
        <GridContainer >
          <GridItem xs={12} sm={12} md={4} className="container">
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Mitch Macharia
                <br />
                <small className={classes.smallTitle}>AI Engineer | Software Engineer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  I possess programming skills such as : Artificial Intelligence, Full Stack Web Development, Mobile App Development, Data Science, MicroProcessor Project Development, Database Management Systems.
                </p>
                <p className={classes.description}>
                  I am currently studying Engineering Artificial Intelligence at Carnegie Mellon University. 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  href='https://www.linkedin.com/in/mitch-macharia/'
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  href='https://github.com/Mitch-json?tab=repositories'
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  );
}
