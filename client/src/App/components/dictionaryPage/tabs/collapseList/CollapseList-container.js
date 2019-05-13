import { connect } from 'react-redux';
import CollapseList from './CollapseList';

function mapStateToProps(state){
  return {
    selectedWords: state.dictionary.selectedWords
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateSelectedWords: (word) =>{
      dispatch({type: 'UPDATE_SELECTED_WORDS', payload: word})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollapseList)