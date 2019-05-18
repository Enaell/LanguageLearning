import React from 'react';
import { WordCard } from 'App/components/common/CardsComponents'
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const drawerWidth= 300;

const styles = theme => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    marginTop: '70px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  }
});



const WordPreview = ({ word, open, closeWordPreview, classes, theme}) => {
  
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
    <div className={classes.drawerHeader}>
      <IconButton onClick={closeWordPreview}>
        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>
    <WordCard 
      style={{margin: '0 30px'}} 
      word={word}
      horizontal='center' 
      align='left' 
      wordDetailAlign='center'
    />
    {word && word.translations && word.translations.map((translation) => (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{translation.name}</Typography>
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
  </Drawer>
  )
}

export default withStyles(styles, {withTheme: true })(WordPreview);