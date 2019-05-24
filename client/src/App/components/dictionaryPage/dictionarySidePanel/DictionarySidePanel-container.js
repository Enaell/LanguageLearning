import { connect } from 'react-redux';
import DictionarySidePanel from './DictionarySidePanel';


function mapStateToProps(state){
  return {
    word: state.dictionary.wordPreview,
    open: state.dictionary.openWordPreview,
    selectedWords: state.dictionary.selectedWords
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    closeWordPreview: () => {
      dispatch({type: 'CLEAN_SELECTED_WORDS'})
    },
    setWordPreview: (word) => {
      dispatch({type: 'SET_WORD_PREVIEW', payload: word})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DictionarySidePanel)