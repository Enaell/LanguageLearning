import { connect } from 'react-redux';
import MainPage from './MainPage'


function mapStateToProps(state){
  return{
  }
}

function mapDispatchToProps(dispatch){
  return{
    onLoginClick:() => {
      dispatch({type:'TOGGLE_LOGIN_MODAL'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);