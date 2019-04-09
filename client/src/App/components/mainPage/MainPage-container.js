import { connect } from 'react-redux';
import MainPage from './MainPage'


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