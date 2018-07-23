import React from 'react'
import './NavBar.css'
import { AppBar, Toolbar, Typography, Grid} from '@material-ui/core'

const NavBar = props => (
  <AppBar position="static">
    <Toolbar>
      <Grid item xs={3}>
        <Typography variant="headline">SpongeBob Friends </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="headline">{props.message}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="headline">
          CurrentScore: {props.currentScore}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="headline">TopScore: {props.topScore}</Typography>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default NavBar;