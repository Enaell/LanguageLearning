import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';
import translate from 'counterpart';


const LoginModal = ({onLogin, onSignin, closeModal, open, tabNumber, changeTabNumber}) => {

  const [username, setUsername] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [usernameError, setUsernameError] = React.useState(false);
  const [emailAddressError, setEmailAddressError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

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

    const usError = username === '';
    const pError =  password === '';
    const eaError = !emailAddress.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    setUsernameError(usError);
    setPasswordError(pError);
    setEmailAddressError(eaError);

    if (!(usError || pError || eaError))
      onSignin(username, emailAddress, password);
  }

  const onLoginClick = () => {

    const usError = !(username !== '' || emailAddress !== '');
    const pError =  password === '';
    const eaError = username === '' && emailAddress !== '' && !emailAddress.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    setUsernameError(usError);
    setEmailAddressError(eaError);
    setPasswordError(pError);

    if (!(usError || pError || eaError))
      onLogin(username, emailAddress, password);
  }

  function handleTabChange(event, newValue){
    setUsernameError(false);
    setPasswordError(false);
    setEmailAddressError(false);

    changeTabNumber(newValue);
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
              <Tab label={translate('connection.login')}/>
              <Tab label={translate('connection.signin')}/>
            </Tabs>
            {tabNumber === 0 && 
              <LoginForm 
                handleEmailChange = {handleEmailChange} 
                handleUserNameChange = {handleUserNameChange} 
                handlePasswordChange = {handlePasswordChange}
                passwordError = {passwordError}
                emailAddressError = {emailAddressError}
                usernameError = {usernameError}
              >
              </LoginForm>
            }
            {tabNumber === 1 &&
              <SigninForm
                handleEmailChange = {handleEmailChange} 
                handleUserNameChange = {handleUserNameChange} 
                handlePasswordChange = {handlePasswordChange}
                passwordError = {passwordError}
                emailAddressError = {emailAddressError}
                usernameError = {usernameError}
              >
              </SigninForm>
            }
          </DialogContent>
          <DialogActions>
            <Button onClick={closeModal} color="primary">
              Cancel
            </Button>
            {tabNumber === 0 && 
            <Button onClick={onLoginClick} color="primary">
              {translate('connection.login')}
            </Button>}
            {tabNumber === 1 && 
            <Button onClick={onSigninClick} color="primary">
              {translate('connection.signin')}
            </Button>}
          </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginModal;
