import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Column, Row } from 'simple-flexbox';
import TextField from '@material-ui/core/TextField';


const LoginForm = ({handleEmailChange, handleUserNameChange, handlePasswordChange, passwordError, usernameError, emailAddressError}) => {
  
  const emailMessage = usernameError ? 'Please fill the username or email field' : (emailAddressError ? 'Please enter a valid email address' : null)
  console.log('LOGIN FORM passwordError ' + passwordError + 'userError ' + usernameError + 'emailError ' + emailAddressError);
  return(
    <Column>
      <Row>
      <TextField
          error = {usernameError}
          helperText = {usernameError ? 'Please fill the username or email field' : null} 
          margin="dense"
          id="userName"
          label="User Name"
          type="text"
          onChange={handleUserNameChange}
        />
        <Column vertical="end">
          <Typography gutterBottom variant="body1" style={{paddingBottom: '5px', paddingRight:'15px', paddingLeft:'15px'}}> Or* </Typography>
        </Column>
        <TextField
          error = {usernameError || emailAddressError}
          helperText = {emailMessage} 
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          onChange={handleEmailChange}
        />
      </Row>
      <Row>
        <TextField
          error = {passwordError}
          helperText = {passwordError ? 'Please fill the password field' : null} 
          required
          margin="dense"
          id="password"
          label="Password"
          type="password"
          onChange={handlePasswordChange}
          fullWidth
        />
      </Row>
    </Column>
  );
}

export default LoginForm;