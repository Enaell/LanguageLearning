import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const MainPage = ({trainingPageClick, onLoginClick, userToken}) => {
  const onTrainingPageClick = () => {
    trainingPageClick(userToken);
  }

  return(
    <div>
      <h1>Main Page</h1>
      <Button onClick={onLoginClick}> Login</Button>
      <Button onClick={onTrainingPageClick}> Training</Button>
      <Button component={Link} to="/cardTraining">
        Link
      </Button>
    </div>
  );
}

export default MainPage;