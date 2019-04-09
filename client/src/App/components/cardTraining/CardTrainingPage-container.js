import {connect} from 'react-redux';
import CardTrainingPage from './CardTrainingPage'

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

export default connect(mapStateToProps, mapDispatchToProps) (CardTrainingPage);
