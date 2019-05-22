import React from 'react';
import { WordCard } from 'App/components/common/CardsComponents'
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TranslationList from './TranslationList';


const styles = theme => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    top:'70px',
    width: 300,
    paddingBottom: '70px'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
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
      style={{margin: '0 30px', overflow: 'initial'}} 
      word={word}
      horizontal='center' 
      align='left' 
      wordDetailAlign='center'
    />
    <TranslationList word={word}/>
  </Drawer>
  )
}

export default withStyles(styles, {withTheme: true })(WordPreview);