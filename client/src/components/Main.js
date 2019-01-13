import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: '#4384AB' }, // change color of AppBar
      }
    });
    return (
      <div className="mainContainer">
        <div className="headlineOverlay">
            <div className="headlineContainer">
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <h1 className="headline">Apply to the top universities in the world today!</h1>
                </Grid>
                <Grid>
                  <MuiThemeProvider theme={theme}>
                    <Fab component={Link} to="/register" variant="extended" className="getStarted" color="primary">Get started</Fab>
                  </MuiThemeProvider>
                </Grid>
              </Grid>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
