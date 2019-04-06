import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';


const LoginModal = ({onLogin, onSignin, closeModal, open, tabNumber, changeTabNumber}) => {

  function handleTabChange(event, newValue){
    changeTabNumber(newValue);
  }

  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleUserNameChange(e){
    setUsername(e.target.value);
  }

  function handleEmailAddressChange(e){
    setEmailAddress(e.target.value);
  }

  function handlePasswordChange(e){
    setPassword(e.target.value);
  }

  const onSigninClick = () => {
    console.log('name : ' + name +'username : ' + username + 'emailAddress : ' + emailAddress + 'password' + password)
    onSignin(name, username, emailAddress, password);
  }

  const onLoginClick = () => {
    console.log('username : ' + username + 'emailAddress : ' + emailAddress + 'password' + password)
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
            <div>
              <TextField
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                onChange={handleNameChange}
                fullWidth
              />
              <TextField
                margin="dense"
                id="userName"
                label="User Name"
                type="text"
                onChange={handleUserNameChange}
                fullWidth
              />

              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                onChange={handlePasswordChange}
                fullWidth
              />
            </div>}
            {tabNumber === 1 &&
            <div>
              <TextField
                margin="dense"
                id="name"
                label="User Name"
                type="text"
                onChange={handleUserNameChange}
                fullWidth
              />
              <TextField
                required
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                onChange={handleEmailAddressChange}
                fullWidth
              />
              <TextField
                required
                margin="dense"
                id="password"
                label="Password"
                type="password"
                onChange={handlePasswordChange}
                fullWidth
              />
              <TextField
                required
                margin="dense"
                id="name"
                label="name"
                type="text"
                onChange={handleNameChange}
                fullWidth
              />
            </div>}
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
          dispatch({type: 'LOGIN', payload: json});
          dispatch({type: 'TOGGLE_LOGIN_MODAL', payload: 0});
        });
    },
    onSignin:(name, username, emailAddress, password) => {

      const signinBody =  {"name": name, "email": emailAddress, "username": username,"password": password};
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
          dispatch({type: 'TOGGLE_LOGIN_MODAL', payload: 0});
        });
    },
    changeTabNumber:(tabNumber) =>{
      dispatch({type: 'CHANGE_LOGIN_MODAL_TAB', payload: tabNumber});
    },
    closeModal:() => {
      dispatch({type: 'TOGGLE_LOGIN_MODAL', payload: 0});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
