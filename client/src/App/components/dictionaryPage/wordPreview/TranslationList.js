import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


const TranslationList = ({word}) => {
  return (
    <div style={{margin: '20px 0'}}>
    {word && word.translations && word.translations.map((translation) => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{translation.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
    
        <List >
          {translation.sentences.map((sentence) => (
            <ListItem >
              <ListItemText primary={ sentence.sentence} secondary={ sentence.translatedSentence } />
            </ListItem>
          ))}
        </List >
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))}
    </div>
  )
}

export default  TranslationList;


