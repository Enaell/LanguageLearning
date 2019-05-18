import { connect } from 'react-redux';
import WordPreview from './WordPreview';


function mapStateToProps(state){
  return {
    word: state.dictionary.wordPreview,
    open: state.dictionary.openWordPreview
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    closeWordPreview: () => {
      dispatch({type: 'CLEAN_SELECTED_WORDS'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WordPreview)