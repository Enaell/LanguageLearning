import { connect } from 'react-redux';
import WordPreview from './WordPreview';


function mapStateToProps(state){
  return {
    word: state.dictionary.words
  }
}

export default connect(mapStateToProps)(WordPreview)