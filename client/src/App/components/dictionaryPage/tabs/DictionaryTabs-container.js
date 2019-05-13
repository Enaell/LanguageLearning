import { connect } from 'react-redux';
import DictionaryTabs from './DictionaryTabs';


function mapStateToProps(state){
  return {
    dictionary: state.dictionary.words
  }
}

export default connect(mapStateToProps)(DictionaryTabs)