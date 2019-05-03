import { connect } from 'react-redux';
import DictionaryTabs from './DictionaryTabs';


function mapStateToProps(state){
  console.log('dictionary in mapstatetoprops');
  console.log(state.dictionary)
  return {
    dictionary: state.dictionary
  }
}

function mapDispatchToProps(dispatch){
  return{
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DictionaryTabs)