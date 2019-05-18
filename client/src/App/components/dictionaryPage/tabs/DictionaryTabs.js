import React, {useState} from 'react';
import { Column } from 'simple-flexbox';
import translate from 'counterpart';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import OrderList from './OrderList';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 300,
  }
});

const firstLetterSortedDictionary = (dictionary) => {
  
  let sortedDictionary = {}

  dictionary.forEach(word => {
    if (!sortedDictionary.hasOwnProperty(word.globalName.charAt(0)))
      sortedDictionary[word.globalName.charAt(0)] = [];
    sortedDictionary[word.globalName.charAt(0)].push(word);
  });
  return sortedDictionary;
}

const subjectSortedDictionary = (dictionary) => {

  let sortedDictionary = {}
  
  dictionary.forEach(word => {
    (word.subject).forEach(subject => {
      if (!sortedDictionary.hasOwnProperty(subject))
        sortedDictionary[subject] = [];
      sortedDictionary[subject].push(word);
    });
  })
  return sortedDictionary;
}


const DictionaryTabs = ({dictionary, openWordPreview, classes}) =>{
  
  const [tabNumber, setTabNumber] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabNumber(newValue);
  }

  return (
    // style={{marginRight: `${openWordPreview ? 300 : 0}px`}}
    <Column
      className={classNames(classes.content, {
        [classes.contentShift]: openWordPreview,
      })}
      horizontal='center'
    >

      <Tabs
      style={{maxWidth: '1150px'}}
      value={tabNumber}
      onChange={handleTabChange}
      indicatorColor="primary"
      textColor="primary"
      centered
      >
        <Tab label={translate('dictionaryPage.alphabeticOrder')}/>
        <Tab label={translate('dictionaryPage.subject')}/>
      </Tabs>
      {tabNumber === 0 && dictionary && 
        <OrderList dictionary={dictionary} sortDictionary={firstLetterSortedDictionary} />
      }
      {tabNumber === 1 && dictionary &&
        <OrderList dictionary={dictionary} sortDictionary={subjectSortedDictionary} />
      }
    </Column>
  )
}

export default withStyles(styles, {withTheme: true })(DictionaryTabs);
