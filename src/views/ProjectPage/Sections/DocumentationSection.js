import { Card } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import './DocumentationSection.css'

const useStyles = makeStyles({
    doc:{
        margin: "auto",
        marginBottom: "30px",
        maxWidth: 600,
        paddingBottom: 100
    }
});

const useStyle = makeStyles(styles);

function DocumentationSection(props) {
    const classes = useStyles();
    const classe = useStyle();

    return (
        <div className="Body">
            <div className="documentaion-container">
                <div className="title">
                    <h2 className={classe.title}>Documentation</h2>
                </div>
                <Card  className={`${classes.doc} documentation`} dangerouslySetInnerHTML={{ __html: props.documentation }}>
                    
                </Card>
            </div>
        </div>
    )
}

export default DocumentationSection
