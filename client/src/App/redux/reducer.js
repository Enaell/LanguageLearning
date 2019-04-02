import {shuffle, sample} from 'underscore';


// function getCards(){

//   const cards = [
//     {
//       character: '月',
//       pinying: 'yue',
//       translations:['la lune', 'un mois'],
//       comments:''
//     },
//     {
//       character: '天',
//       pinying: 'tian',
//       translations: ['le ciel', 'un jour'],
//       comments:''
//     },
//     {
//       character: '年',
//       pinying:'nian',
//       translations:['une annee', 'un an'],
//       comments:''
//     },
  
//     { 
//       character: '热',
//       pinying: 're',
//       translations:['chaud', 'avoir chaud'],
//       comments:''
//     },
//     {
//       character: '冷',
//       pinying: 'leng',
//       translations:['froid', 'avoir froid'],
//       comments:''
//     },
//     {
//       character: '是',
//       pinying: 'shi',
//       translations:['etre'],
//       comments:''
//     },
//     {
//       character: '有',
//       pinying: 'you',
//       translations:['avoir'],
//       comments:''
//     },
//     {
//       character: '吃',
//       pinying: 'chi',
//       translations:['manger'],
//       comments:''
//     },
//     {
//       character: '喝',
//       pinying: 'he',
//       translations:['boire'],
//       comments:''
//     }
//   ];

//   return cards
// }

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

let initialState = {
  user:{},
  cards:[]
};

function reducer(state = initialState, action)
{
  switch (action.type){
    case 'GET_CARDS':
        console.log('Get cards');
        return Object.assign(
          {},
          state,
          {cards: action.payload, turnData: getTurnData(action.payload), highlight:''},
        )
    case 'LOGIN':
        console.log(action.payload);
        return Object.assign(
          {},
          state,
          {user:action.payload}
        );
    case 'ANSWER_SELECTED':
        const isCorrect = state.turnData.card.translations.some((tr) => tr === action.payload);
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
    case 'LOG_STATE':
        console.log(state);
        return state;
          
    default:
      return state;
  }
}

export default reducer;