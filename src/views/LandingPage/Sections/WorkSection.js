import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './WorkSection.css'

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { toast } from "react-toastify";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [button, setButton] = useState("outlined")

  const handleSubmit = ()=>{
    if (name && email && message) {
      setButton("disabled")
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name, email: email, message: message})
      };
      fetch('http://still-brook-51810.herokuapp.com/api/send-message', requestOptions)
          .then(response => response.json())
          .then(data => {
              if(data.msg){
                  toast.success(data.msg)
                  setName("")
                  setEmail("")
                  setMessage("")
              }else if(data.err){
                  toast.error(data.err)
              }
              setButton("outlined")
      });      
    } else {
      toast.error("please ensure that you fill the name, email and message fields")
    }
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with me</h2>
          <h4 className={classes.description}>
            My name is Mitch Macharia. If you would like to contact me for any specific reason, you can go ahead and type your message below.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} className="message-input">
                <FormControl className="Your Name" fullWidth={true}>
                  <InputLabel htmlFor="my-input">Your Name</InputLabel>
                  <Input id="my-input" fullWidth={true} onChange={(e)=> setName(e.target.value)} />
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} className="message-input">
                <FormControl className="Your Name" fullWidth={true}>
                  <InputLabel htmlFor="my-input">Your Email</InputLabel>
                  <Input id="my-input" fullWidth={true} onChange={(e)=> setEmail(e.target.value)}/>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} className="message-input">
                <FormControl className="Your Name" fullWidth={true}>
                  <InputLabel htmlFor="my-input">Your Message</InputLabel>
                  <Input id="my-input" fullWidth={true} onChange={(e)=> setMessage(e.target.value)}/>
                </FormControl>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button variant={button} color="primary" onClick={handleSubmit} >Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
