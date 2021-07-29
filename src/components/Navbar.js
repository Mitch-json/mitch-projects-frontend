import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

}));

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#1a73e8', position: 'fixed', top: 0 }} >
        <Toolbar>
            
            <Link style={{color: 'white'}} to='/dashboard'><ArrowBackIcon /> Back</Link>
          
         
        </Toolbar>
      </AppBar>
    </div>
  );
}