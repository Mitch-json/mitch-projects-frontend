import React from 'react'
import classNames from "classnames";
import Footer from '../Footer/Footer'
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'
import Parallax from '../Parallax/Parallax'
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import loadingGif from './loading.gif'
import './Loading.css'

const useStyles = makeStyles(styles);

function Loading() {
    const classes = useStyles();
    return (
        <div>
                <Parallax filter image={require('./code-wallpaper-38.jpg')} className="parallex">
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Loading......</h1>
                                <h4>
                                    Loading......
                                </h4>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container} id="loading-div">
                        <img className="loading" src={loadingGif} alt="Loading..."></img>
                    </div>
                </div>
        </div>
    )
}

export default Loading
