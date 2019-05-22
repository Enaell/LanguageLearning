import { connect } from 'react-redux';
import DictionaryTabs from './DictionaryTabs';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  filter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: '20px',
  },
  filterTitle: {
    height: '14px',
    width: '32px',
    color: '#595959',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '14px',
  },
  filterInput: {
    height: '30px',
    width: '200px',
    border: '1px solid #cccccc',
    borderRadius: '18px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: '10px',
    paddingRight: '10px',
    margin: '10px',
  }
});

function mapStateToProps(state){
  return {
    words: state.dictionary.words,
    openWordPreview: state.dictionary.openWordPreview
  }
}

export default withStyles(styles)(connect(mapStateToProps)(DictionaryTabs))