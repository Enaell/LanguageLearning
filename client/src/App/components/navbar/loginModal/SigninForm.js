import React from 'react';
import { Column, Row } from 'simple-flexbox';
import TextField from '@material-ui/core/TextField';


const SigninForm = ({handleEmailChange, handleUserNameChange, handlePasswordChange}) => {
  return(
    <Column>
    <Row horizontal='space-between'>
      <TextField
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