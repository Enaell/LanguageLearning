import React, { Component } from 'react';
import '../css/App.css';
import '../../bootstrap.min.css';
import CharacterQuizz from './characterQuizz/components/CharacterQuizz.js';
import {shuffle, sample} from 'underscore';
import PropTypes, { func } from 'prop-types';


import ReactDOM from 'react-dom';
import { stat } from 'fs';

console.log(React.version);

const cards = [
  {
    character: '月',
    pinying: 'yue',
    translations:['la lune', 'un mois'],
    comments:''
  },
  {
    character: '天',
    pinying: 'tian',
    translations: ['le ciel', 'un jour'],
    comments:''
  },
  {
    character: '年',
    pinying:'nian',
    translations:['une annee', 'un an'],
    comments:''
  },

  { 
    character: '热',
    pinying: 're',
    translations:['chaud', 'avoir chaud'],
    comments:''
  },
  {
    character: '冷',
    pinying: 'leng',
    translations:['froid', 'avoir froid'],
    comments:''
  },
  {
    character: '是',
    pinying: 'shi',
    translations:['etre'],
    comments:''
  },
  {
    character: '有',
    pinying: 'you',
    translations:['avoir'],
    comments:''
  },
  {
    character: '吃',
    pinying: 'chi',
    translations:['manger'],
    comments:''
  },
  {
    character: '喝',
    pinying: 'he',
    translations:['boire'],
    comments:''
  }
];

function getTurnData(cards){
  const allTranslations = cards.reduce(function(p,c,i){
    return p.concat(c.translations);
  }, []);
  const fourRandomTranslations = shuffle(allTranslations).slice(0, 4);
  const answer = sample(fourRandomTranslations);

  return {
    card: cards.find((card) =>
      card.translations.some((translation) =>
        translation === answer)
    ),
    translations: fourRandomTranslations
  }
}


const state = {
  turnData: getTurnData(cards),
  highlight: ''
};

function Footer() {
  return(
    <footer className="row" style={{paddingTop : '20px'}}>
      <div className="col-12">
        <p className="text-muted credit">Footer</p>
      </div>
    </footer>
  )
}

function onAnswerSelected(answer){
  const isCorrect = state.turnData.card.translations.some((tr) => tr === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';

  console.log(state);

  ReactDOM.render(<App />, document.getElementById('root'));

}

class App extends Component {
  
  render() {
    return (
      <div className="container-fluid" id="App">
        <CharacterQuizz {...state} onAnswerSelected={onAnswerSelected} />
        <Footer />
      </div>
    );
  }
}

export default App;
