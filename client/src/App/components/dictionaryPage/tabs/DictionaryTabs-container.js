import { connect } from 'react-redux';
import DictionaryTabs from './DictionaryTabs';


function mapStateToProps(state){
  return {
    dictionary: state.dictionary.words
  }
}

function mapDispatchToProps(dispatch){
  return{
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DictionaryTabs)