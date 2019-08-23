import React from 'react';
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
  translations.forEach((translation, i, translations) => {
    if (Object.is(translations.length - 1, i))
      s += translation.name;
    else
      s += (translation.name + ', ');
  })
  return s;
}

export const SelectedWords = ({ wordList, handleWordPreview }) => {

  console.log('selected words component wordlist');
  console.log(wordList);

  return (
    <List>
    {wordList.map((word, index) => {
      return(
        <ListItem style={{minWidth: '350px'}} key={index} role={undefined} button onClick={() => handleWordPreview(word)}>
         <ListItemText
            style={{paddingRight: '30px'}} 
            primary={`${word.name} - ${word.globalName}`}
            primaryTypographyProps={{variant:'body1'}}
            secondary={`${translationList(word.translations)}`}
            dense
          />
          {/* <ListItemSecondaryAction >
            <IconButton aria-label="wordPreview" onClick={handleWordPreview(word)}>
              <CommentIcon />
            </IconButton>
          </ListItemSecondaryAction> */}
        </ListItem>
      )})
    }
    </List>
  )
}
