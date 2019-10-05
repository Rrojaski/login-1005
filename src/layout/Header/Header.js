import React from 'react';
import { Link } from 'react-router-dom';

// Scss
import styles from './Header.module.scss';

// Components
import AppBar from '@material-ui/core/AppBar';

function Header(props) {
  return (
    <div className={styles.Header} >
      <AppBar title='Navigation' />
    </div>
  );
}

export default Header;