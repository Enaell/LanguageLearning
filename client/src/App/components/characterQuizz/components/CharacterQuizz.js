import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CharacterCard from './CharacterCard/CharacterCard';
import TranslationList from './TranslationList/TranslationList';

import '../css/CharacterQuizz.css'

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
        <p>Select the correct traduction the character</p>
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
        {/* {translations.map((tr) => <Translation translation={tr} key={tr}/>)} */}
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


function Continue() {
  return (
    <div>
    </div>
  )
}

function CharacterQuizz(props) {
  // console.log('CharacterQuizz')
  // console.log(...turnData);
  const { turnData, highlight, onAnswerSelected, classes } = props;

  return (
    <div className="row">
      <div className="col-8 offset-2 characterQuizz">
        <Hero />
        <Paper className={classes.root} elevation={3}>
          <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
          <Continue />
        </Paper>
      </div>
    </div>
  );
}

CharacterQuizz.propTypes = {
  onAnswerSelected: PropTypes.func.isRequired
}

export default withStyles(styles)(CharacterQuizz);
