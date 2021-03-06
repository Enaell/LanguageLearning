import React, { Component } from 'react';
import '../../bootstrap.min.css';
import CardTrainingPage from './cardTraining/CardTrainingPage-container';
import Navbar from './navbar/Navbar-container'
import Footer from './footer/Footer'
import AddCardForm from './addCard/AddCardForm'
import MainPage from './mainPage/MainPage-container'
import DictionaryPage from './dictionaryPage/DictionaryPage-container'
import { BrowserRouter, Route, Switch as RouterSwitch } from 'react-router-dom'
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import reducer from '../redux/reducer';
import counterpart from 'counterpart';
import localeFr from '../locale/fr.json';
import localeEn from '../locale/en.json';
import { composeWithDevTools } from 'redux-devtools-extension';
import RouteNotFound from './RouteNotfound';
import { Column } from 'simple-flexbox';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';

console.log(React.version);

counterpart.registerTranslations('en', localeEn);
counterpart.registerTranslations('fr', localeFr);

counterpart.setLocale('fr');

let store = Redux.createStore(reducer, composeWithDevTools());


class App extends Component {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Column horizontal='center'>
              <Navbar/>
              <RouterSwitch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/cardTraining" component={CardTrainingPage} />
                <Route path="/addCard" component={AddCardForm} />
                <Route path="/dictionary" component={DictionaryPage}/>
                <Route component={RouteNotFound} />
              </RouterSwitch>
              <Footer />
            </Column>
          </BrowserRouter>
        </MuiThemeProvider>
      </ReactRedux.Provider>
    );
  }
}

export default App;
