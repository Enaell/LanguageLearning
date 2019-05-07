import React from 'react';
import { Column } from 'simple-flexbox';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

export const wordItem = () => {
}

const translationList = (translations) => {
  let s = '';
  translations.forEach(translation => {
    s += translation.name;
  })
  return s;
} 

export const WordList = ({wordList, handleToggle, checked}) => {
  return (
    <List>
    {Object.keys(wordList).map(value => {
      return(
        <ListItem style={{minWidth: '350px'}} key={value} role={undefined} button onClick={handleToggle(value)}>
          <Checkbox color={'primary'} checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
          <ListItemText 
            style={{paddingRight: '30px'}} 
            primary={`${wordList[value].name} - ${wordList[value].globalName}`}
            primaryTypographyProps={{variant:'body1'}}
            secondary={`${translationList(wordList[value].translations)}`} 
          />
          <ListItemSecondaryAction >
            <IconButton aria-label="Comments">
              <CommentIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )})
    }
    </List>
  )}
