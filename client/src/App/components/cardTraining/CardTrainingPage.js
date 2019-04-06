import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Link from 'react-router-dom/Link';
import {connect} from 'react-redux';

import CharacterCard from './CharacterCard/CharacterCard';
import TranslationList from './TranslationList/TranslationList';

import '../../css/cardTrainingPage.css'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});


function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-12">
        <h1>Character Quizz</h1>
        <p>Select the correct traduction of the character</p>
      </div>
    </div>
  );
}

function Turn(props) {
  const {card, translations, highlight, onAnswerSelected} = props;

  function highlightToBgColor(highlight){
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red',
    }
    return mapping[highlight];
  }

  return(
    <div className="row turn" style={{backgroundColor:highlightToBgColor(highlight)}}>
      <div className="col-4 offset-1">
        <CharacterCard {...card}/>
      </div>
      <div className="col-6">
        <TranslationList translations={translations} onAnswerSelected={onAnswerSelected} />
      </div>
    </div>
  );
}

Turn.propTypes = {
  card: PropTypes.shape({
    character: PropTypes.string.isRequired,
    pinying: PropTypes.string.isRequired,
    translations: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.string
  }),
  onAnswerSelected: PropTypes.func.isRequired,
  translations: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlight: PropTypes.string.isRequired
}


function Continue({show, onContinue}) {
  return (
    <div className="row">
    {
       show ?
        <div className="col-11"><button className="btn btn-primary btn-lg float-right" onClick={onContinue}> Continue </button></div>
      : null
    }
    </div>
  )
}

const CardTrainingPage = ({turnData, highlight, onAnswerSelected, classes, onContinue}) => 
  {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-8 offset-2 characterQuizz">
            <Hero />
            <Paper className={classes.root} elevation={3}>
              <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
            </Paper>
            <Continue show={highlight === 'correct'} onContinue={onContinue}/>
          </div>
        </div>
        <div className="row">
          <Link to="/addCard"> Add a new Card</Link>
        </div>
      </React.Fragment>
    );
  }



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
