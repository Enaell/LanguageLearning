import React, { Component } from 'react';
import '../css/App.css';
import '../../bootstrap.min.css';
import CardTrainingPage from './cardTraining/CardTrainingPage-container';
import Navbar from './navbar/Navbar-container'
import Footer from './footer/Footer'
import AddCardForm from './addCard/AddCardForm'
import MainPage from './mainPage/MainPage-container'
import { BrowserRouter, Route } from 'react-router-dom'
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import reducer from '../redux/reducer';
import counterpart from 'counterpart';
import localeFr from '../locale/fr.json';
import localeEn from '../locale/en.json';
import { composeWithDevTools } from 'redux-devtools-extension';

console.log(React.version);

counterpart.registerTranslations('en', localeEn);
counterpart.registerTranslations('fr', localeFr);

counterpart.setLocale('fr');

let store = Redux.createStore(reducer, composeWithDevTools());


class App extends Component {
  render() {
    return (
      <ReactRedux.Provider store={store}>
        <Navbar/>
        <div className="container-fluid" id="App">
          <BrowserRouter>
            <React.Fragment>
              <Route exact path="/" component={MainPage}/>
              <Route path="/cardTraining" component={CardTrainingPage} />
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
