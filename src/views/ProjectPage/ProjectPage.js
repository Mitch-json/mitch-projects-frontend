import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import loadingGif from './loading.gif'

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import Loading from "../../components/Loading/Loading";
import VideoSection from "./Sections/VideoSection";
import DiagramSection from "./Sections/DiagramSection";
import DocumentationSection from "./Sections/DocumentationSection";

// Sections for this page


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [project, setProject] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
      getProject(props.id)
  }, [])

  const getProject = (id)=>{
      console.log(id)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/projects/${id}`)
    .then(response => response.json())
    .then(data => {
        if (data.project) {
            setProject(data.project)
            setLoading(false)
        }else{
            console.log(data)
            setLoading(false)
          }
      })
  }


  return (
    <div>
        <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="MITCH'S PROJECTS"
            rightLinks={<HeaderLinks username={props.username} history={props.history} />}
            fixed
            changeColorOnScroll={{
                height: 400,
            color: "white"
            }}
            {...rest}
        />
        {loading? (
            <Loading />
        ):(
            <div>
                <div>
                    <Parallax filter image={project.thumbImage}>
                        <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <Button
                                    color="success"
                                    size=""
                                    href="/dashboard"
                                    rel="noopener noreferrer"
                                >
                                    Back
                                </Button>
                                <br />
                                <h1 className={classes.title}>{project.title}</h1>
                                <h4>
                                    {project.description}
                                </h4>
                                <br />
                                {project.liveLink == "" ? <div></div>: 
                                    <Button
                                        color="info"
                                        size=""
                                        href={project.liveLink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Visit Website
                                    </Button>
                                }
                                {project.codeLink == "" ? <div></div>: 
                                    <Button
                                        color="success"
                                        size=""
                                        href={project.codeLink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        View Code
                                    </Button>
                                }
                            </GridItem>
                        </GridContainer>
                        </div>
                    </Parallax>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <div className={classes.container} style={{paddingBottom: "40px"}}>
                            {project.videoLink ? <VideoSection videoLink={project.videoLink}/>: <div></div>}
                            {project.diagram ? <DiagramSection diagram={project.diagram}/>: <div></div>}
                            {project.documentation ? <DocumentationSection documentation={project.documentation}/>: <div></div>}
                            
                        </div>
                    </div>
                </div>
            </div>
        )}
        <Footer />
    </div>
  );
}