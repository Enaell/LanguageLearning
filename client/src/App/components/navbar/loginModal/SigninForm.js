import React from 'react';
import { Column, Row } from 'simple-flexbox';
import TextField from '@material-ui/core/TextField';
import translate from 'counterpart';


const SigninForm = ({handleEmailChange, handleUserNameChange, handlePasswordChange, passwordError, usernameError, emailAddressError}) => {
  return(
    <Column>
    <Row horizontal='space-between'>
      <TextField
        error = {usernameError}
        helperText = {usernameError ? translate('connection.usernameError') : null}       
        required
        margin="dense"
        id="name"
        label="User Name"
        type="text"
        onChange={handleUserNameChange}
        fullWidth
      />
    </Row>
    <Row>
      <TextField
        error = {emailAddressError}
        helperText = {emailAddressError ? translate('connection.emailError') : null} 
        required
        margin="dense"
        id="email"
        label="Email Address"
        type="email"
        onChange={handleEmailChange}
        fullWidth
      />
    </Row>
    <Row>
      <TextField
        error = {passwordError}
        helperText = {passwordError ? translate('connection.passwordError') : null}
        required
        margin="dense"
        id="password"
        label="Password"
        type="password"
        onChange={handlePasswordChange}
        fullWidth
      />
    </Row>
  </Column>  );
}

export default SigninForm;