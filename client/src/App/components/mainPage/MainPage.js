import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MainPage = ({onTrainingPageClick}) => {
  return(
    <div>
      <h1>Main Page</h1>
      <Button onClick={onTrainingPageClick}> Training</Button>
      <Button component={Link} to="/cardTraining">
        Link
      </Button>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return{
    onTrainingPageClick: () => { 
      dispatch({type: 'GET_CARDS'});
      dispatch({type: 'LOG_STATE'});
    },    
  }
}

export default connect(null, mapDispatchToProps)(MainPage);