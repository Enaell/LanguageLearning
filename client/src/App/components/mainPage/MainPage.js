import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import translate from 'counterpart';


const MainPage = ({trainingPageClick, onLoginClick, userToken}) => {
  const onTrainingPageClick = () => {
    trainingPageClick(userToken);
  }

  return(
    <div>
      <Typography variant="h3">{translate('mainPage.title')}</Typography>
      <Button onClick={onLoginClick}> {translate('connection.login')}</Button>
      <Button onClick={onTrainingPageClick}> Training</Button>
      <Button component={Link} to="/cardTraining">
        Link
      </Button>
    </div>
  );
}

export default MainPage;