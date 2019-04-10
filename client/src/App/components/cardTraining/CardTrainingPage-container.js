import {connect} from 'react-redux';
import CardTrainingPage from './CardTrainingPage'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function mapStateToProps(state){
  return {
    turnData: state.turnData,
    highlight: state.highlight
  }
}

function mapDispatchToProps(dispatch){
  return{
    onAnswerSelected: (payload) => { 
      dispatch({type: 'ANSWER_SELECTED', payload});
    },
    onContinue: () => {
      dispatch({type: 'CONTINUE'});
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (withStyles(styles)(CardTrainingPage));
