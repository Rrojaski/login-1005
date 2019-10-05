import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route } from 'react-router-dom'



// Components
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
// Layout
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Login from './layout/Content/Login';

// SCSS
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <BrowserRouter>



        <div className={`${styles.App}`} >



          <AppBar title='test' />
          <Header />

          {/* Content */}
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>

          <Footer />

        </div>
      </BrowserRouter >

    );
  }
}

App.propTypes = {

};

export default App;