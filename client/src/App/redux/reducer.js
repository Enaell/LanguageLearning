import {shuffle, sample} from 'underscore';
import theme from '../theme';

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
  user: {},
  dictionary:{
    words: [],
    selectedWords: [],
    wordPreview: {}  
  },
  loginModal: {
    open: false,
    tab: 0,
  },
  navSnackBar: {
    open: false,
    variant: 'success',
    message: 'Success !'
  },
  theme: theme
};

function reducer(state = initialState, action)
{
  switch (action.type){
    case 'GET_WORDS':
        return Object.assign(
          {},
          state,
          {
            dictionary: Object.assign({}, state.dictionary, {
              words: action.payload.sort((a, b) => {return a.globalName > b.globalName;}) || [] 
                // .map(word => Object.assign(word, {isSelected: true}))
            })
          }
        )
    case 'UPDATE_SELECTED_WORDS':
        const selectedWords = [...state.dictionary.selectedWords];
        const currentIndex = selectedWords.indexOf(action.payload);
        if (currentIndex === -1) {

          selectedWords.push(action.payload);
        } else {
          selectedWords.splice(currentIndex, 1);
        }
        return Object.assign(
          {},
          state,
          {
            dictionary: Object.assign({}, state.dictionary, { selectedWords: selectedWords })
          }
        );
    case 'CLEAN_SELECTED_WORDS':
        return Object.assign(
          {},
          state,
          {dictionary: Object.assign({}, state.dictionary, { selectedWords: [] })}
        )
    case 'SET_WORD_PREVIEW':
        return Object.assign(
          {},
          state,
          {dictionary: Object.assign({}, state.dictionary, { wordPreview: action.payload })}
        )
    case 'TOGGLE_LOGIN_MODAL':
        return Object.assign(
          {},
          state,
          {
            loginModal: Object.assign({}, state.loginModal,{ open: !state.loginModal.open })
          }
        )
    case 'CHANGE_LOGIN_MODAL_TAB':
        return Object.assign(
          {},
          state,
          {
            loginModal: Object.assign({}, state.loginModal, { tab: action.payload })  
          }
        )
    case 'LOGIN':
        return Object.assign(
          {},
          state,
          {user:action.payload}
        );
    case 'LOGOUT':
        return Object.assign(
          {},
          state,
          {user:{}}
        );
    case 'TOGGLE_NAV_SNACKBAR':
        return Object.assign(
          {}, 
          state, 
          {
            navSnackBar: Object.assign({}, state.navSnackBar, { open: !state.navSnackBar.open })
          }
        );
    case 'SET_NAV_SNACKBAR':
        return Object.assign(
          {},
          state,
          {
            navSnackBar: Object.assign({}, state.navSnackBar, { variant: action.payload.variant, message: action.payload.message })  
          }
        )
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