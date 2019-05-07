import React, {useState} from 'react';
import { Column } from 'simple-flexbox';
import translate from 'counterpart';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import OrderList from './OrderList';

const firstLetterSortedDictionary = (dictionary) => {

  let sortedDictionary = {}

  dictionary.map(word => {
    if (!(sortedDictionary.keys && sortedDictionary.keys.includes(word.globalName.charAt(0))))
      sortedDictionary[word.globalName.charAt(0)] = [];
    sortedDictionary[word.globalName.charAt(0)].push(word);
  });
  return sortedDictionary;
}

const subjectSortedDictionary = (dictionary) => {

  let sortedDictionary = {}

  dictionary.map(word => {
    if (!(sortedDictionary.keys && sortedDictionary.keys.includes(word.subject)))
      sortedDictionary[word.subject] = [];
    sortedDictionary[word.subject].push(word);
  });
  return sortedDictionary;
}


const DictionaryTabs = ({dictionary}) =>{
  
  const [tabNumber, setTabNumber] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabNumber(newValue);
  }


  return(
    <Column>
      <Tabs
      style={{width: '1150px'}}
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
        <OrderList dictionary={dictionary} sortedDictionary={firstLetterSortedDictionary} />
      }
      {tabNumber === 1 &&
        <Typography variant="h3" color={'primary'} >tab 1</Typography>
      }
    </Column>
  )
}

export default DictionaryTabs;
