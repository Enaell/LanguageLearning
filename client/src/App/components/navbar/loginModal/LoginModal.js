import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm'
import SigninForm from './SigninForm'
import { connect } from 'react-redux';


const LoginModal = ({onLogin, onSignin, closeModal, open, tabNumber, changeTabNumber}) => {

  function handleTabChange(event, newValue){
    changeTabNumber(newValue);
  }

  const [username, setUsername] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");


  function handleUserNameChange(e){
    setUsername(e.target.value);
  }

  function handleEmailChange(e){
    setEmailAddress(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }

  const onSigninClick = () => {
    onSignin(username, emailAddress, password);
  }

  const onLoginClick = () => {
    onLogin(username, emailAddress, password);
  }

  return (
    <div>
      <Dialog open={open} onClose={closeModal} aria-labelledby="form-dialog-title">
          <DialogContent>
            <Tabs
              value={tabNumber}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Login"/>
              <Tab label="Signin"/>
            </Tabs>
            {tabNumber === 0 && 
              <LoginForm 
                handleEmailChange = {handleEmailChange} 
                handleUserNameChange = {handleUserNameChange} 
                handlePasswordChange = {handlePasswordChange}>
              </LoginForm>
            }
            {tabNumber === 1 &&
              <SigninForm
                handleEmailChange = {handleEmailChange} 
                handleUserNameChange = {handleUserNameChange} 
                handlePasswordChange = {handlePasswordChange}>
              </SigninForm>
            }
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="primary">
              Cancel
            </Button>
            {tabNumber === 0 && 
            <Button onClick={onLoginClick} color="primary">
              Login
            </Button>}
            {tabNumber === 1 && 
            <Button onClick={onSigninClick} color="primary">
              Signin
            </Button>}
          </DialogActions>
      </Dialog>
    </div>
  );
}

function mapStateToProps(state)
{
  return {
    open: state.loginModal.open,
    tabNumber: state.loginModal.tab,
  }
}

function mapDispatchToProps(dispatch){
  return {
    onLogin:(username, emailAddress, password) => {
      const loginBody = username !== '' ? {"username":username,"password":password} : {"email":emailAddress,"password":password};
      fetch("http://localhost:3000/api/customers/login",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(loginBody)
        })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          if (json.error){
            dispatch({type: 'TOGGLE_LOGIN_MODAL'});
            dispatch({type: 'SET_NAV_SNACKBAR', payload: {variant: 'error', message: "Login Error !"}});
            dispatch({type: 'TOGGLE_NAV_SNACKBAR'})
          }
          else
          {
            dispatch({type: 'LOGIN', payload: json});
            dispatch({type: 'TOGGLE_LOGIN_MODAL'});
          }
        })
        .catch((e) => {
          console.log(e);
          dispatch({type: 'TOGGLE_LOGIN_MODAL'});
          dispatch({type: 'SET_NAV_SNACKBAR', payload: {variant: 'error', message: "Login Error !"}});
          dispatch({type: 'TOGGLE_NAV_SNACKBAR'})
        });
    },
    onSignin:(username, emailAddress, password) => {
      const signinBody =  {"name": username, "email": emailAddress, "username": username,"password": password};
      fetch("http://localhost:3000/api/customers",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(signinBody)
        })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          dispatch({type: 'LOGIN', payload: json});
          dispatch({type: 'TOGGLE_LOGIN_MODAL'});
        });
    },
    changeTabNumber:(tabNumber) =>{
      dispatch({type: 'CHANGE_LOGIN_MODAL_TAB', payload: tabNumber});
    },
    closeModal:() => {
      dispatch({type: 'TOGGLE_LOGIN_MODAL'});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
