import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class nomatch extends Component {
  render() {
    return (
      <p>Page not found, click <Link to="/"> <u>here</u></Link>  to return to home page.</p>
    );
  }
}

export default nomatch;
