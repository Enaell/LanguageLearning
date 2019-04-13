import React from 'react';
import PropTypes, { func } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import LoginModal from './loginModal/LoginModal-container';
import NavSnackBar from './navSnackBar/NavSnackBar-container';
import UserBar from './userBar/UserBar-container'
import translate from 'counterpart';


const Navbar = ({user, openLoginModal, openSigninModal, classes}) => {
   return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            {translate('application-name')}
          </Typography>
          <div className={classes.grow} />
          {user.id ? 
            <UserBar/>
          :
            <div>
              <Button color="inherit" onClick={openLoginModal}>
                {translate('connection.login')}
              </Button>
              <Button color="inherit" onClick={openSigninModal}>
                {translate('connection.signin')}
              </Button>
              <LoginModal/>
            </div>
          }
        </Toolbar>
      </AppBar>
      <NavSnackBar></NavSnackBar>
    </div>
  );
}

export default Navbar;