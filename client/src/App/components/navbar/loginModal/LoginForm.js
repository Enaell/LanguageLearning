import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Column, Row } from 'simple-flexbox';
import TextField from '@material-ui/core/TextField';


const LoginForm = ({handleEmailChange, handleUserNameChange, handlePasswordChange}) => {
  return(
    <Column>
      <Row>
      <TextField
          margin="dense"
          id="userName"
          label="User Name"
          type="text"
          onChange={handleUserNameChange}
        />
        <Column vertical="end">
          <Typography gutterBottom variant="body1" style={{paddingBottom: '5px', paddingRight:'15px', paddingLeft:'15px'}}> Or </Typography>
        </Column>
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          onChange={handleEmailChange}
        />
      </Row>
      <Row>
        <TextField
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