import React, { Component } from 'react';
import '../css/App.css';
import '../../bootstrap.min.css';
import CharacterQuizz from './characterQuizz/components/CharacterQuizz';
import AddCardForm from './addCard/addCardForm'
import {shuffle, sample} from 'underscore';
import { BrowserRouter, Route } from 'react-router-dom'
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

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

function reducer(state = { cards, turnData: getTurnData(cards), highlight: '' }, action)
{
  switch (action.type){
    case 'ANSWER_SELECTED':
        const isCorrect = state.turnData.card.translations.some((tr) => tr === action.answer);
        return Object.assign(
          {}, 
          state,
          {highlight: isCorrect ? 'correct' : 'wrong'}
        );
    case 'CONTINUE':
        return Object.assign(
          {},
          state,
          {highlight:'', turnData: getTurnData(state.cards)}
        );
    case 'ADD_CARD':
        return Object.assign(
          {},
          state,
          {cards: state.cards.concat([action.card])}
        );
    default:
      return state;
  }
}

let store = Redux.createStore(reducer);

function Footer() {
  return(
    <footer className="row" style={{paddingTop : '20px'}}>
      <div className="col-12">
        <p className="text-muted credit">Footer</p>
      </div>
    </footer>
  )
}

class App extends Component {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <div className="container-fluid" id="App">
          <BrowserRouter>
            <React.Fragment>
              <Route exact path="/" render={() => <CharacterQuizz />} />
              <Route path="/addCard" component={AddCardForm} />
            </React.Fragment>
          </BrowserRouter>
          <Footer />
        </div>
      </ReactRedux.Provider>
    );
  }
}

export default App;
