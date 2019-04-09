import { connect } from 'react-redux';
import Navbar from './Navbar';

function mapStateToProps(state)
{
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    openLoginModal:() => {
      dispatch({type: 'CHANGE_LOGIN_MODAL_TAB', payload: 0})
      dispatch({type: 'TOGGLE_LOGIN_MODAL'})
    },
    openSigninModal:() => {
      dispatch({type: 'CHANGE_LOGIN_MODAL_TAB', payload: 1})
      dispatch({type: 'TOGGLE_LOGIN_MODAL'})
    },
    onLogout:(token) => {
      console.log('logout');
      fetch("http://localhost:3000/api/customers/logout?access_token=" + token,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          // body: JSON.stringify(signinBody)
      })
      .then(() => dispatch({type:'LOGOUT'}))
      .catch((e) => {
        console.log(e);
        dispatch({type:'LOGOUT'});
      })
    }
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(Navbar);