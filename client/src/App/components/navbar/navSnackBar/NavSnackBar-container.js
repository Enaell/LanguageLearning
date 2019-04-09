import {connect} from 'react-redux';
import NavSnackBar from './NavSnackBar';

function mapStateToProps(state){
  return {
    open: state.navSnackBar.open,
    variant: state.navSnackBar.variant,
    message: state.navSnackBar.message
  }
}

function mapDispatchToProps(dispatch){
  return {
    closeSnackBar: () => {
      dispatch({type: 'TOGGLE_NAV_SNACKBAR'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (NavSnackBar)