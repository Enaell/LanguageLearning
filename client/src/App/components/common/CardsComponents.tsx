import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import { Column } from 'simple-flexbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const WordCard = ({ word, elevation, align, wordDetailAlign, style }) => {
  return (
    <Card elevation={ elevation || 1 } style={style}>
      <CardContent>
          <Typography align={ align } color="textSecondary" gutterBottom>
            Caractère
          </Typography>
          <Typography align={ wordDetailAlign || align } component="h2" variant="h1" gutterBottom>
            { word.name }
          </Typography>
          <Typography align={ align } color="textSecondary" gutterBottom>
            Pinying
          </Typography>
          <Typography align={ wordDetailAlign || align } variant="h6" gutterBottom>
            { word.globalName }
          </Typography>
      </CardContent>
    </Card>
  );
}

export const WordColumn = ({ word, horizontal, nameVariant, globalNameVariant }) => {
  return (
    <Column horizontal={ horizontal || 'center'} >
        <Typography color="textSecondary" gutterBottom>
          Caractère
        </Typography>
        <Typography variant={ nameVariant || 'h2' } gutterBottom>
          { word.name }
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Pinying
        </Typography>
        <Typography variant= { globalNameVariant || 'h6' } gutterBottom>
          { word.globalName }
        </Typography>
    </Column>
  )
}

export const TranslationList = ({word}) => {
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
