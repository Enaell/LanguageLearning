import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';


class CardForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      character: '',
      pinying: '',
      translations: [],
      comments:'',
      translationTemp: ''
    }
    
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddTranslation = this.handleAddTranslation.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onAddCard(this.state);
  }

  handleAddTranslation(event){
    this.setState({
      translations: this.state.translations.concat([this.state.translationTemp]),
      translationTemp: ''
    });
  }

  onFieldChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>

        {/* <TextField
          id="outlined-character-input"
          label="Character"
          margin="normal"
          variant="outlined"
          value={this.state.character}
          onChange={this.onFieldChange}
          name="character"
        /> */}

        <label htmlFor="character">Character</label>
        <input type="texte" name="character" value={this.state.character} onChange={this.onFieldChange} />

        <label htmlFor="pinying">Pinying</label>
        <input type="texte" name="pinying" value={this.state.pinying} onChange={this.onFieldChange}/>

        <label htmlFor="pinying">Comments</label>
        <input type="texte" name="comments" value={this.state.comments} onChange={this.onFieldChange}/>

        {this.state.translations.map((tr) => <p key={tr}>{tr}</p>)}
        <label htmlFor="translationTemp">Translations</label>
        <input type="text" name="translationTemp" value={this.state.translationTemp} onChange={this.onFieldChange}></input>
        <input type="button" value="+" onClick={this.handleAddTranslation}></input>

        <input type="submit" value="Add"></input>
      </form>
    )}
}

function AddCardForm({match, onAddCard}){
  return(
    <div>
      <h1>Add Card</h1>
      <CardForm onAddCard={onAddCard}/>
    </div>
  );
}

function mapDispatchToProps(dispatch, props){
  return{
    onAddCard:(card) => {
      dispatch({type:'ADD_CARD', card});
      props.history.push('/');
    }
  }
}

export default withRouter(connect (()=>{}, mapDispatchToProps)(AddCardForm));