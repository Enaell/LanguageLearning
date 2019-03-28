import React, { Component } from 'react';
import '../css/App.css';
import '../../bootstrap.min.css';
import CardTrainingPage from './cardTraining/components/CardTrainingPage';
import Footer from './Footer'
import AddCardForm from './addCard/AddCardForm'
import MainPage from './mainPage/MainPage'
import { BrowserRouter, Route } from 'react-router-dom'
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import reducer from '../redux/reducer';


import ReactDOM from 'react-dom';
import { stat } from 'fs';

console.log(React.version);


let store = Redux.createStore(reducer);

class App extends Component {
  render() {
    return (
      <ReactRedux.Provider store={store}>
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