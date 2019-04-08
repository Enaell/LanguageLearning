import React, { Component } from 'react';
import '../css/App.css';
import '../../bootstrap.min.css';
import CardTrainingPage from './cardTraining/CardTrainingPage';
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import AddCardForm from './addCard/AddCardForm'
import MainPage from './mainPage/MainPage'
import { BrowserRouter, Route } from 'react-router-dom'
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import reducer from '../redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

console.log(React.version);

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
              <Route path="/cardTraining" render={() => <CardTrainingPage />} />
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
