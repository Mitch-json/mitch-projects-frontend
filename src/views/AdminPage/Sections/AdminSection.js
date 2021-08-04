import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './AdminSection.css'
// @material-ui/icons

import { Link } from "react-router-dom";


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import { toast, ToastContainer } from "react-toastify";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    paddingBottom: 40,
    marginBottom: 30,
  },
  delete: {
    color: "red"
  },
  card: {
    maxHeight: 80
  },
  cardHeader: {
    textAlign: "center"
  }
});

export default function AdminSection(props) {
  const classes = useStyles();
  

  const deleteProject = (id)=>{
    fetch(`https://still-brook-51810.herokuapp.com/api/projects/delete-project/${id}`).then(res => {
        if(res.ok){
          return res.json()
        } 
      }).then(data => {
        if(data.msg){
            toast.success(data.msg)
        }else if(data.err){
            toast.error(data.err)
        }
        props.getProjects()
      })
  }

  return (
    <div className="Body">
      {/* {console.log(JSON.parse(projects[0].icon))} */}
      <div className="title">
        <h2>All Projects</h2>
      </div>
      <div className="card-div admin">
        {props.projects.map(project=>
          <div className="a-tag">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={project.thumbImage}
                  
                />
                <CardContent className={classes.card}>
                  <Typography gutterBottom variant="h5" className={classes.cardHeader} component="h2">
                    {project.title}
                  </Typography>
                  <div className="button-div">
                    <Button 
                      color="primary"
                      size=""
                      href={`/admin/edit-project/${project._id}#`}
                      rel="noopener noreferrer"
                    >
                      <EditIcon />  Edit
                    </Button>
                    <Button className={classes.delete} onClick={(e)=> {e.preventDefault(); deleteProject(project._id)}}
                      color="red"
                      size=""
                      href="#"
                      rel="noopener noreferrer"
                    >
                      <DeleteForeverIcon />  Delete
                    </Button>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card> 
          </div>
        )}
      </div>
    </div>
  );
}
