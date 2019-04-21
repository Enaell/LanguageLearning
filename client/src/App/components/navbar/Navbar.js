import React from 'react';
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
import { Redirect } from 'react-router';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';



const Navbar = ({user, openLoginModal, openSigninModal, classes, history}) => {

  const [redirect, setRedirect] = React.useState(false);
  
  const handleSideMenuClick = () => {}

  const handleOnMainPageRedirectionClick = () => {
    history.push('/');  
  }

   return(
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleSideMenuClick} className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Link onClick={handleOnMainPageRedirectionClick}>
            <Typography style={{color: '#FFFFFF'}} variant="h6" noWrap>
              {translate('application-name')}
            </Typography>
          </Link>
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
      {redirect && <Redirect to='/'/>}
    </div>
  );
}

export default withRouter( Navbar );