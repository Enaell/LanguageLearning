import { connect } from 'react-redux';
import MainPage from './MainPage'


function mapStateToProps(state){
  return{
    user: state.user
  }
}

function mapDispatchToProps(dispatch){
  return{
    trainingPageClick: (token) => {
      const getCardUrl = token ? 'http://localhost:3000/api/cards?access_token=' + token : 'http://localhost:3000/api/cards';
      fetch(getCardUrl,
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