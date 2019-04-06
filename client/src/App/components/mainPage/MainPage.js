import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const MainPage = ({trainingPageClick, onLoginClick, userToken, login}) => {
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


function mapStateToProps(state){
  return{
    login: state.user ? true : false
  }
}

function mapDispatchToProps(dispatch){
  return{
    trainingPageClick: (token) => {
      console.log('LOL');
      fetch('http://localhost:3000/api/cards?access_token=' + token,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:"GET"
      })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => dispatch({type: 'GET_CARDS', payload: json}))
    },
    onLoginClick:() => {
      dispatch({type:'TOGGLE_LOGIN_MODAL'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);