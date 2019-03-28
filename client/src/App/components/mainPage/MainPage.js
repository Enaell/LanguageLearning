import React, {Component} from 'react';
import { connect } from 'react-redux';
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

// function mapStateToProps(state){
//   return {
//     userToken: state.user.token,
//   }
// }

function mapDispatchToProps(dispatch){
  return{
    trainingPageClick: () => {
      console.log('LOL');
      fetch('http://localhost:3000/api/cards?access_token=',
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
      fetch("http://localhost:3000/api/customers/login",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"username":"admin","password":"admin"})
        })
        .then((res) => {
          return res.json();
        })
        .then((json) => dispatch({type: 'LOGIN', payload: json}));
    }
  }
}

export default connect(null, mapDispatchToProps)(MainPage);