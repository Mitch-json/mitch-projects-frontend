import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
import AdminSection from "./Sections/AdminSection.js";
import Loading from "../../components/Loading/Loading.js";
import { ToastContainer } from "react-toastify";


// Sections for this page


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AdminPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
  }, [])

  function getProjects(){
    fetch("https://still-brook-51810.herokuapp.com/api/projects").then(res => {
        if(res.ok){
          return res.json()
        } 
      }).then(data => {
          if (data) {
            setProjects(data.projects)
            setLoading(false)
          }
      })
  }
  

  return (
    <div>
      <ToastContainer />
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
            <Parallax filter image="https://res.cloudinary.com/killer-infographics-inc/image/upload/v1582154400/Blog%20Workbench%20Headers/Motion%20Graphics%20Design%20Agency%20Illustration.jpg">
              <div className={classes.container}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <h1 className={classes.title}>Admin</h1>
                    <h4>
                      Welcome Back Mitch
                    </h4>
                    <br />
                    <Button
                      color="info"
                      size=""
                      href="/admin/add-project"
                      rel="noopener noreferrer"
                    >
                      Add a project
                    </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <AdminSection projects={projects} history={props.history} getProjects={getProjects}/>
              </div>
            </div>
          </div>
      )}
      <Footer />
    </div>
  );
}

